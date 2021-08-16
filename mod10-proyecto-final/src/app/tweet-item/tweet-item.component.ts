import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TweetResponse } from '../models/interfaces/tweet.interface';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.css']
})
export class TweetItemComponent implements OnInit {
  isFavorite = false;
  @Input() tweet: TweetResponse | any;
  @Output() tweetSelected = new EventEmitter<TweetResponse>();

  constructor() { }

  ngOnInit(): void {
  }

  markFarorite(tweet: TweetResponse | undefined){
    this.tweetSelected.emit(tweet);
  }
}
