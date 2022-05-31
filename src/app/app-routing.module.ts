import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing page/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  
  { path: 'single-category', loadChildren: () => 
  import('./modules/single-category/single-category.module').then(m => m.SingleCategoryModule) },
  
  { path: 'single-post', loadChildren: () => 
  import('./modules/single-post/single-post.module').then(m => m.SinglePostModule) },
  
  { path: 'about', loadChildren: () => 
  import('./modules/about/about.module').then(m => m.AboutModule) },
  
  { path: 'terms-conditions', loadChildren: () => 
  import('./modules/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule) },
  
  { path: 'contact', loadChildren: () => 
  import('./modules/contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
