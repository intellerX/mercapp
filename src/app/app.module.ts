import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './feature/home/home.component';
import { BasketModule } from './feature/basket/basket.module';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule, BasketModule, CoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
