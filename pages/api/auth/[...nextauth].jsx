import NextAuth from "next-auth/next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { prisma } from "../../../libs/prismaDB";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "xyx@yahoo.com" },
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "text", placeholder: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Please enter an email and Password')
        }
        const user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (!user || !user ?.hashedPassword) {
          throw new Error('No user found')
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

        if (!passwordMatch) {
          throw new Error('Incorrect Password')
        }

        return user
      },
    }),
   ],

  callbacks: {
    authorized({ req, token }) {
      if (token) return true; // If there is a token, the user is authenticated
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  debug: process.env.NODE_ENV === "production",
};

const handler = NextAuth(authOptions);

export default handler;
