// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //backendClient: '/assets/mock/mock-products.json',
  backendClient: 'http://node21.codenvy.io:45280/Shop/bootstrap/app.php/api/auth/signin', 
  backendProduct: 'http://node21.codenvy.io:45280/Shop/bootstrap/app.php/api/secure/product/all',
  productById: 'http://node21.codenvy.io:45280/Shop/bootstrap/app.php/api/secure/product/get',
  login: 'http://node21.codenvy.io:45280/Shop/bootstrap/app.php/api/auth/signin'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
