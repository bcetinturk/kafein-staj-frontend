import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  register(registerValues: RegisterValues): void {
    this.http.post('http://localhost:8080/register', {
      firstName: registerValues.firstName,
      lastName: registerValues.lastName,
      email: registerValues.email,
      phone: registerValues.phone,
      address: registerValues.address,
      password: registerValues.passwords.password1,
    }).subscribe(() => {
      console.log('registered');
    });
  }

  login(loginValues: {email: string, password: string}): void {
    this.http.post('http://localhost:8080/signin', loginValues).subscribe((response) => {
      console.log(response);
    });
  }
}
