import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'user/:userLogin', component: UserComponent },
  { path: 'repository', component: RepositoryComponent,
    children: [
    ],
  },
  { path: '', redirectTo: 'user/:userLogin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
