import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// components 
import { HomeComponent } from './features/pages/home-page/home.component';


const routes: Routes = [
  // { path: '', redirectTo: 'registration', pathMatch: 'full'},
  { path: '', component: HomeComponent, },
  { path: 'about', loadChildren: () => import('./features/pages/about-page/about.module').then(m => m.AboutModule) },
  { path: 'registration', loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule) },
  { path: 'products', loadChildren: () => import('./features/pages/products-page/products.module').then(m => m.ProductsModule) },
  { path: 'classes', loadChildren: () => import('./features/pages/classes-page/classes.module').then(m => m.ClassesModule) },
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
