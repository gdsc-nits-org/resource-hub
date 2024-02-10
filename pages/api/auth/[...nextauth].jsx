import NextAuth from "next-auth/next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import {prisma} from '../../../libs/prismaDB'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers:[
        GithubProvider({
             clientId: process.env.GITHUB_CLIENT_ID ,
             clientSecret:process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{ label: "Email", type:"text", placeholder:"xyx@yahoo.com"},
                username:{ label:"Username", type:"text", placeholder:"username"},
                password:{ label:"Password", type:"text", placeholder:"password"} 
            },
            async authorize(credentials){
                if (!credentials || !credentials.email || !credentials.password)
                return null;
      
              const dbUser = await prisma.user.findFirst({
                where: { email: credentials.email },
              });
      
              
              if (dbUser && dbUser.password === credentials.password) {
                const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
                return dbUserWithoutPassword 
              }
      
              return null;
            },
        }),
    ],

    callbacks: {
        authorized({ req , token }) {
          if(token) return true // If there is a token, the user is authenticated
        }
      },
    secret: process.env.NEXT_AUTH_SECRET,
    session: {
     strategy: "jwt",
    },

    debug: process.env.NODE_ENV === 'production',
};
export async function loginIsRequiredServer() {
    const session = await getServerSession(authOptions);
    if (!session) return redirect("/");
  };
  
  export function loginIsRequiredClient() {
    if (typeof window !== "undefined") {
      const session = useSession();
      const router = useRouter();
      if (!session) router.push("/");
    }
}

const handler =  NextAuth(authOptions)

export default handler;