import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { BasketComponent } from './components/basket/basket.component';
import { MyBasketsComponent } from './components/my-baskets/my-baskets.component';
import { ProductComponent } from './components/product/product.component';
//import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: BasketComponent,
    children: [
      { path: 'mybaskets/:userId', component: MyBasketsComponent },
      { path: 'product/:productId', component: ProductComponent },
      { path: 'profile/:userId', component: ProfileComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
