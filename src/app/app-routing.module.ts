import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step-1/step1.component';

const routes: Routes = [
  {
    path: 'step1',
    component: Step1Component
  },
  {
    path: '',
    redirectTo: 'step1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
