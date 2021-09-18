import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { BlogComponent } from './modules/pages/blog/blog.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './modules/pages/contact/contact.component';
import { AboutUsComponent } from './modules/pages/about-us/about-us.component';
import { ActionLinesComponent } from './modules/pages/action-lines/action-lines.component';
import { JobsComponent } from './modules/pages/jobs/jobs.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './modules/pages/login/login.component';
import { WebComponent } from './modules/template/web/web.component';
import { ApplicationComponent } from './modules/template/application/application.component';
import { ForumComponent } from './modules/private/forum/forum.component';
import { NewsComponent } from './modules/private/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationHomeComponent } from './modules/private/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    ActionLinesComponent,
    JobsComponent,
    LoginComponent,
    WebComponent,
    ApplicationComponent,
    ForumComponent,
    NewsComponent,
    ApplicationHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
