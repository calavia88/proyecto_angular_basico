import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/dto/login.dto';
import { RegisterDto } from '../models/dto/register.dto';
import { TweetDto } from '../models/dto/tweet.dto';
import { AuthResponse } from '../models/interfaces/auth.interface';
import { TweetResponse } from '../models/interfaces/tweet.interface';

const apiUrl = 'https://www.minitwitter.com:3001/apiv1';

const defaultHeaders = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  doLogin(loginDto: LoginDto): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${apiUrl}/auth/login`, loginDto, defaultHeaders);
  }

  doRegister(registerDto: RegisterDto): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${apiUrl}/auth/signup`, registerDto, defaultHeaders);

  }

  getAllTweets(): Observable<TweetResponse[]>{

    let token = localStorage.getItem('token');

    const authHeaders = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<TweetResponse[]>(`${apiUrl}/tweets/all`,authHeaders)
  }

  setFavTweet(id:number): Observable<TweetResponse>{
    let token = localStorage.getItem('token');

    const authHeaders = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<TweetResponse>(`${apiUrl}/tweets/like/${id}`,null,authHeaders)
  }

  postNewTweet(tweetDto : TweetDto): Observable<TweetResponse>{
    let token = localStorage.getItem('token');

    const authHeaders = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<TweetResponse>(`${apiUrl}/tweets/create`,tweetDto,authHeaders)
  }
}
