import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

const authHandler = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" || account?.provider === "github") {
        user.name = profile?.name;
        user.email = profile?.email;
      }
      return true;
    },
    async session({ session, user, token }) {
      session.user = user;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_SECRET_GOOGLE_CLIENT as string,
    }),
    GitHubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_SECRET_GITHUB_CLIENT as string,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.PROJECT_ENV === "production",
      },
    },
  },
});

export { authHandler as GET, authHandler as POST };
