'use client'

import Link from "next/link";
import { useActionState } from "react";
import { login } from "@/lib/action";
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/homepage';
    const [errorMessage, loginAction] = useActionState(
      login,
      undefined,
      );
    
    return (

        <form action = { loginAction } className="max-w-md mx-auto p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            Login
        </button>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <Link className="mt-4 text-sm text-gray-600 hover:text-orange-600 hover:underline"
        href="/register">
            Don&apos;t have an account? 
        </Link>
        </form>
    );
    }