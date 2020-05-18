import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './features/home/home-page/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'about', loadChildren: () => import('./features/about/about-page/about.module').then(m => m.AboutModule) },
  { path: 'products', loadChildren: () => import('./features/products/products-page/products.module').then(m => m.ProductsModule) },
  { path: 'classes', loadChildren: () => import('./features/classes/classes-page/classes.module').then(m => m.ClassesModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
