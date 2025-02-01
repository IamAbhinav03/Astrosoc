import { motion } from "framer-motion";

export default function Gallery() {
  const galleryImages = [
    {
      src: "src/assets/game.jpg",
      name: "Stargazing session",
      title: "Game",
      description: "game1",
      photographer: "Abhinav",
      date: "December 2024",
    },
    { src: "src/assets/observatory.jpg", alt: "Observatory visit" },
    { src: "src/assets/rocket_launch1.JPG", alt: "Workshop" },
    { src: "src/assets/game.jpg", alt: "Stargazing session" },
    { src: "src/assets/observatory.jpg", alt: "Observatory visit" },
    { src: "src/assets/rocket_launch1.JPG", alt: "Workshop" },
  ];
  return (
    <section className="py-20 bg-[#0A0F1F]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#B0C7F1] mb-12 text-center"
        >
          Gallery
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-300 mb-1">
                    {image.description}
                  </p>
                  <p className="text-sm text-blue-300">
                    Photo by {image.photographer} • {image.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
