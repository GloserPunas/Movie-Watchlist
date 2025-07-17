"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import { alumniSans } from "@/app/ui/fonts";
import { Button } from "@/app/ui/button";
import LoginForm from "@/components/login-form";
import React, { useState } from "react";

export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <div className="min-h-screen bg-black">
      <main >
        <div className="relative w-full">
          <Image
          src="/background.jpg"
          alt="Background Image"
          width={1000}
          height={500}
          className="max-w-none w-full shadow-lg display-inline"
        />
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/60">
            <p className="text-lg mb-4 drop-shadow">Don&apos;t know where to store your watchlist? Come to us!</p>
            <h1 className= {`${alumniSans.className} text-7xl font-bold mb-4 drop-shadow-lg`} >Welcome to the Movie Watchlist</h1>
            <p className="text-lg drop-shadow">Sign in to manage your movie watchlist now!</p>
            <Button className="mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            onClick={() => setShowLoginForm(true)} >
              Sign In
            </Button>
          </div>
          {showLoginForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-md">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-orange-700 text-2xl"
                  onClick={() => setShowLoginForm(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <LoginForm />
              </div>
            </div>
            )}
        </div>
      </main>
    </div>
  )
}
