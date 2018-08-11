import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './pages/dashboard/feed/feed.component';
import { CalendarioComponent } from './pages/dashboard/calendario/calendario.component';
import { BuscaComponent } from './pages/dashboard/busca/busca.component';
import { ConfiguracoesComponent } from './pages/dashboard/configuracoes/configuracoes.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/dashboard/perfil/perfil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:  LoginComponent
  },

  {
    path: 'dashboard',
    component:  DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
      },
      {
        path: 'busca',
        component:  BuscaComponent
      },
      {
        path: 'calendario',
        component:  CalendarioComponent
      },
      {
        path: 'configuracoes',
        component:  ConfiguracoesComponent
      },
      {
        path: 'feed',
        component:  FeedComponent
      },
      {
        path: 'perfil',
        component:  PerfilComponent
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
