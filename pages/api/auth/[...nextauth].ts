import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
