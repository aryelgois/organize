import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NotFoundGuard } from './guards/not-found.guard';
import { WelcomeGuard } from './guards/welcome.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [WelcomeGuard],
    children: [], // enables guard
    pathMatch: 'full',
  },

  {
    path: '404',
    loadChildren: './pages/not-found/not-found.module#NotFoundPageModule',
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
        loadChildren: './pages/edit-list/edit-list.module#EditListPageModule',
      },
      {
        path: 'qrscanner',
        loadChildren: './pages/list-qr-scanner/list-qr-scanner.module#ListQrScannerPageModule',
      },
      {
        path: ':listId',
        children: [
          {
            path: '',
            loadChildren: './pages/list/list.module#ListPageModule',
          },
          {
            path: 'edit',
            loadChildren: './pages/edit-list/edit-list.module#EditListPageModule',
          },
          {
            path: 'share',
            children: [
              {
                path: '',
                loadChildren: './pages/share-list/share-list.module#ShareListPageModule',
              },
              {
                path: 'access',
                loadChildren: './pages/list-access/list-access.module#ListAccessPageModule',
              },
              {
                path: 'invite',
                loadChildren: './pages/invite/invite.module#InvitePageModule',
              },
              {
                path: 'qrcode',
                loadChildren: './pages/list-qr-code/list-qr-code.module#ListQrCodePageModule',
              },
            ],
          },
        ],
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
    children: [
      {
        path: '',
        loadChildren: './pages/products/products.module#ProductsPageModule',
      },
      {
        path: 'new',
        loadChildren: './pages/edit-product/edit-product.module#EditProductPageModule',
      },
      {
        path: ':productId',
        children: [
          {
            path: '',
            loadChildren: './pages/edit-product/edit-product.module#EditProductPageModule',
          },
          {
            path: 'keywords',
            children: [
              {
                path: '',
                loadChildren: './pages/product-keywords/product-keywords.module#ProductKeywordsPageModule',
              },
              {
                path: 'new',
                loadChildren: './pages/new-keyword/new-keyword.module#NewKeywordPageModule',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: 'welcome',
    loadChildren: './pages/welcome/welcome.module#WelcomePageModule',
  },

  {
    path: '**',
    canActivate: [NotFoundGuard],
    children: [], // enables guard
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
