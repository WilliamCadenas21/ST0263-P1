import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable, of } from 'rxjs';
import { UserWrapper } from '../shared/userWrapper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userWrapper: UserWrapper;
  private user: User;

  constructor() {
    this.userWrapper = {
      user: null
    }
  }

  login(user: User) {
    this.user = user;
    this.userWrapper.user = user;
  }

  logout() {
    this.user = null;
    this.userWrapper.user = null;
  }

  getUserWrapper() : Observable<UserWrapper> {
    return of (this.userWrapper);
  }

  getUsername() : Observable<string> {
    return (this.userWrapper.user) ? of (this.userWrapper.user.username) : null;
  }
}
