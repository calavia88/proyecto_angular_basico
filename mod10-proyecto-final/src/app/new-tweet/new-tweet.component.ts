import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {
  
  newTweet = '';

  constructor(public dialogRef: MatDialogRef<NewTweetComponent>, 
    @Inject(MAT_DIALOG_DATA) public message: string
     ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
