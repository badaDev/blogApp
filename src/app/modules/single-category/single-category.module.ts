import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleCategoryRoutingModule } from './single-category-routing.module';
import { SingleCategoryComponent } from './single-category.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    SingleCategoryComponent
  ],
  imports: [
    CommonModule,
    SingleCategoryRoutingModule,
    SharedModuleModule,
  ]
})
export class SingleCategoryModule { }
