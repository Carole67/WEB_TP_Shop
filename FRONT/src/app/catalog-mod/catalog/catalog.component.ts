import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { Store } from '@ngxs/store';
import 'rxjs/add/operator/filter';
import { AddProductToCart } from '../../shared/actions/product-action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  // subscriber to listen or not 
  private _subscriber;

  // columns names
  columns: string[];
  //products
  products: Observable<Product[]>;

  // value from user
  inputFiltre: string = "";
  // kind of filter selected 
  type: string = "";

  constructor(private service: CatalogService, private store: Store, private router: Router) {
    this.products = this.store.select(state => state.cart.cart);
  }

  ngOnInit() {
    // get columns value
    this.columns = this.service.getColumns();
    this.products = this.service.getProducts();
  }

  // set value of category when it has changed
  public updateCategory(type: string) {
    this.type = type;
  }

  // set value of input value when it has changed
  public updateFilter(filter: string) {
    this.inputFiltre = filter;
  }

  // Stop listening 
  /*ngOnDestroy(): void {
    this._subscriber.unsubscribe();
  }*/

  onClick(p: Product) {
    this.addProduct(p);
  }

  onNavigate(p) {
    this.router.navigate(['/catalog/details/', p.id])
  }

  addProduct(p: Product) {
    this.store.dispatch(new AddProductToCart(p));
  }

}
