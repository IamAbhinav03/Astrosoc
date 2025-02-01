import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

const events = [
  {
    id: 1, // Generate unique ID
    title: "Observing the Orion Nebula",
    date: "2024-03-15",
    time: "8:00 PM",
    location: "Campus Observatory",
    description:
      "Join us for a night of stargazing as we explore the wonders of the Orion Nebula.",
    details:
      "This event is free and open to the public. We'll have telescopes set up and experts on hand to guide you through the constellations. Bring your own blanket or chair for comfortable viewing. In case of inclement weather, the event will be rescheduled. Check our social media for updates.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Orion_Nebula_Hubble.jpg/1280px-Orion_Nebula_Hubble.jpg", // Example image URL
    past: false,
    speakers: ["Dr. Emily Carter", "Prof. David Lee"],
    registrationLink: "https://example.com/orion-nebula-registration",
  },
  {
    id: 2,
    title: "Astrophotography Workshop",
    date: "2024-04-01",
    time: "2:00 PM",
    location: "Room 101, Science Building",
    description:
      "Learn the basics of astrophotography and capture stunning images of the night sky.",
    details:
      "This workshop is limited to 20 participants. Please register in advance on our website. Bring your DSLR camera if you have one, but it's not required. We will cover camera settings, image processing, and more.",
    image:
      "https://www.astropixel.com/wp-content/uploads/2020/09/Milky-Way-Nightscape-Tutorial-Featured-Image.jpg", // Example image URL
    past: false,
    speakers: ["Alice Johnson"],
  },
  {
    id: 3,
    title: "Past Event: Meteor Shower Watch",
    date: "2023-11-17",
    time: "10:00 PM",
    location: "Open Field",
    description:
      "We watched the spectacular meteor shower and learned about its origins.",
    details:
      "It was an amazing experience! We saw hundreds of meteors streaking across the night sky.  We also had a presentation about the Perseid meteor shower and its connection to Comet Swift-Tuttle.",
    image:
      "https://www.nasa.gov/sites/default/files/thumbnails/image/perseid-meteor-shower-2023-1280.jpg", // Example image URL
    past: true,
  },
  {
    id: 4,
    title: "Cosmology Lecture",
    date: "2024-05-10",
    time: "7:00 PM",
    location: "Main Auditorium",
    description:
      "A fascinating lecture on the latest discoveries in cosmology.",
    details:
      "Join us for an engaging talk by renowned astrophysicist Dr. Sarah Chen. She will discuss the Big Bang, dark matter, dark energy, and the future of the universe.",
    image:
      "https://www.esa.int/var/ezflow_site/storage/images/esa_multimedia/images/heic0710a/1736797-3-eng-GB/heic0710a_large.jpg", // Example image URL
    past: false,
    speakers: ["Dr. Sarah Chen"],
    registrationLink: "https://example.com/cosmology-lecture-registration",
  },
];

const AstronomyEvents = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const handleCardClick = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const upcomingEvents = events.filter((event) => !event.past);
  const pastEvents = events.filter((event) => event.past);

  return (
    <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] py-12 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Astronomy Society Events
        </h1>

        {/* Upcoming Events */}
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              expandedEvent={expandedEvent}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  expandedEvent={expandedEvent}
                  handleCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventCard = ({ event, expandedEvent, handleCardClick }) => {
  return (
    <div
      className={`bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer ${
        expandedEvent === event.id ? "scale-105" : ""
      } ${event.past ? "opacity-70" : ""}`}
      onClick={() => handleCardClick(event.id)}
    >
      <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-4">
        {event.date} - {event.time} | {event.location}
      </p>
      <p className="text-gray-700">{event.description}</p>

      {expandedEvent === event.id && (
        <div className="mt-4">
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="mb-4 rounded-lg w-full"
            />
          )}
          <p className="text-gray-300 mb-2">Location: {event.location}</p>
          <p className="text-gray-300 mb-2">Time: {event.time}</p>
          <p className="text-gray-300 mb-2">Details: {event.details}</p>
          {event.speakers && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Speakers</h3>
              <ul>
                {event.speakers.map((speaker, index) => (
                  <li key={index}>{speaker}</li>
                ))}
              </ul>
            </div>
          )}
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              className="text-blue-400 hover:underline block mt-2"
            >
              Register Now
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AstronomyEvents;
