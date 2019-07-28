import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user : User;

  constructor() { }

  login(username: string) {
    this.user = new User();
    this.user.username = username;
  }

  getUsername() : Observable<string> {
    return (this.user) ? of (this.user.username) : null;
  }
}
