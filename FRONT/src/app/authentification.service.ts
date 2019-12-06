import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt'; 
import { User } from '../app/models/user';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import { Product } from './models/product';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // TODO
  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.backendClient, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.backendProduct)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(environment.productById + "/" + productId)
      .pipe(
        catchError(this.handleError)
      );
  }

  login(login: string, password: string): Observable<User> {
    let headersHttp = new HttpHeaders();
    let token = btoa('${login}:${password}');
    headersHttp = headersHttp.append("Authorization", "Basic " + token);

    const http = {
      headers: headersHttp
    };

    return this.httpClient.post<User>(environment.login, { login, password }, http)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

}
