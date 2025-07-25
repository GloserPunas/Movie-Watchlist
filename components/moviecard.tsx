import Image from 'next/image';

export default function MovieCard() {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-50 h-auto">
            <Image src="/Breaking Bad.jpg" 
                width={500}
                height={300}
                alt="Breaking Bad"
                className="w-full h-auto object-cover" />
            <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">Breaking Bad </h2>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-500">2008</span>
                    <span className="text-yellow-500 font-bold">9.5/10 ★</span>
                </div>
            </div>
        </div>
    );
}