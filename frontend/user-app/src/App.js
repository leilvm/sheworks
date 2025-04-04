import React from 'react';
import './App.css'; // assuming you already have custom styles or Tailwind

const App = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering Women in Rwanda
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            SheWorks connects women to job opportunities, resources, and a strong support network to thrive.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
            Join Us
          </button>
        </div>

        {/* Hero Image */}
        <div>
          <img
            src="/hero-image.jpg"
            alt="Empowering Women"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
