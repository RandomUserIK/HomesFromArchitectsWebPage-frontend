export const environment = {
  production: true,
  providers: {
    auth: {
      address: 'http://89.47.165.164:8090/',
      authentication: 'Basic',
      endpoints: {
        login: 'api/auth/login',
        logout: 'api/auth/logout'
      }
    },
    resources: [
      {
        name: 'photo-endpoint',
        address: 'http://89.47.165.164:8090/api/images',
        format: 'application/json'
      },
      {
        name: 'project-endpoint',
        address: 'http://89.47.165.164:8090/api/projects',
        format: 'application/json'
      },
      {
        name: 'order-endpoint',
        address: 'http://89.47.165.164:8090/api/form/order',
        format: 'application/json'
      },
      {
        name: 'contact-endpoint',
        address: 'http://89.47.165.164:8090/api/form/contact',
        format: 'application/json'
      },
      {
        name: 'instagram-endpoint',
        address: 'http://89.47.165.164:8090/api/instagram',
        format: 'application/json'
      },
      {
        name: 'blog-endpoint',
        address: 'http://89.47.165.164:8090/api/blog',
        format: 'application/json'
      }
    ]
  }
};
