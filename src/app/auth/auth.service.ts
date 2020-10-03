import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from './user.model';
import {Router} from '@angular/router';

interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  passwords: {
    password1: string,
    password2: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  register(registerValues: RegisterValues): void {
    this.http.post('http://localhost:8080/register', {
      firstName: registerValues.firstName,
      lastName: registerValues.lastName,
      email: registerValues.email,
      phone: registerValues.phone,
      address: registerValues.address,
      password: registerValues.passwords.password1,
    }).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  login(loginValues: {email: string, password: string}): void {
    this.http.post<{token: string}>('http://localhost:8080/signin', loginValues).subscribe((response) => {
      console.log(response);
      this.userSubject.next(response);
      localStorage.setItem('userToken', JSON.stringify(response));
      this.router.navigate(['/']);
    });
  }

  // called once application starts (app.component.js)
  // gets token from localStorage
  autoLogin(): void {
    const userToken: {token: string} = JSON.parse(localStorage.getItem('userToken'));
    if (!userToken) {
      return;
    }

    this.userSubject.next(userToken);
  }
}
