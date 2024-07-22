import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signupClient(credentials: any): Observable<any>{
    console.log(credentials)
    return this.http.post( 'http://172.213.179.219:3000'+ '/client-auth/signup' , credentials ,{withCredentials: true})
  }

  signupLawyer(credentials: any): Observable<any>{
    return this.http.post('http://172.213.179.219:3000' + '/lawyer-auth/signup' , credentials ,{withCredentials: true})
  }

}
