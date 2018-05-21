import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ]
})
export class UserModule { }
