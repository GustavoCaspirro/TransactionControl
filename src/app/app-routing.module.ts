import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracoesComponent } from './pages/configuracoes';
import { ResumoComponent } from './pages/resumo';
import { DashboardComponent } from './pages/dashboard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configuracoes',
    pathMatch: 'full'
  },
  {
    path: 'configuracoes',
    component: ConfiguracoesComponent
  },
  {
    path: 'resumo',
    component: ResumoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
