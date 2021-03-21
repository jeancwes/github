import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { HomeComponent } from './home/home.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    HomeComponent, 
    RepositoryComponent, 
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
