import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './internal.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, DefaultLayoutComponent]
})
export class InternalModule { }
