import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './internal.routes';
import { DashboardComponent } from './pages/candidate-dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import {CalendarModule} from 'angular-calendar';
import { RecruiterDashboardComponent } from './pages/recruiter-dashboard/recruiter-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  declarations: [DashboardComponent, DefaultLayoutComponent, RecruiterDashboardComponent]
})
export class InternalModule { }
