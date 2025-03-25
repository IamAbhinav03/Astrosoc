function Hero() {
  return (
    <section
      className="h-screen bg-cover flex items-center justify-start px-10"
      style={{
        backgroundImage:
          "url('/assets/white-rainforest-XL1QmKv4mx8-unsplash.jpg')",
      }}
    >
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans mb-4">
          Astronomy Society{" "}
          {/* <span className="text-4xl">
            <br></br>of Ashoka University
          </span> */}
        </h1>
        <p className="text-lg md:text-xl">of Ashoka University</p>
        {/* <p className="text-lg md:text-xl">
          Exploring the Universe, One Star at a Time.
        </p> */}
      </div>
    </section>
  );
}

export default Hero;
