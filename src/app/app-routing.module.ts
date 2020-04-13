import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'classes', loadChildren: () => import('./features/classes/classes.module').then(m => m.ClassesModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
