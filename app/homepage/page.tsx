"use server";
import MovieCard from "@/components/moviecard";
import Navbar from "@/components/navbar";
import { auth } from "@/app/auth";

export default async function HomePage( 

 ) {
    const session = await auth();
    console.log('Authenticated user:', { session });

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Welcome to the Movie Watchlist { session?.user?.name }!
                </h1>
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <MovieCard/>
                </div>
            </div>
        </div>
    );
}