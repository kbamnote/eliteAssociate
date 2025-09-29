import React from "react";

const App = () => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          🚧 Elite Associates
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Coming Soon
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Our new website is under construction. We’re working hard to give you the best experience. Stay tuned!
        </p>

        {/* Optional button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
