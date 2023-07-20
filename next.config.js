const path = require('path');

module.exports = {
  images: {
    domains: ['loremflickr.com'],
  },
  // Your next configuration
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.BACKEND_URL}/:path*`,
    },
  ],
};
