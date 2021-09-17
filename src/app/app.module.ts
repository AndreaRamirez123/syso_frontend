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
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
