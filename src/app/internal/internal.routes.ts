
import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];
