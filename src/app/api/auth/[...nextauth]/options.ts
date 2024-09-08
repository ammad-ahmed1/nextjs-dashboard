import { baseurl } from "@/api/apiConfig";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

interface User {
  id: string;
  name: string;
  email: string;
  session: string;
  // Add any other fields that you expect in the user object
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },

      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) return null;
          const { email, password } = credentials;

          const res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const user = await res.json();
          // console.log(user);
          if (res.status === 200) {
            console.log(user, "..............user");
            return user;
          } else {
            // return null;
            throw new Error(
              JSON.stringify({
                errors: user?.message,
                status: false,
              })
            );
          }

          // if (!res.ok) {
          //   const errorData = await res.json();
          //   const errorMessage = errorData?.message || "Login failed";
          //   throw new Error(errorMessage);
          // }

          // const user = await res.json();
          // if ("token" in user) {
          //   return user;
          // } else {
          //   return { user, error: "Invalid login credentials" }; // Clearer error message
          // }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },

    async session({ token, session }) {
      session.user = token;
      // session.backendTokens = token.token;
      return session;
    },
  },
};
