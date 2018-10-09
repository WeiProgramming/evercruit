
import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {DashboardComponent} from './pages/candidate-dashboard/dashboard.component';
import {RecruiterDashboardComponent} from './pages/recruiter-dashboard/recruiter-dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'recruiter',
        component: RecruiterDashboardComponent
      }
    ]
  }
];
