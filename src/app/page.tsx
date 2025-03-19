"use client";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function Page() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () =>
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className="relative flex justify-center items-center h-screen  overflow-hidden">
            <Confetti
                width={dimensions.width}
                height={dimensions.height}
                recycle={true}
                numberOfPieces={200}
            />
            <p className="absolute text-6xl md:text-5xl text-blue-500 font-extrabold text-center ">
                Hello World from Docker Container !!!
            </p>
        </div>
    );
}
