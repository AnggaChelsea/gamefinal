import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../../components/signup/signup.component';
import { SignComponent } from '../../components/sign/sign.component';
import { ForgotpasswordComponent } from '../../components/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path:'',
    component:SignComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'forgot',
    component:ForgotpasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
