import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './component/about/about.component';
import { OfferComponent } from './component/offer/offer.component';
import { FlightsComponent } from './component/flights/flights.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
   
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    OfferComponent,
    FlightsComponent,
    SidebarComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
