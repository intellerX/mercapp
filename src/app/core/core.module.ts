import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PlusbuttonComponent } from './components/plusbutton/plusbutton.component';
import { SearchvarComponent } from './components/searchvar/searchvar.component';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [NavbarComponent, PlusbuttonComponent, SearchvarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [NavbarComponent, PlusbuttonComponent, SearchvarComponent]

})
export class CoreModule { }
