import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './components/basket/basket.component';
import { MyBasketsComponent } from './components/my-baskets/my-baskets.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    BasketComponent,
    MyBasketsComponent, ProductComponent, ProductsComponent, ProfileComponent
  ],
  imports: [
    CommonModule, BasketRoutingModule
  ]
})
export class BasketModule { }
