/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
		remotePatterns: [
			new URL('https://raw.githubusercontent.com/saber-notes/saber/**'),
		],
	},
	reactStrictMode: true,
}

module.exports = nextConfig
