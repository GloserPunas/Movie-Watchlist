import { Movie } from '@/lib/definition';
import Image from 'next/image';

export default function MovieCard({movietitle, moviedate, movievote, movieimage}:Movie) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-50 h-auto hover:scale-105 transition-transform duration-300">
            <Image src={`https://image.tmdb.org/t/p/w500${movieimage}`} 
                width={500}
                height={300}
                alt="Breaking Bad"
                className="w-full h-auto object-cover" />
            <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{movietitle}</h2>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-500">{moviedate}</span>
                    <span className="text-yellow-500 font-bold">{movievote}★</span>
                </div>
            </div>
        </div>
    );
}