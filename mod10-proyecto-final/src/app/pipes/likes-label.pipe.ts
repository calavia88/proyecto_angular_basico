import { Pipe, PipeTransform } from '@angular/core';
import { TweetResponse } from '../models/interfaces/tweet.interface';

@Pipe({
  name: 'likesLabel'
})
export class LikesLabelPipe implements PipeTransform {

  transform(tweet: TweetResponse): string {
    if (tweet.likes.length == 1){
      return "LIKE"
    }
    else{
      return "LIKES"
    }
  }

}
