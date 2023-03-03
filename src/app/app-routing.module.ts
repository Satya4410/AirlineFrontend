import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:RegistrationComponent,
    pathMatch:'full'
  },
{
  path:"navbar",
  component:NavbarComponent,
  pathMatch:'full'
},
{

  path:'Login',
  component:LoginComponent,
  pathMatch:'full'

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
