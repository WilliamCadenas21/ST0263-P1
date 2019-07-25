import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { LoginComponent } from '../login/login.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openFilterForm() {
    this.dialog.open(FilterComponent, {width: '500px', height: '450px'});
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width:'500px', height: '450px'});
  }
}
