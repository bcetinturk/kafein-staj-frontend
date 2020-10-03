import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {User} from '../auth/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: UserDetails;
  editingUser: UserDetails = null;
  isEditing = false;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.http.get<UserDetails>('http://localhost:8080/user')
      .subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  updateProfile(): void {
    this.isEditing = true;
    console.log(this.user);
    this.editingUser = Object.assign({}, this.user);
  }

  submit(updateForm: NgForm): void {
    // TODO: add interceptor
    this.http.patch('http://localhost:8080/user', updateForm.value)
      .subscribe(() => {
        // updating was successful, update info locally
        Object.assign(this.user, updateForm.value);
        this.isEditing = false;
      });
  }
}

interface UserDetails {
  email: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
}
