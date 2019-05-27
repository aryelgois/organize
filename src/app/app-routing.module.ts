import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule',
  },
  {
    path: 'lists',
    children: [
      {
        path: '',
        loadChildren: './pages/lists/lists.module#ListsPageModule',
        pathMatch: 'full',
      },
      {
        path: 'new',
        loadChildren: './pages/new-list/new-list.module#NewListPageModule',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: './pages/login/login.module#LoginPageModule',
        pathMatch: 'full',
      },
      {
        path: 'recover',
        loadChildren: './pages/recover-login/recover-login.module#RecoverLoginPageModule',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
