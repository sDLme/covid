import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// resolver
import { APIResolver } from 'src/app/core/services/api.resolver';

// component
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, resolve: { items: APIResolver }}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
