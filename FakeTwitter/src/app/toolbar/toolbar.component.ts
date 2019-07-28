import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';
import { UserWrapper } from '../shared/userWrapper';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  userWrapper: UserWrapper;
  user: string;

  constructor(public dialog: MatDialog,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUserWrapper()
      .subscribe((userWrapper) => this.userWrapper = userWrapper);
  }

  openLoginForm() {
    this.dialog.open(LoginComponent);
  }

  openSignUpForm() {

  }

  logOut() {
    this.loginService.logout();
  }
}
