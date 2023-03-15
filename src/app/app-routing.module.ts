import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FlightsComponent } from './component/flights/flights.component';
import { OfferComponent } from './component/offer/offer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'registration',
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

},
{
  path:'about',
  component:AboutComponent,
  pathMatch:'full'
},
{
  path:'offer',
  component:OfferComponent,
  pathMatch:'full'
},
{
  path:'flights',
  component:FlightsComponent,
  pathMatch:'full'
},
{
  path:'sidebar',
  component:SidebarComponent,
  pathMatch:'full'

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
