import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './components/basket/basket.component';
import { MyBasketsComponent } from './components/my-baskets/my-baskets.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    BasketComponent,
    MyBasketsComponent, ProductComponent, ProductsComponent, ProfileComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    IonicModule.forRoot({ mode: 'ios' }),
    CoreModule
  ]
})
export class BasketModule { }
