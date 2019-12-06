import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { Product } from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  private p: Product;
  private index :number;

  constructor(private service: CatalogService, private route:ActivatedRoute) { }

  ngOnInit() {
    //this.index = +this.route.snapshot.paramMap.get('id');
    //console.log(this.index);
    //this.p = this.service.getProductById(this.index);
    //console.log(this.p);
  }
}
