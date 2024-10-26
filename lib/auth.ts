import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// Define types for better type safety
interface UserResponse {
  id: string;
  // Add other user fields as needed
}

interface AdminResponse {
  id: string;
  // Add other admin fields as needed
}

export const authConfig = {
  pages: {
    signIn: "/login",
    error: "/auth/error", // Add error page
  },
  callbacks: {
    //@ts-ignore
    async jwt({ token, user, account }) {
      try {
        if (user) {
          if (user.role === 'admin') {
            const response = await axios.post<AdminResponse>(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/login`,
              {
                username: user.email,
                password: user.password,
                secretKey: user.secretKey,
              }
            );

            if (response.data && response.data.id) {
              token.id = response.data.id;
              token.role = user.role;
            } else {
              throw new Error('Invalid admin response');
            }
          }

          if (user.role === 'user') {
            const userData = {
              name: user.name,
              email: user.email,
              ...(user.age && { age: user.age }), // Optional fields
              ...(user.gender && { gender: user.gender })
            };

            const response = await axios.post<UserResponse>(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/${process.env.NEXT_PUBLIC_ADMIN_ID}`,
              userData
            );

            if (response.data && response.data.id) {
              token.id = response.data.id;
              token.role = user.role;
            } else {
              throw new Error('Invalid user response');
            }
          }
        }
        return token;
      } catch (error) {
        console.error('JWT callback error:', error);
        throw error; // This will trigger the error page
      }
    },
//@ts-ignore
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
          // Uncomment and use this code when backend is ready
          const response = await axios.post<UserResponse>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/${process.env.NEXT_PUBLIC_ADMIN_ID}`,
            {
              name: profile.name,
              email: profile.email,
            }
          );

          if (!response.data || !response.data.id) {
            throw new Error('Failed to authenticate with backend');
          }

          return {
            id: response.data.id,
            role: 'user',
            name: profile.name,
            email: profile.email,
            image: profile.picture
          };
        } catch (error) {
          console.error('Error in Google profile callback:', error);
          throw error;
        }
      },
    }),

    CredentialsProvider({
      id: 'admin-login',
      name: 'Admin Login',
      credentials: {
        secretKey: { label: "Secret Key", type: "password" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      //@ts-ignore
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password || !credentials?.secretKey) {
            return null;
          }

          const response = await axios.post<AdminResponse>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/login`,
            {
              username: credentials.email,
              password: credentials.password,
              secretKey: credentials.secretKey,
            }
          );

          if (!response.data || !response.data.id) {
            return null;
          }

          return {
            id: response.data.id,
            role: 'admin',
            email: credentials.email
          };
        } catch (error) {
          console.error('Admin login error:', error);
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
        age: { label: "Age", type: "number" }
      },
      //@ts-ignore
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.name) {
            return null;
          }

          const response = await axios.post<UserResponse>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/${process.env.NEXT_PUBLIC_ADMIN_ID}`,
            {
              name: credentials.name,
              email: credentials.email,
              //@ts-ignore
              ...(credentials.gender && { gender: credentials.gender }),
              //@ts-ignore
              ...(credentials.age && { age: Number(credentials.age) })
            }
          );

          if (!response.data || !response.data.id) {
            return null;
          }

          return {
            id: response.data.id,
            role: 'user',
            name: credentials.name,
            email: credentials.email,
            gender: credentials.gender,
            age: credentials.age
          };
        } catch (error) {
          console.error('User registration error:', error);
          return null;
        }
      },
    }),
  ],
};

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig);