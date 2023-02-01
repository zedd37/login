import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private email: string = 'zedd@gmail.com';
  private password: string = '123456789';

  login(email: string, password: string) {
    this.http.post<any>('https://reqres.in/api/posts', { email: email, password: password }).subscribe(data => {
      console.log(data);
      if (data?.token) {
        localStorage.setItem('token', data.token);
      }
    })
    // if (email === this.email && password === this.password) {
    //   localStorage.setItem('email', email);
    //   return true;
    // }
    // return false;
  }
  isLoggedIn() {
    return !!localStorage.getItem('email')
  };
}
