import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule} from '@angular/router';
import { routes } from './public-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../shared/material.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    DefaultLayoutComponent,
    SignUpComponent,
    LoginComponent
  ]
})
export class PublicModule { }
