// src/api/contact-form/routes/custom-contact-form.js

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/contact-form/test-email',
        handler: 'contact-form.testSendEmail',
        config: {
          auth: false, // Set this to true if you want the route to be protected
        },
      },
    ],
  };
  