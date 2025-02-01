import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import EventsSection from "./components/Events/EventSection";
// import AstronomyEvents from "./components/Events/EventsSection";
import Gallery from "./components/Gallery/gallery";
import Team from "./components/Team/team";
import Footer from "./components/Footer/footer";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>

      <EventsSection></EventsSection>
      <Gallery></Gallery>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default App;
