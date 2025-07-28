"use server";

import MovieCard from "@/components/moviecard";
import Navbar from "@/components/navbar";

export default async function HomePage() {
    const response = await fetch('http://localhost:3000/api/tmdb');
    const movies = await response.json();
    if (!movies || movies.length === 0) {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-700">No movies available at the moment.</h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Welcome to the Movie Watchlist!
                </h1>
                <div className="flex flex-row flex-wrap gap-5 max-w-full mx-auto bg-white p-6 justify-between rounded-lg shadow-md">
                    {movies.results.map((movie: any) => (
                        <MovieCard
                            key={movie.id}
                            movietitle={movie.title}
                            moviedate={movie.release_date}
                            movievote={movie.vote_average}
                            movieimage={movie.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
    );
}