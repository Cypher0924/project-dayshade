import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    // Next.js 16 narrowed the default to [75]; keep 100 allowed for the
    // leaderboard promo image that requests quality={100}.
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "egnxpwlgexlmbbmyinii.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
