import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TweetResponse } from '../models/interfaces/tweet.interface'
import { MatDialog } from '@angular/material/dialog';
import { NewTweetComponent } from '../new-tweet/new-tweet.component';
import { TweetDto } from '../models/dto/tweet.dto';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  selectedTweet : TweetResponse[] | undefined;
  favTweet : TweetResponse | undefined;
  tweetDto = new TweetDto()
  constructor(private service: AuthService, public dialog: MatDialog) { }


  ngOnInit(): void {

    this.service.getAllTweets().subscribe(resultado => {
      this.selectedTweet = resultado;
      }
    )}

    setfavTweet(tweet: TweetResponse | undefined){
      if (tweet){
        this.service.setFavTweet(tweet.id).subscribe(
          resultado => {
            this.favTweet = resultado;
            
            //refrescamos la página para que salga el like actualizado
            window.location.reload();
          },
          error => { 
            console.log(error);
          }
        )
      }
      else{
        alert("Tweet erróneo")
      }
      
    }

    createNewTweet(): void{
      const dialogRef = this.dialog.open(NewTweetComponent,{
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(response => {
        if (response){

          this.tweetDto.mensaje = response

          this.service.postNewTweet(this.tweetDto).subscribe(
            data => {
              console.log(data);
              //refrescamos la página para que salga el like actualizado
              window.location.reload();
            },
            error => { // En caso de error entraría aquí
                alert('Error en el Servidor')
              console.log(error);
            }
          );
        

        }
      })

    }
}
