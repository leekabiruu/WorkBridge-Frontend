import React from "react";
import '../index.css';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-6">
         Find the right job, faster.
        </h1>
        <p className="text-lg mb-8 text-gray-100">
          Connect with top employers and discover opportunities that match your skills.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
