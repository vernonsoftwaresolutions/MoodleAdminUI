import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { CreatetenantsComponent } from './createtenants/createtenants.component';
import { CreateTenantService } from './createtenants/createtenants.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'createtenants',
    pathMatch: 'full'
  },
  {
    path: 'tenants',
    component: PostsComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'createtenants',
    component: CreatetenantsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreatetenantsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService, CreateTenantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
