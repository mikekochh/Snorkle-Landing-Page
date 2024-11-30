"use client";
import React, { useState } from 'react';
import Image from 'next/image'

export default function LandingPage() {

  const testimonials = [
    {
      quote: "The Snorkle glass has completely changed how I enjoy my shots. It's a game-changer!",
      author: "Happy Customer",
    },
    {
      quote: "I love the Snorkle! Taking shots has never been this smooth and enjoyable.",
      author: "Shot Enthusiast",
    },
    {
      quote: "The dual-chamber design is genius. It's the perfect way to take shots!",
      author: "Satisfied Drinker",
    },
    {
      quote: "Brilliant idea! The Snorkle makes every shot fun and effortless.",
      author: "Excited Partygoer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/snorkleBanner.jpeg"
          alt="Snorkle Glass Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-sky-900/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Make Shots Great Again</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the revolution in shot glasses</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-900">Why Choose Snorkle?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Innovative Design"
              description="Unique dual-chamber shot glass provides a smoother shot taking experience"
              icon="🍹"
            />
            <FeatureCard
              title="American Made"
              description="Proudly manufactured in the USA with premium materials"
              icon="🇺🇸"
            />
            <FeatureCard
              title="Party Favorite"
              description="Be the life of the party with this conversation starter"
              icon="🎉"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sky-900">
            What Our Customers Say
          </h2>
          <div className="relative">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <p className="font-semibold text-sky-700">
              - {testimonials[currentIndex].author}
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 font-bold rounded-l"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 font-bold rounded-r"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-sky-100 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-900">Ready to Elevate Your Shot Game?</h2>
          <p className="text-xl mb-8 text-sky-700">Join the Snorkle revolution and make every shot count!</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Snorkle Glass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-sky-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Button({ size = 'default', children, className = '', ...props }) {
  const sizeClasses = size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base'
  
  return (
    <button
      className={`font-semibold rounded-md transition-colors ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

