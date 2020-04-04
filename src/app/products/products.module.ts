import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatDividerModule,
        MatCardModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatTreeModule
    ]
})
export class ProductsModule { }
