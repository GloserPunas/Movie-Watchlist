import NextAuth from 'next-auth';
import z from 'zod';
import type { User } from '@/lib/definition';
import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { PrismaClient } from '@/lib/generated/prisma';
import { Prisma } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

async function getUser(emailMatch: string): Promise<User | undefined> {
  try {
    const user = await prisma.users.findFirst({
      where: {
        email: emailMatch
      },
      select: {
        email: true,
        password: true,
        username: true,
        id: true
      }
    });
   if(user) return user;
   return null;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          
          const user = await getUser(email);
          
          if (!user) {
            console.log("Can't find the user");
            return null;
          }
          const hashedPassword = await bcrypt.hash(user.password, 10);
          const passwordMatch = await bcrypt.compare(password, hashedPassword);
        
          if (passwordMatch) {
            console.log(user);
            return user;
          } 
          console.log("Incorrect Password");
        }
        console.log('Invalid credentials:', parsedCredentials.error);
        return null;
      },
    }),
],
callbacks: {
  async session({ session, user }) {
      console.log(user.username);
      if (session.user && user) {
        session.user.username = user.username;
        console.log(session.user.name);
      }
      return session;
    },
}
});