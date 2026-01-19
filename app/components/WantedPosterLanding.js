'use client';

import { useState } from 'react';

export default function WantedPosterLanding() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-stone-800 to-neutral-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60"></div>

      {/* Wanted Poster */}
      <section 
        aria-labelledby="wanted-title"
        className={`relative max-w-2xl w-full bg-amber-50 shadow-2xl transition-all duration-300 ${
          isHovered ? 'translate-y-[-4px]' : 'translate-y-0'
        }`}
        style={{
          transform: `rotate(-1.5deg) ${isHovered ? 'translateY(-4px)' : ''}`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
            : '0 20px 40px -12px rgba(0, 0, 0, 0.4)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Push pin decoration */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full shadow-lg border-2 border-red-800"></div>

        <div className="p-8 md:p-12 border-4 border-stone-800">
          {/* Header */}
          <h1 
            id="wanted-title"
            className="text-6xl md:text-8xl font-bold text-center mb-2 tracking-wider"
            style={{ 
              fontFamily: 'Georgia, serif',
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
            }}
          >
            WANTED
          </h1>
          
          <p className="text-center text-sm md:text-base mb-8 tracking-widest font-semibold text-stone-700">
            FOR ENGINEERING CRIMES
          </p>

          {/* Portrait Section */}
          <div className="mb-8 flex justify-center">
            <div className="relative border-4 border-stone-800 p-2 bg-stone-200">
              {/* Placeholder for actual portrait - replace with your image */}
              <div className="w-48 h-56 md:w-56 md:h-64 bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center">
                <span className="text-stone-200 text-sm font-mono">
                  [PORTRAIT]
                </span>
              </div>
              {/* Tape effect */}
              <div className="absolute -top-2 left-1/4 w-16 h-6 bg-amber-100 opacity-60 transform -rotate-12 border border-amber-200"></div>
              <div className="absolute -top-2 right-1/4 w-16 h-6 bg-amber-100 opacity-60 transform rotate-12 border border-amber-200"></div>
            </div>
          </div>

          {/* Identity Block */}
          <div className="mb-8 space-y-2 font-mono text-sm md:text-base">
            <div className="flex border-b border-stone-300 pb-1">
              <span className="font-bold w-32">NAME:</span>
              <span>CHINMAY S. PATIL</span>
            </div>
            <div className="flex border-b border-stone-300 pb-1">
              <span className="font-bold w-32">ALIAS:</span>
              <span>"CHIN DOES SIMS"</span>
            </div>
            <div className="flex border-b border-stone-300 pb-1">
              <span className="font-bold w-32">LAST SEEN:</span>
              <span>CFD LAB / TERMINAL</span>
            </div>
            <div className="flex border-b border-stone-300 pb-1">
              <span className="font-bold w-32">SPECIALTY:</span>
              <span>SIMULATION & VISUALIZATION</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 text-stone-900 leading-relaxed text-sm md:text-base">
            <p className="mb-4">
              Known for building CFD pipelines, optimization workflows, and visualization tools.
              Frequently spotted working with OpenFOAM, Python, and large datasets.
              Approached with curiosity and good documentation.
            </p>
          </div>

          {/* Charges/Skills */}
          <div className="mb-8">
            <h2 className="font-bold mb-3 text-lg tracking-wide">KNOWN CAPABILITIES:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                CFD & OpenFOAM
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Simulation Automation
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                3D & Scientific Visualization
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                ML-assisted Optimization
              </li>
            </ul>
          </div>

          {/* Stamp */}
          <div className="flex justify-end mb-8">
            <div 
              className="border-4 border-red-600 text-red-600 font-bold px-6 py-2 transform rotate-12 text-lg md:text-xl tracking-widest"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              ACTIVE CASE
            </div>
          </div>

          {/* Reward Section */}
          <div className="border-t-2 border-stone-800 pt-6 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              REWARD
            </h2>
            <div className="text-center space-y-1 mb-6 text-sm md:text-base font-semibold">
              <p>INSIGHTFUL CONVERSATIONS</p>
              <p>COLLABORATIONS</p>
              <p>ENGINEERING WORK</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              aria-label="Investigate Chinmay Patil's work"
              className="bg-stone-900 text-amber-50 px-8 py-4 text-lg md:text-xl font-bold tracking-wider border-4 border-amber-50 hover:bg-stone-800 hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => {
                // Replace with your navigation logic
                console.log('Navigate to hub/portfolio');
              }}
            >
              INVESTIGATE CASE →
            </button>
          </div>

          {/* Optional Case ID */}
          <p className="text-center text-xs text-stone-500 mt-6 font-mono">
            Case File ID: CSP-2412
          </p>
        </div>
      </section>
    </div>
  );
}