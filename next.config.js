const path = require('path');

module.exports = {
  // Your next configuration

  header: async () => [
    {
      key: 'Service-Worker-Allowed',
      value: '/',
    },
  ],
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: process.env.BACKEND_URL,
    },
  ],
};
