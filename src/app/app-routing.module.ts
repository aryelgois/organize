import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full',
  },

  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutPageModule',
  },

  {
    path: 'join',
    loadChildren: './pages/join/join.module#JoinPageModule',
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
      {
        path: ':listId',
        loadChildren: './pages/list/list.module#ListPageModule',
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

  {
    path: 'products',
    loadChildren: './pages/products/products.module#ProductsPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
