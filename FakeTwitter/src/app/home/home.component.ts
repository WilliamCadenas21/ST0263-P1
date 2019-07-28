import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { LoginService } from '../services/login.service';
import { TweetService } from '../services/tweet.service';

import { Filter } from '../shared/filter';
import { Tweet } from '../shared/tweet';
import { TweetWraper } from '../shared/tweetWraper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tweetWraper: TweetWraper;
  filterForm: FormGroup;
  filter: Filter;
  @ViewChild('fform', {static: false}) filterFormDirective;


  constructor(private loginService: LoginService,
    private tweetService: TweetService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
      this.createForm();
    }

  ngOnInit() {
    this.tweetService.getTweets()
      .subscribe((tweetWraper) => this.tweetWraper = tweetWraper);
  }

  createForm() {
    this.filterForm = this.fb.group({
      author: ['', []],
      topic: ['', []],
    });
  }

  onSubmit() {
    this.filter = this.filterForm.value;
    console.log(this.filter);
    this.tweetService.filterTweets(this.filter);
  }
}
