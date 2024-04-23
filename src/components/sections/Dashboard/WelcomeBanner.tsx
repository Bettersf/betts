import React from "react";
import Image from "next/image"; // Import Image from next/image

export function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-gradient-to-br from-orange-300 via-pink-500 to-blue-500 animate-gradient">
      <div className="lg:col-span-2 text-center lg:text-left">
        <div className="flex items-center justify-center md:justify-start relative">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
            Welcome To DogeBets Casino. 
          </h1>
          {/* Use Image component with proper src and alt */}
          <div className="w-full h-96 md:h-auto md:w-auto relative">
            <Image src="/banner.jpeg" alt="Gamba Logo" layout="fill" objectFit="cover" />
          </div>
        </div>
        <p className="mt-5 text-white drop-shadow">
           Join our launch and take part in a Huge ecosystem! Soon will we open for staking, and other utilities for the holders!
        </p>
      </div>
      <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
      <button
          onClick={() => window.open("")}
          className="headerButton"
        >
          Buy $DOGE
        </button>
        <button
          onClick={() => window.open("https://twitter.com/DogeBetsSOL")}
          className="headerButton"
        >
          Twitter
        </button>
        <button
          onClick={() => window.open("https://t.me/DogeBetsSOL")}
          className="headerButton"
        >
          Telegram
        </button>
        <button
          onClick={() => window.open("https://t.me/PawsPurse")}
          className="headerButton"
        >
          Whitepaper v1 (TBA)
        </button>
      </div>
      {/* Background image with neon colors */}
      <style jsx>{`
        .relative::before {
          content: "";
          background-image: url('/banner.jpeg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.3;
          z-index: -1;
        }

        /* Neon Colors */
        .headerButton {
          background-color: #f90;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .headerButton:hover {
          background-color: #ff0;
        }
      `}</style>
    </div>
  );
}
