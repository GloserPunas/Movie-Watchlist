'use client'

import RegisterForm from "@/components/register-form";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className="bg-gray-800 h-full min-h-screen flex p-6">
            <div className="mx-10">
                <h1 className="text-4xl font-bold text-white text-center">
                    Take your snack and start your watching plan now!
                </h1>
                <div className="flex flex-col items-center justify-center max-w-md mx-auto p-8">
                    <Image src ="/popcorn.gif" 
                    alt="gif img" 
                    width={500} 
                    height={200} 
                    className="mx-auto"/>
                </div>
        </div>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <RegisterForm />
            </div>
        </div>
    );
}