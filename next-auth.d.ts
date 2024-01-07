import { Session, DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    status?: boolean;
    result?: any;
  }
}
declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string;
  }
}
