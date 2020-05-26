import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ProductsRoutingModule } from './products-routing.module';

// service
import { ApiService } from '../../../core/services/api.service';

// components
import { ProductsComponent } from './products.component';

// material
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatDividerModule,
  ],
  providers: [ApiService],
})
export class ProductsModule { }
