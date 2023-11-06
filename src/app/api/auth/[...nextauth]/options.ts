import authApi from "@/api/auth";
import { AuthOptions } from "next-auth";
import CredendialsProvider from "next-auth/providers/credentials";

const options: AuthOptions = {
  providers: [
    CredendialsProvider({
      credentials: {},
      name: "credentials",
      type: "credentials",
      async authorize(credentials) {
        try {
          const loginRes = await authApi.login(credentials);
          return loginRes;
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/not-found",
  },
};

export default options;
