import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { LoginComponent } from '../login/login.component';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent);
    this.user = "foo";
  }

  openSignUpForm() {

  }

  logOut() {
    this.user = null;
  }
}
