import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'search',
    loadChildren: 
      () => import('./modules/search/search-routing.module')
        .then(m => m.SearchRoutingModule)
  },
  {
    path: 'user',
    loadChildren: 
      () => import('./modules/user/user-routing.module')
        .then(m => m.UserRoutingModule)
  },
  {
    path: 'users',
    loadChildren: 
      () => import('./modules/users/users-routing.module')
        .then(m => m.UsersRoutingModule)
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
