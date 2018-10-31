
import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {DashboardComponent} from './pages/candidate-dashboard/dashboard.component';
import {RecruiterDashboardComponent} from './pages/recruiter-dashboard/recruiter-dashboard.component';
import {AuthGuardService as AuthGuard} from '../shared/services/auth/guards/auth-guard.service';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'recruiter',
        component: RecruiterDashboardComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];
