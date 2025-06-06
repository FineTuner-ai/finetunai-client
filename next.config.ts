import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
    output: 'standalone',
   // output: "export",
   reactStrictMode: true,
 
  images: { 
    domains: ['images.app.goo.gl', 'th.bing.com', 'img.freepik.com', 'melaninconnect.xyz', 'res.cloudinary.com'], // Allow this domain for external images
  },
};

export default nextConfig;
