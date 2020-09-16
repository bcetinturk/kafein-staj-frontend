import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  get passwords() {
    return (this.registerForm.controls.passwords as FormGroup).controls;
  }

  constructor(private authService: AuthService) { }

  initForm(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      passwords: new FormGroup({
        password1: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        password2: new FormControl(null, [Validators.required, Validators.minLength(8)])
      }, this.passwordsMatch.bind(this))
    });
  }

  passwordsMatch(passwordGroup: FormGroup): {[key: string]: any} | null {
     const password1 = passwordGroup.get('password1');
     const password2 = passwordGroup.get('password2');

     return password1.touched &&
      password2.dirty &&
      password1.value !== password2.value ? {passwordsDoNotMatch: true} : null;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.authService.register(this.registerForm.value);
  }
}
