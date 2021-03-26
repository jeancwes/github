import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    RepositoryComponent, 
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    RepositoryComponent, 
    UserComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule { }
