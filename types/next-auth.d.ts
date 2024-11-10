import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
  }

  interface NextAuthOptions {
    providers: Provider[];
    session: {
      strategy: "jwt";
    };
    pages: {
      signIn: string;
      error: string;
    };
    callbacks: {
      jwt: (params: { token: JWT; user: User }) => Promise<JWT>;
      session: (params: { session: Session; token: JWT }) => Promise<Session>;
    };
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
