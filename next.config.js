module.exports = {
  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.calguksu.com/:path*',
      },
    ];
  },
};
