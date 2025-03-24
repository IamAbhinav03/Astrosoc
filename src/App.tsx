import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import EventsSection from "./components/Events/EventsSection";
import Gallery from "./components/Gallery/gallery";
import Team from "./components/Team/team";
import Footer from "./components/Footer/footer";

const App: React.FC = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div className="bg-black text-white">
      {/* Banner */}
      {isBannerVisible && (
        <div className="fixed top-0 left-0 right-0 bg-blue-900/30 border-b border-blue-900/20 py-2 text-center z-50">
          <p className="text-white font-semibold flex justify-center items-center">
            🚀 Registration for our flagship Spacecraft Design Competition is
            now open!
            <a
              href="https://spacecraft-2025.netlify.app/"
              className="ml-2 text-white hover:text-yellow-500 underline"
            >
              Register now →
            </a>
            <button
              className="ml-4 text-white-600 hover:text-white text-lg"
              onClick={() => setIsBannerVisible(false)}
            >
              ✖
            </button>
          </p>
        </div>
      )}

      {/* Navbar - Adjust top based on banner visibility */}
      <Navbar isBannerVisible={isBannerVisible} />

      <Hero />
      <About />
      <EventsSection />
      <Gallery />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
