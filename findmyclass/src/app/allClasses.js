"use client"

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function allClasses() {
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-johnston bg-cover bg-center w-full">
            <Navbar />
                <div>
                    <h1>Hellooooooo</h1>
                </div>
            <Footer />
        </main>
    );
}