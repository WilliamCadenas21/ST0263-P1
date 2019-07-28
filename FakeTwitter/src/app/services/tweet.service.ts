import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../shared/tweet';
import { TWEETS } from '../shared/tweets';
import { Filter } from '../shared/filter';

import { TweetWraper } from '../shared/tweetWraper';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private tweetWraper : TweetWraper;
  private tweets : Tweet[];

  constructor() {
    this.tweets = TWEETS;
    this.tweetWraper = {
      nothing: '',
      tweets: this.tweets
    }
  }

  getTweets() : Observable<TweetWraper> {
    return of (this.tweetWraper);
  }

  filterTweets(filter : Filter) {
    this.tweets = TWEETS;
    if (filter) {
      if (filter.author && filter.author.length > 0) {
        this.tweets = this.tweets.filter((tweet) => (tweet.author === filter.author));
      }
      if (filter.topic && filter.topic.length > 0) {
        this.tweets = this.tweets.filter((tweet) => (tweet.topic === filter.topic));
      }
    }
    this.tweetWraper.tweets = this.tweets;
  }

}
