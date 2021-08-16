import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TweetItemComponent } from './tweet-item/tweet-item.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tweet-list', component: TweetListComponent},
  { path: 'tweet-item', component: TweetItemComponent},
  { path: '', pathMatch: 'full', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
