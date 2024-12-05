// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Your user ID type (string or number depending on your needs)
    role: string;
    token: string; // Your custom token
  }

  interface Session extends DefaultSession {
    user: User; // Override the default session user type
  }
}
