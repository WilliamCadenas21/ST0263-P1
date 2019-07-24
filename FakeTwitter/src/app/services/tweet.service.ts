import { Injectable } from '@angular/core';

import { Tweet } from '../shared/tweet';
import { TWEETS } from '../shared/tweets';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() { }

  getTweets() : Tweet[] {
    return TWEETS;
  }
}
