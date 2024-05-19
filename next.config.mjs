/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_URL: process.env.NEXT_URL,
        NEXT_GOOGLE_CLIENT_ID: process.env.NEXT_GOOGLE_CLIENT_ID,
        NEXT_GOOGLE_CLIENT_SECRET: process.env.NEXT_GOOGLE_CLIENT_SECRET,
        NEXT_GITHUB_CLIENT_ID: process.env.NEXT_GITHUB_CLIENT_ID,
        NEXT_GITHUB_CLIENT_SECRET: process.env.NEXT_GITHUB_CLIENT_SECRET,
        DATABASE_URL: process.env.DATABASE_URL
    },
    images: {
        domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
    }
};

export default nextConfig;
