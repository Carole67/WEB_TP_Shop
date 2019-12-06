import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from '../../app/article-details-mod/article-details/article-details.component'
import { CommonModule } from '@angular/common'

const routes: Routes = [
  { path: ':id', component: ArticleDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleDetailsModRoutingModule { }
