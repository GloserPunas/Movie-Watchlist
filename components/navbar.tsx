"use server";

import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/app/auth';

export default async function Navbar() {
  //const { data: session } = useSession();
  const  session = auth();
  
  return ( 
    <nav className="bg-black/80 p-4 w-full" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
            <Link href="/" className="hover:text-gray-300">
                <Image
                    src="/logo.png"
                    alt="Movie Watchlist Logo"
                    width={100}
                    height={100}
                    className="inline-block mr-2 w-auto h-auto"
                />
            </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-orange-500">What we got here</Link>
          </li>
          <li>
            <Link href="/" className="text-white hover:text-orange-500">About Us</Link>
          </li>
          <li> {session ? (
            <Link href="" className="text-white hover:text-orange-500">
              {session?.user?.name || 'Profile'}
              </Link>)
            : ( <Link href="/register" className="text-white hover:text-orange-500">Register</Link>)
          }
          </li>
        </ul>
      </div>
    </nav>
  );
}