import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  details: string;
  image: string;
  past: boolean;
  speakers?: string[];
  registrationLink?: string;
}

// This would typically come from an API or database
const events: Event[] = [
  {
    id: 1,
    title: "Observing the Orion Nebula",
    date: "2024-03-15",
    time: "8:00 PM",
    location: "Campus Observatory",
    description:
      "Join us for a night of stargazing as we explore the wonders of the Orion Nebula.",
    details:
      "This event is free and open to the public. We'll have telescopes set up and experts on hand to guide you through the constellations. Bring your own blanket or chair for comfortable viewing. In case of inclement weather, the event will be rescheduled. Check our social media for updates.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Orion_Nebula_Hubble.jpg/1280px-Orion_Nebula_Hubble.jpg",
    past: false,
    speakers: ["Dr. Emily Carter", "Prof. David Lee"],
    registrationLink: "https://example.com/orion-nebula-registration",
  },
  // ... other events
];

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0A0F1F] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#B0C7F1]">
            Event Not Found
          </h1>
          <Link
            to="/#events"
            className="text-[#B0C7F1] hover:text-blue-300 underline"
          >
            Return to Events
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#0A0F1F] py-12 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <Link
            to="/#events"
            className="inline-flex items-center text-[#B0C7F1] hover:text-blue-300 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Events
          </Link>

          {/* Hero Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 border border-blue-900/20">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h1 className="text-4xl font-bold mb-4 text-[#B0C7F1]">
                {event.title}
              </h1>
              <p className="text-xl text-gray-300">
                {formattedDate} at {event.time}
              </p>
              <p className="text-xl text-gray-300">{event.location}</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-black/20 rounded-xl p-8 backdrop-blur-sm border border-blue-900/20">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#B0C7F1]">
                  About This Event
                </h2>
                <p className="text-gray-300">{event.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#B0C7F1]">
                  Event Details
                </h2>
                <p className="text-gray-300">{event.details}</p>
              </div>

              {event.speakers && event.speakers.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-[#B0C7F1]">
                    Speakers
                  </h2>
                  <ul className="space-y-2">
                    {event.speakers.map((speaker, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-center"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#B0C7F1]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {speaker}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.registrationLink && !event.past && (
                <div className="mt-8">
                  <a
                    href={event.registrationLink}
                    className="inline-block bg-blue-900/50 hover:bg-blue-900/70 text-[#B0C7F1] font-semibold py-3 px-8 rounded-lg transition duration-300 border border-blue-800/30"
                  >
                    Register Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventPage;
