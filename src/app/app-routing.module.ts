import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './modules/guards/AuthGuard';
import { AboutUsComponent } from './modules/pages/about-us/about-us.component';
import { ActionLinesComponent } from './modules/pages/action-lines/action-lines.component';
import { BlogComponent } from './modules/pages/blog/blog.component';
import { ContactComponent } from './modules/pages/contact/contact.component';
import { ForumWebComponent } from './modules/pages/forum-web/forum-web.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { JobsComponent } from './modules/pages/jobs/jobs.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { ForumComponent } from './modules/private/forum/forum.component';
import { ApplicationHomeComponent } from './modules/private/home/home.component';
import { NewsComponent } from './modules/private/news/news.component';
import { RisksComponent } from './modules/private/risks/risks.component';
import { UserProfileComponent } from './modules/private/user-profile/user-profile.component';
import { UsersComponent } from './modules/private/users/users.component';
import { ApplicationComponent } from './modules/template/application/application.component';
import { WebComponent } from './modules/template/web/web.component';

const routes: Routes = [
  {
    path:'site',
    component: WebComponent,
    children: [
      { path: 'home',component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'action-lines', component: ActionLinesComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forum', component: ForumWebComponent },
    ]
  },
  {
    path:'application',
    component: ApplicationComponent,
    children: [
      { path: 'forum', component: ForumComponent, canActivate: [ CanActivateViaAuthGuard ] },
      { path: 'news', component: NewsComponent, canActivate: [ CanActivateViaAuthGuard ] },
      { path: 'home', component: ApplicationHomeComponent, canActivate: [ CanActivateViaAuthGuard ] },
      { path: 'risks', component: RisksComponent, canActivate: [ CanActivateViaAuthGuard ] },
      { path: 'users', component: UsersComponent, canActivate: [ CanActivateViaAuthGuard ] },
      { path: 'user-profile', component: UserProfileComponent, canActivate: [ CanActivateViaAuthGuard ] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
