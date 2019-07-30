import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../shared/tweet';
import { TWEETS } from '../shared/tweets';
import { Filter } from '../shared/filter';

import { TweetWrapper } from '../shared/tweetWrapper';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private tweetWrapper: TweetWrapper;
  private tweets: Tweet[];

  constructor() {
    this.tweets = TWEETS;
    this.tweetWrapper = {
      tweets: this.tweets
    }
  }

  getTweets() : Observable<TweetWrapper> {
    return of (this.tweetWrapper);
  }

  getTweet(id: string) : Observable<Tweet> {
    return of (this.tweetWrapper.tweets.filter((tweet) => (tweet.id === id))[0]);
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
    this.tweetWrapper.tweets = this.tweets;
  }

  updateTweet(id: string, topic: string, comment: string) {
    this.tweets.filter((tweet) => (tweet.id === id))[0].content = comment;
    this.tweets.filter((tweet) => (tweet.id === id))[0].topic = topic;
    this.tweetWrapper.tweets = this.tweets;
  }

  pushTweet(tweet: Tweet) {
    this.tweets.push(tweet);
    this.tweetWrapper.tweets = this.tweets;
  }

  deleteTweet(tweet: Tweet) {

  }

}
