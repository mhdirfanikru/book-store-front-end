import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
  ],
 
  imports: [
    CommonModule,
    CartRoutingModule,
    NavbarModule,
    FormsModule
  ]
})
export class CartModule { }
