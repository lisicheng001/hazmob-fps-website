/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 可选：Cloudflare Pages 上常见的设置
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },

  // 统一在这里设置 X-Robots-Tag（允许索引）
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value:
              'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
          // 可选缓存（不影响收录）
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
