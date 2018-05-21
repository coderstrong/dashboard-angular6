import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'dashboard', component: BaseComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
  declarations: [
    BaseComponent,
    HomeComponent,
    SidebarComponent
  ]
})

export class DashboardModule { }
