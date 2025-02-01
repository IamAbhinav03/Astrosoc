import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      image: "src/assets/game.jpg",
      name: "Stargazing session",
      role: "HOD",
      contact: "xyz@gmail.com",
    },
    {
      image: "src/assets/observatory.jpg",
      name: "Observatory visit",
      role: "HOD",
      contact: "xyz@gmail.com",
    },
    {
      image: "src/assets/rocket_launch1.JPG",
      name: "Workshop",
      role: "HOD",
      contact: "xyz@gmail.com",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black/30 via-[#0A0F1F]/90 to-[#0A0F1F]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#B0C7F1] mb-12 text-center"
        >
          Our Team
        </motion.h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-blue-300 mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.contact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
