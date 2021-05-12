// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  providers: {
    auth: {
      address: 'http://localhost:8090/',
      authentication: 'Basic',
      endpoints: {
        login: 'api/auth/login',
        logout: 'api/auth/logout'
      },
      sessionBearer: 'X-Auth-Token'
    },
    resources: [
      {
        name: 'photo-endpoint',
        address: 'http://localhost:8090/api/images',
        format: 'application/json'
      },
      {
        name: 'project-endpoint',
        address: 'http://localhost:8090/api/projects',
        format: 'application/json'
      },
      {
        name: 'order-endpoint',
        address: 'http://localhost:8090/api/form/order',
        format: 'application/json'
      },
      {
        name: 'contact-endpoint',
        address: 'http://localhost:8090/api/form/contact',
        format: 'application/json'
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
