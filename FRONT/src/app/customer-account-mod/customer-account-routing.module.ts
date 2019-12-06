import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common'
import {CompteComponent} from './compte/compte.component';

const routes: Routes = [
  { path: '', component: CompteComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerAccountRoutingModule { }
