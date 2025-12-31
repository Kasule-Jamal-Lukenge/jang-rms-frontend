import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { API_BASE_URL } from '../../app/config/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
    @Inject(API_BASE_URL) private baseUrl: string
  ) { }

  login(data: any){
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  register(data: any){
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

}
