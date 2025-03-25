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
      "Welcome to Spacecraft 3.0 – Ashoka University's annual astronomy festival! This year, we're hosting an inter-university edition where stargazers, space enthusiasts, and curious minds come together to celebrate the wonders of the cosmos.",
    image: "/assets/spacecraft-logo.png",
    past: false,
    speakers: [""],
    registrationLink: "https://spacecraft-2025.netlify.app/",
  },
  {
    id: 2,
    title: "Astrophotography Workshop",
    date: "2024-04-01",
    location: "Room 101, Science Building",
    description:
      "Learn the basics of astrophotography and capture stunning images of the night sky.",
    details:
      "This workshop is limited to 20 participants. Please register in advance on our website. Bring your DSLR camera if you have one, but it's not required. We will cover camera settings, image processing, and more.",
    image:
      "https://www.astropixel.com/wp-content/uploads/2020/09/Milky-Way-Nightscape-Tutorial-Featured-Image.jpg",
    past: false,
    speakers: ["Alice Johnson"],
  },
  {
    id: 3,
    title: "Past Event: Meteor Shower Watch",
    date: "2023-11-17",
    location: "Open Field",
    description:
      "We watched the spectacular meteor shower and learned about its origins.",
    details:
      "It was an amazing experience! We saw hundreds of meteors streaking across the night sky.  We also had a presentation about the Perseid meteor shower and its connection to Comet Swift-Tuttle.",
    image:
      "https://www.nasa.gov/sites/default/files/thumbnails/image/perseid-meteor-shower-2023-1280.jpg",
    past: true,
  },
  {
    id: 4,
    title: "Cosmology Lecture",
    date: "2024-05-10",
    location: "Main Auditorium",
    description:
      "A fascinating lecture on the latest discoveries in cosmology.",
    details:
      "Join us for an engaging talk by renowned astrophysicist Dr. Sarah Chen. She will discuss the Big Bang, dark matter, dark energy, and the future of the universe.",
    image:
      "https://www.esa.int/var/ezflow_site/storage/images/esa_multimedia/images/heic0710a/1736797-3-eng-GB/heic0710a_large.jpg",
    past: false,
    speakers: ["Dr. Sarah Chen"],
    registrationLink: "https://example.com/cosmology-lecture-registration",
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
