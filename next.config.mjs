/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_URL: process.env.NEXT_URL,
        NEXTAUTH_GOOGLE_CLIENT_ID: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
        NEXTAUTH_SECRET_GOOGLE_CLIENT: process.env.NEXTAUTH_SECRET_GOOGLE_CLIENT,
        NEXTAUTH_GITHUB_CLIENT_ID: process.env.NEXTAUTH_GITHUB_CLIENT_ID,
        NEXTAUTH_SECRET_GITHUB_CLIENT: process.env.NEXTAUTH_SECRET_GITHUB_CLIENT,
        DATABASE_URL: process.env.DATABASE_URL,
        DIRECT_URL: process.env.DIRECT_URL,
        PROJECT_ENV: process.env.PROJECT_ENV,
        NEXT_GOOGLE_ANALITYCS: process.env.NEXT_GOOGLE_ANALITYCS,
        NEXT_GOOGLE_TAGS_MANAGER: process.env.NEXT_GOOGLE_TAGS_MANAGER,
        SECRET: process.env.SECRET,
    },
    images: {
        domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
    }
};

export default nextConfig;
