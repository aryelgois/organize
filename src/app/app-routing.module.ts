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
    children: [
      {
        path: '',
        loadChildren: './pages/about/about.module#AboutPageModule',
      },
      {
        path: 'privacy',
        loadChildren: './pages/about-privacy/about-privacy.module#AboutPrivacyPageModule',
      },
      {
        path: 'terms',
        loadChildren: './pages/about-terms/about-terms.module#AboutTermsPageModule',
      },
    ],
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
      },
      {
        path: 'new',
        loadChildren: './pages/new-list/new-list.module#NewListPageModule',
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
