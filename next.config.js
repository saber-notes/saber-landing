/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/saber-landing',
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/adil192/saber/**',
			},
		],
	},
}

module.exports = nextConfig
