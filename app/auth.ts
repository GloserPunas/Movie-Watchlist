import NextAuth from 'next-auth';
import z from 'zod';
import type { User } from '@/lib/definition';
import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

async function getUser(emailMatch: string): Promise<User | undefined> {
  try {
    const user = await prisma.users.findFirst({
      where: {
        email: emailMatch,
      },
      select: {
        email: true,
        password: true,
        username: true,
        id: true,
      },
    });
    console.log('Fetched user:', user);
    return user || undefined;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
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
            console.log('User authorized:', user);
            return {
              id: user.id.toString(),
              email: user.email,
              username: user.username,
            };
          }
          console.log("Incorrect Password");
          return null;
        }
        console.log('Invalid credentials:', parsedCredentials.error);
        return null;
      }
    }
    )
  ]
}

);