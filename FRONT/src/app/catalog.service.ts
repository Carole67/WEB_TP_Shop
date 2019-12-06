import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Product } from './models/product';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient: HttpClient) { }

  // get products from JSON file
  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.backendProduct);  
  }

  // product by id
  public getProductById(id: number | string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === +id))
    );
    /* this.httpClient.get<Product[]>(environment.backendClient).pipe(
      map(products => products.find(p => p.id === +id))
    );*/
  }

  // get columns name
  public getColumns(): string[] {
    return ["#", "Nom", "Matière", "Prix"];
  }
}
