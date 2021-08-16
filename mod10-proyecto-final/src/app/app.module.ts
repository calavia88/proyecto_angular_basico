import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetItemComponent } from './tweet-item/tweet-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LikesLabelPipe } from './pipes/likes-label.pipe';
import { NewTweetComponent } from './new-tweet/new-tweet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TweetListComponent,
    TweetItemComponent,
    NewTweetComponent,
    LikesLabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[NewTweetComponent],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
