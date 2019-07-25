import { Component, OnInit } from '@angular/core';

import { Tweet } from '../shared/tweet';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  tweets: Tweet[];
  user: string;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.tweets = this.tweetService.getTweets();
    this.user = 'Gregor';
  }

}
