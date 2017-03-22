import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';

  const ROUTES: Routes =[
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: 'heroes',
        component: HeroesComponent
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
