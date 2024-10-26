import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  trustHost: true,
  callbacks: {
    // Modify the jwt callback to properly store the user ID
    async jwt({ token, user, account, }) {
      // If we have user data (i.e., during sign in)
      if (user) {
   
        token.id = account.providerAccountId;
        token.role = user.role;
      }
      return token;
    },
    // Ensure session gets the correct user ID from the token
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      async profile(profile, tokens) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/${process.env.NEXT_PUBLIC_ADMIN_ID}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: profile.name,
                email: profile.email,
              }),
            }
          );

          const data = await response.json();
          
          
          if (!response.ok) {
            throw new Error('Failed to authenticate with backend');
          }
         
          // Ensure we're using the ID from your backend
          return {
            id: data.user.id, // This ID will be passed to the jwt callback
            role: 'user',
            name: profile.name,
            email: profile.email,
            image: profile.picture
          };
        } catch (error) {
          console.error('Error in Google profile callback:', error);
          throw error; // This will prevent sign-in if backend authentication fails
        }
      },
    }),
    CredentialsProvider({
      id: 'admin-login',
      name: 'Admin Login',
      credentials: {
        secretKey: { label: "Secret Key", type: "password" },
        email: { label: "email", type: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/login`,
            {
              username: credentials.email,
              password: credentials.password,
              secretKey: credentials.secretKey,
            }
          );

          if (response.status !== 200) {
            return null;
          }

          const data = response.data;
          return {
            id: data.admin.id,
            role: 'admin',
            ...data
          };
        } catch (error) {
          console.error('Login error:', error);
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: 'user-registration',
      name: 'User Registration',
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
        gender: { label: "Gender", type: "select" },
        age: { label: "Age", type: "number" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/${process.env.NEXT_PUBLIC_ADMIN_ID}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(credentials),
            }
          );

          if (!response.ok) return null;

          const data = await response.json();
          return {
            id: data.user.id,
            role: 'user',
            ...credentials,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig);