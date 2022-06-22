import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    SharedModuleModule
  ]
})
export class TermsConditionsModule { }
