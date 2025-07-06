// db.js
import { PrismaClient } from '@prisma/client'

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client

// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import prisma from '../../../lib/db'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })
        if (user && user.password === credentials.password) {
          return { id: user.id, name: user.name, email: user.email }
        } else {
          return null
        }
      }
    })
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
})