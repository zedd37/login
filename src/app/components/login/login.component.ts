import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls['email']?.value;
      const password = this.loginForm.controls['password']?.value;
      if (this.authService.login(email, password)) {
        this.router.navigate(['dashboard']);
      }
      else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  }


}
