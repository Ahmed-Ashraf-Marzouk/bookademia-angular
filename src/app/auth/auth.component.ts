import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  constructor(private authSerivce: AuthService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(form.value);
    if (this.isLoginMode) {
      //  ----
    } else {
      this.authSerivce.signup(email, password).subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    form.reset();
  }
}
