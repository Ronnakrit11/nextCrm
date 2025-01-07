/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    },
    experimental: {
        reactRoot: true,
        suppressHydrationWarning: true,
        serverActions: true,
    },
};

export default nextConfig;
