import Navbar from "@/components/navbar";

export default function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Welcome to the Movie Watchlist
                </h1>
                <p className="text-lg text-center text-gray-600 mb-4">
                    Discover and manage your favorite movies effortlessly.
                </p>
            </div>
        </div>
    );
}