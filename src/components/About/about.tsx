import { motion } from "framer-motion";

export default function About() {
  const images = [
    { src: "./assets/game.jpg", alt: "game" },
    { src: "/assets/rocket_launch1.JPG", alt: "rocket launch" },
    { src: "./assets/DSC_0079.JPG", alt: "group photo" },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('./assets/white-rainforest-XL1QmKv8-unsplash.jpg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0A0F1F]/90 to-[#0A0F1F]">
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Content container */}
      <div className="relative container mx-auto px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-[#B0C7F1] tracking-wide"
            >
              About Us
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-[#D1DAF2]">
                The Astronomy Society of Ashoka is a student-led organization
                that brings together astronomy enthusiasts from diverse
                backgrounds to share in the wonder of the cosmos. Our members
                include mathematicians, photographers, and stargazing
                aficionados, all united by a passion for astronomy.
              </p>
              <p className="text-lg text-[#D1DAF2]">
                We offer a variety of engaging activities, such as stargazing
                sessions, workshops, movie screenings, and guest lectures,
                designed to provide hands-on experience and valuable
                interactions with professionals in the field.
              </p>
            </motion.div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative rounded-lg overflow-hidden ${
                  index === 2 ? "col-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
