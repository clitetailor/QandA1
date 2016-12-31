import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogoHeaderComponent } from './homepage/logoheader.component';
import { FooterComponent } from './homepage/footer.component';
import { MainBodyComponent } from './homepage/body.component';
import { SignPageComponent } from './forms/signpage/signpage.component';
import { PostContentComponent } from './posts/postcontent.component';
import { AskPageComponent } from './forms/askquestion/askpage.component';
import { MyProfileComponent } from './users/myprofile.component';
import { ListUserComponent } from './users/listuser.component';
import { PostComponent } from './homepage/bodycontent/post.component';
import { BlogComponent } from './homepage/bodycontent/blog.component';

import { AskPageService } from './services/askpage.service';
import { HomeService } from './services/homepage.service';
import { PostService } from './services/post.service';
import { UsersService } from './services/users.service';

const appRoutes: Routes = [
  { path: 'home', component: MainBodyComponent },
  { path: 'signpage', component: SignPageComponent },
  { path: 'post/:id', component: PostContentComponent },
  { path: 'askpage', component: AskPageComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'listuser', component: ListUserComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    MainBodyComponent,
    SignPageComponent,
    PostContentComponent,
    AskPageComponent,
    MyProfileComponent,
    ListUserComponent,
    AppComponent,
    LogoHeaderComponent,
    FooterComponent,
    BlogComponent,
    PostComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    HomeService,
    AskPageService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
