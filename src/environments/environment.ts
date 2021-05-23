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
      }
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
      },
      {
        name: 'instagram-endpoint',
        address: 'http://localhost:8090/api/instagram',
        format: 'application/json'
      }
    ]
  }
};
