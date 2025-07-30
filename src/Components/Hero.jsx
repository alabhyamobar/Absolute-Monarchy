import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    const floatY = (target, delay = 0) => {
      gsap.to(target, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay,
      });
    };

    floatY(".float-top-left", 0);
    floatY(".float-top-right", 0.3);
    floatY(".float-bottom-right", 0.6);
    floatY(".hero-box", 0.1);
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative top-20 bg-gray-800 text-white overflow-hidden px-4 sm:px-6 md:px-20 py-16 sm:py-20 h-auto sm:h-[80vh]"
    >
      {/* Floating Badge - Top Left */}
      <div className="float-top-left absolute top-4 left-4 sm:top-6 sm:left-6 bg-white text-purple-700 font-semibold px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm shadow-md">
        ● New Collection 2024
      </div>

      {/* Floating Badge - Top Right */}
      <div className="float-top-right absolute top-4 right-4 sm:top-6 sm:right-6 bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-xl shadow-lg text-center">
        <p className="text-xs sm:text-sm font-semibold">Free Shipping</p>
        <p className="text-[10px] sm:text-xs text-gray-500">On orders over $100</p>
      </div>

      {/* Floating Badge - Bottom Right */}
      <div className="float-bottom-right absolute z-5 bottom-4 right-2 sm:bottom-6 sm:right-6 bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-xl shadow-lg text-center">
        <p className="text-xs sm:text-sm font-semibold">30-Day Returns</p>
        <p className="text-[10px] sm:text-xs text-gray-500">Hassle-free returns</p>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Area */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Fashion <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
              Redefined
            </span>
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Discover our latest collection of premium clothing that combines
            style, comfort, and sustainability.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
              Shop Now →
            </button>
            <button className="px-6 py-3 border border-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 transition flex items-center gap-2">
              ▶ Watch Story
            </button>
          </div>
        </div>

        {/* Hero Box */}
        <div className="hero-box w-full md:w-1/2">
          <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618354691255-51c6b8f75d59?auto=format&fit=crop&w=700&q=80"
              alt="Stylish Model"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
