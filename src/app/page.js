"use client";
import React, { useState } from 'react';
import Image from 'next/image'


export default function LandingPage() {

  const testimonials = [
    {
      quote: "The Snorkel glass has completely changed how I enjoy my shots. It's a game-changer!",
      author: "Happy Customer",
    },
    {
      quote: "I love the Snorkel! Taking shots has never been this smooth and enjoyable.",
      author: "Shot Enthusiast",
    },
    {
      quote: "The dual-chamber design is genius. It's the perfect way to take shots!",
      author: "Satisfied Drinker",
    },
    {
      quote: "Brilliant idea! The Snorkel makes every shot fun and effortless.",
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
      <img src="/logo.png" alt="Snorkel Glass Logo" className="fixed top-4 left-4 z-20 w-24 h-auto" />
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-between">
        {/* Background Image */}
        <Image
          src="/snorkleBannerUpscaled.jpeg"
          alt="Snorkel Glass Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-sky-900/50" />

        {/* Main Content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-start md:mt-0 mt-16 md:justify-center text-center text-white">
          <div className="mt-4 md:mt-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 mx-2">Make Shots Great Again</h1>
            <p className="text-xl md:text-2xl mb-4 mx-2">Experience the Made-In-America revolution in shot glasses</p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Learn More Section - Positioned at the Bottom */}
        <div className="relative z-10 mb-10 text-center">
          <p className="font-semibold text-white text-xl">Learn more about the Snorkel Revolution below</p>
          <div className="mt-2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>


      {/* How Does it Work Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl text-center text-sky-400 font-bold">🤿 SNORKEL LESSONS 👇</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-sky-900">How Does It Work?</h2>
          <div className="mx-auto justify-center flex mb-8">
            <img 
              src="/SnorkelGuide.jpeg"
              alt="Snorkel Guide"
              className="rounded-xl shadow-xl max-w-2xl w-full sm:w-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Pour Chaser"
              description="Start by filling the bottom chamber of the snorkel with your chaser"
              icon={<i className="fas fa-tint text-sky-500 text-4xl"></i>} // Droplet icon for liquid
            />
            <FeatureCard
              title="Pour Liquor"
              description="Fill the top chamber of the snorkel with your chosen liquor"
              icon={<i className="fas fa-wine-glass-alt text-red-500 text-4xl"></i>} // Wine glass icon
            />
            <FeatureCard
              title="Drink Up!"
              description="Our specialized design allows the chaser to come in before you can even taste the shot"
              icon={<i className="fas fa-glass-cheers text-green-500 text-4xl"></i>} // Cheers icon
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 px-4 md:px-8 bg-gradient-to-r from-sky-50 to-sky-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-sky-900">
            Why Choose Snorkel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Large Image */}
            <div className="flex justify-center">
              <img 
                src="/SnorkleShowcase.jpeg" 
                alt="Snorkel Glass Showcase"
                className="rounded-xl shadow-lg max-w-xs h-auto"
              />
            </div>

            {/* Right Side: Feature Cards */}
            <div className="space-y-12 mt-6">
              <div className="flex items-center">
                <div className="text-red-500 text-5xl mr-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sky-900">Innovative Design</h3>
                  <p className="text-gray-600">
                    Unique dual-chamber shot glass provides a smoother shot-taking experience.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-500 text-5xl mr-4">
                  <i className="fas fa-flag-usa"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sky-900">American Made</h3>
                  <p className="text-gray-600">
                    Proudly manufactured in the USA with premium materials.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-green-500 text-5xl mr-4">
                  <i className="fas fa-glass-cheers"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sky-900">Party Favorite</h3>
                  <p className="text-gray-600">
                    Be the life of the party with this conversation starter.
                  </p>
                </div>
              </div>
            </div>
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
          <p className="text-xl mb-8 text-sky-700">Join the Snorkel revolution and make every shot count!</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Snorkel Glass. All rights reserved.</p>
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
    <a 
      href="https://link.fastpaydirect.com/payment-link/674cecf1b82a17f5a309e711" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button
        className={`font-semibold rounded-md transition-colors ${sizeClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    </a>
  )
}


