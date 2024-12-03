import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalesLayoutComponent } from './layout/signales-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SignalesLayoutComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
