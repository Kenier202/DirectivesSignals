import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalesLayoutComponent } from './layout/signales-layout.component';


@NgModule({
  declarations: [
    SignalesLayoutComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
