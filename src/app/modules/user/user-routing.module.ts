import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent,
    children: [
    ],
  },
  { path: 'repository', component: RepositoryComponent,
    children: [
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
