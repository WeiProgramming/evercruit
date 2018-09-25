import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {LoginComponent} from './default-layout/login/login.component';
import {SignUpComponent} from './default-layout/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/signup',
    component: SignUpComponent
  }
];
