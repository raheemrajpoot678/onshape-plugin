import NextAuth, { type NextAuthOptions } from "next-auth";

interface OnshapeProfile {
  id: string;
  name: string;
  email: string;
  image: string;
  [key: string]: any; // This allows for additional properties
}

const onshapeAuthProvider = {
  id: "onshape",
  name: "Onshape",
  type: "oauth" as const,
  version: "2.0",
  authorization: {
    url: "https://oauth.onshape.com/oauth/authorize",
    params: {
      scope: "OAuth2Read OAuth2Write",
    },
  },
  token: {
    url: "https://oauth.onshape.com/oauth/token",
    async request(context) {
      const { provider, params } = context;
      const credentials = Buffer.from(
        `${provider.clientId}:${provider.clientSecret}`
      ).toString("base64");

      const response = await fetch("https://oauth.onshape.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${credentials}`,
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: params.code,
          redirect_uri: provider.callbackUrl,
        }),
      });

      const tokens = await response.json();

      if (!response.ok) {
        console.error("Token Error:", tokens);
        throw new Error(
          tokens.error_description || tokens.error || response.statusText
        );
      }

      return { tokens };
    },
  },
  userinfo: {
    url: "https://cad.onshape.com/api/users/sessioninfo",
    async request({ tokens }) {
      const response = await fetch(
        "https://cad.onshape.com/api/users/sessioninfo",
        {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }

      return await response.json();
    },
  },
  clientId: process.env.ONSHAPE_CLIENT_ID,
  clientSecret: process.env.ONSHAPE_CLIENT_SECRET,
  profile(profile: OnshapeProfile) {
    return {
      id: profile.id,
      name: profile.name,
      email: profile.email,
      image: profile.image,
      ...profile, // Include all other properties from the profile
    };
  },
};

export const authOptions: NextAuthOptions = {
  providers: [onshapeAuthProvider],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      return !!(account?.provider === "onshape" && user);
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
