import prisma from "@/app/lib/prisma";
import { compare } from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const OPTIONS: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "crusherblack",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials: any) {
				const loginErrorMessage = "Invalid Email or password";

                const isUserExisted = await prisma.user.findUnique({
                    where: {
                        email: credentials?.username
                    }
                })

                if (!isUserExisted) {
                    throw Error(loginErrorMessage)
                }

                if (
                    isUserExisted && credentials?.password &&
                    (await compare(credentials.password, isUserExisted.password))
                ) {
                    return isUserExisted
                }
                throw Error(loginErrorMessage)
			},
		}),
	],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRETE
    }
};

const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
