const nextConfig = {
	async redirects() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:8000/:path*',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
