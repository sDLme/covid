import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatDividerModule } from '@angular/material/divider';

/// service
import { ApiService } from '../../core/services/api.service';



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
