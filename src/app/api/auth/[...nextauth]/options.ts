import authApi from "@/api/auth";
import { AuthOptions } from "next-auth";
import CredendialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

type LoginResponse = {
  role: string;
  username: string;
};

const options: AuthOptions = {
  providers: [
    CredendialsProvider({
      credentials: {},
      name: "credentials",
      type: "credentials",
      async authorize(credentials) {
        try {
          const loginRes = await authApi.login(credentials);
          return loginRes.result;
        } catch (error: any) {
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/not-found",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user?.status) {
        const decodedToken = jwt.decode(
          user.result.data.token
        ) as LoginResponse;
        token.name = decodedToken.username;
        token.role = decodedToken.role;
        token.accesToken = user.result.data.token;
      }
      return token;
    },
    async session({ token, session }) {
      session = { ...token, ...session };
      return session;
    },
  },
};

export default options;
