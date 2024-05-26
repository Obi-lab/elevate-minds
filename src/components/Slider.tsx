"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Capacity from "../../public/capacity.png"
import Climate from "../../public/climate.jpg"
import Electric from "../../public/electric.jpg"
import EnergyAudit from "../../public/energyAudit.jpg"
import Environment from "../../public/environment.jpg"
import Waste from "../../public/waste.jpg"
import Link from "next/link";

const sliderData = [
    {
        id: 1,
        imageSrc: Capacity,
        heading:"Capacity Building in Renewable Energy",
        content: "ElevateMinds offers energy management training to equip energy professionals with holistic energy management skills relevant to the market and create awareness of energy management amongst the public",
    },
    {
        id: 2,
        imageSrc: EnergyAudit,
        heading:"Capacity Building in Renewable Energy",
        content: "ElevateMinds provides a comprehensive review of energy supply and end use. The review aims to identify existing gaps and quantify energy losses and costs",
    },
    {
        id: 3,
        imageSrc: Climate,
        heading:"Climate Change mitigation/adaptation Research",
        content: "We take a comprehensive approach to climate change research and consultancy. We understand that climate change is causing unpredictable shifts in ecosystems and economic, social, and natural systems",
    },
    {
        id: 4,
        imageSrc: Waste,
        heading:"Waste Management and Consulting",
        content: "ElevateMinds has an overwhelming capacity to help implement legally compliant waste management strategies. ElevateMinds brings expertise to help clients address their needsContent for Slide 4",
    },
    {
        id: 5,
        imageSrc: Environment,
        heading:"Environmental Management Services ",
        content: "ElevateMinds has leading-edge, experienced expertise in environmental management systems. ",
    },
    {
        id: 6,
        imageSrc: Electric,
        heading:"E-Mobility ",
        content: "We extend the value of choice, environmental sustainability, and cost to every person while offering transport for convenience and comfort without users necessarily putting the high upfront capex for ownership. ",
    },
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center z-30">
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl z-30 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={handlePrev}
            >
                {"<"}
            </button>
            <div className="w-full h-full flex flex-row gap-20 items-center justify-center overflow-hidden">
                <div
                    className="flex w-[100%] transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 102}%)`,
                    }}
                >
                    {sliderData.map((item) => (
                        <div
                            key={item.id}
                            className="flex w-[100vw] flex-shrink-0 md:px-20 px-10 items-center justifycenter"
                        >
                            <div className="flex flex-row gap-2 w-full h-full">
                                <div className="w-1/2 flex flex-col gap-4  h-64 bg-opacity-50 text-black 
                                    p-4">
                                    <p className="text-3xl font-bold text-gray-800">{item.heading}</p>
                                    <p className="text-gray-400">{item.content}</p>
                                    <div className="py-4">
                                    <Link href="/" className="p-4 text-white bg-red-600 rounded">Discover</Link>
                                    </div>
                                </div>
                                <div className="w-1/2 h-64 rounded-xl px-6 relative">
                                    <Image src={item.imageSrc} layout="fill" objectFit="cover" alt={`Slide image ${item.id}`}
                                        className="rounded-r-lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl z-30 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={handleNext}
            >
                {">"}
            </button>
        </div>
    );
}
