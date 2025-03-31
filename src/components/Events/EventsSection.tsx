import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  details: string;
  image: string;
  past: boolean;
  speakers?: string[];
  registrationLink?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Spaccraft 2025",
    date: "TBA",
    location: "Ashoka University",
    description: "Ashoka University's annual astronomy festival!",
    details:
      "Welcome to Spacecraft 3.0 – Ashoka University's annual astronomy festival! This year, we’re hosting an inter-university edition where stargazers, space enthusiasts, and curious minds come together to celebrate the wonders of the cosmos.",
    image: "/assets/spacecraft-logo.png",
    past: false,
    speakers: [""],
    registrationLink: "https://spacecraft-2025.netlify.app/",
  },
  {
    id: 2,
    title: "ASAC",
    date: "2023",
    location: "Ashoka University",
    description: "India's first undergraduate astronomy conference",
    details:
      "The Ashoka Student Astronomy Conference, India's first undergraduate astronomy conference is organised annually by AstroSoc at our campus. With attendees from multiple colleges like St. Stephen's, IISER Mohali, etc., this conference has seem eminent scientists like Dr. Dhruba Saikia, Dr. Varun Bhalerao and more attend the event as keynote speakers and lecturers. A paper presentation competition was instated with cash prizes during ASAC 2.0, and theoretical/computational/instrumentation research across various domains of radio astronomy (ASAC 1.0) and multi-messenger astronomy (ASAC 2.0) were presented in front of students and professors at the event.",
    image: "/assets/asac.jpg",
    past: true,
  },
  {
    id: 3,
    title: "SpaceCraft",
    date: "2023",
    location: "Ashoka University",
    description: "Annual intercollegiate astronomy fest",
    details:
      "SpaceCraft, the Ashoka University AstroSoc's annual intercollegiate astronomy fest, aims to build and celebrate a collective culture in astronomy and astrophysics amongst a wide audience, including both the general public and technical/trained science-professionals in the field, through a series of competitions, workshops, lectures, telescope sessions and other events on our university campus in Sonipat.",
    image: "/assets/spacecraft.jpg",
    past: true,
  },
  {
    id: 4,
    title: "Telescope Nights",
    date: "Monthly",
    location: "Ashoka University Campus",
    description: "Regular stargazing sessions with telescopes",
    details:
      "The Astronomy Society organises regular telescope nights with our students and PhD students at various locations around campus to engage the student body in observational astronomy. Open sessions for the general public are conducted at least once a month, and specialised sessions for more advanced students are conducted more regularly to collect astronomical data for scientific analysis.",
    image: "/assets/telescope.jpg",
    past: true,
  },
  {
    id: 5,
    title: "Astro Adda",
    date: "Monthly",
    location: "Ashoka University",
    description: "Monthly informal astronomy discussions",
    details:
      "The Astronomy Society runs a monthly event called Astro Adda, which is an informal forum for interested undergrads to meet and discuss the latest developments and topics of interest in astronomy and astrophysics. 'Meetings' are usually held after classes in the evenings, without a planned agenda to facilitate organic, candid interactions and discussions.",
    image: "/assets/astroadda.jpg",
    past: true,
  },
  {
    id: 6,
    title: "LIGO-India Talk",
    date: "2023",
    location: "Ashoka University",
    description: "Special address by Dr. Debarati Chatterjee",
    details:
      "A special address by Dr. Debarati Chatterjee, the Outreach Head at LIGO-India, saw participants being introduced to emerging new research in the field of gravitational waves and the development of the new LIGO observatory in India, providing a platform for world-class research within the country.",
    image: "/assets/ligo.jpg",
    past: true,
    speakers: ["Dr. Debarati Chatterjee"],
  },
  {
    id: 7,
    title: "Musafir Launch Screenings",
    date: "2023",
    location: "Ashoka University",
    description: "Space mission launch screenings",
    details:
      "AstroSoc launched the Musafir series of launch screenings to share the excitement around upcoming space missions with the general student body. The series has featured screenings of Chandrayaan-3, Aditya-L1, and INSAT-3D launches.",
    image: "/assets/musafir.jpg",
    past: true,
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm transition duration-300 hover:scale-105"
    >
      <div className="relative h-64">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {event.title}
        </h2>

        <p className="text-gray-400 mb-4">{event.location}</p>
        <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>
        <Link
          to={`/events/${event.id}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          {event.past ? "View Recap" : "Learn More"}
        </Link>
      </div>
    </motion.div>
  );
};

const EventsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const upcomingEvents = events.filter((event) => !event.past);
  const pastEvents = events.filter((event) => event.past);

  return (
    <section
      className="min-h-screen bg-[#0A0F1F] py-12 text-white relative"
      id="events"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0A0F1F]/90 to-[#0A0F1F]">
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center text-[#B0C7F1] tracking-wide"
        >
          Events
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-black/30 p-1 backdrop-blur-sm">
            <button
              className={`px-6 py-2 rounded-md transition duration-300 ${
                activeTab === "upcoming"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={`px-6 py-2 rounded-md transition duration-300 ${
                activeTab === "past"
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "upcoming" ? upcomingEvents : pastEvents).map(
            (event) => (
              <EventCard key={event.id} event={event} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
