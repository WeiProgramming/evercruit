import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {HomeComponent} from './pages/home/home.component';
import {SignUpRecruiterComponent} from './pages/sign-up-recruiter/sign-up-recruiter.component';
import {RedirectIfAuthenticatedService as RedirectAuth} from '../shared/services/auth/guards/redirect-if-authenticated.service';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [RedirectAuth],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        children: [
          {
            path: 'recruiter',
            component: LoginComponent
          }
        ]
      },
      {
        path: 'signup',
        children: [
          {
            path: '',
            component: SignUpComponent
          },
          {
            path: 'recruiter',
            component: SignUpRecruiterComponent
          }
        ]
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
];
