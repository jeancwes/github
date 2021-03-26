import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  ],
  exports: [
    HomeComponent, 
    RepositoryComponent, 
    UserComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule { }
