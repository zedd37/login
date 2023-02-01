import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  private email: string = 'zedd@gmail.com';
  private password: string = '123456789';

  login(email: string, password: string): boolean {
    if (email === this.email && password === this.password) {
      localStorage.setItem('email', email);
      return true;
    }
    return false;
  }
  isLoggedIn() {
    return !!localStorage.getItem('email')
  };
}
