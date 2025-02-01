import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Stargazing Night",
    date: "Feb 10, 2025",
    location: "Observatory Hill",
    description: "Join us for an unforgettable night under the stars!",
    images: ["/images/stargazing1.jpg", "/images/stargazing2.jpg"],
    upcoming: true,
  },
  {
    id: 2,
    title: "Astronomy Workshop",
    date: "Feb 25, 2025",
    location: "Science Hall, Room 101",
    description: "Learn about constellations, galaxies, and telescopes!",
    images: ["/images/workshop1.jpg", "/images/workshop2.jpg"],
    upcoming: true,
  },
  {
    id: 3,
    title: "Solar Observation Day",
    date: "Jan 15, 2025",
    location: "Main Quad",
    description: "Observe the sun safely with special solar telescopes!",
    images: ["/images/solar1.jpg", "/images/solar2.jpg"],
    upcoming: false,
  },
  {
    id: 4,
    title: "Lunar Eclipse Watch",
    date: "Dec 5, 2024",
    location: "West Field",
    description: "Experience the beauty of a total lunar eclipse!",
    images: ["/images/eclipse1.jpg", "/images/eclipse2.jpg"],
    upcoming: false,
  },

  {
    id: 5,
    title: "Lunar Eclipse Watch",
    date: "Dec 5, 2024",
    location: "West Field",
    description: "Experience the beauty of a total lunar eclipse!",
    images: ["/images/eclipse1.jpg", "/images/eclipse2.jpg"],
    upcoming: false,
  },

  {
    id: 6,
    title: "Lunar Eclipse Watch",
    date: "Dec 5, 2024",
    location: "West Field",
    description: "Experience the beauty of a total lunar eclipse!",
    images: ["/images/eclipse1.jpg", "/images/eclipse2.jpg"],
    upcoming: false,
  },

  {
    id: 7,
    title: "Lunar Eclipse Watch",
    date: "Dec 5, 2024",
    location: "West Field",
    description: "Experience the beauty of a total lunar eclipse!",
    images: ["/images/eclipse1.jpg", "/images/eclipse2.jpg"],
    upcoming: false,
  },
];

export default function EventsSection() {
  const [expanded, setExpanded] = useState(null);
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showPast, setShowPast] = useState(true);
  const [pastEventsToShow, setPastEventsToShow] = useState(3); // Number of past events to show initially

  const upcomingEvents = events.filter((event) => event.upcoming);
  const pastEvents = events.filter((event) => !event.upcoming);

  const displayedPastEvents = pastEvents.slice(0, pastEventsToShow); // Slice for initial display

  return (
    <div className="p-6 bg-gradient-to-b from-sky-900 to-black text-white min-h-screen flex justify-center">
      <div className="max-w-4xl">
        {/* Upcoming Events */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-blue-400 text-left">
              Upcoming Events
            </h2>
            {upcomingEvents.length > 3 && (
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                onClick={() => setShowUpcoming(!showUpcoming)}
              >
                {showUpcoming ? "Collapse" : "Expand"}
              </Button>
            )}
          </div>
          {showUpcoming ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {" "}
              {/* Grid layout */}
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  className="rounded-lg overflow-hidden text-left aspect-square"
                >
                  {" "}
                  {/* Square cards */}
                  <Card className="bg-gray-700/50 backdrop-blur-md border border-gray-600/50">
                    {" "}
                    {/* Minimal card styling */}
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold text-blue-300">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {event.date} | {event.location}
                      </p>{" "}
                      {/* Smaller date/location */}
                      expanded === event.id ? (
                      <motion.div layout>
                        <p className="mt-2 text-gray-300">
                          {event.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {event.images.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt="Event"
                              className="rounded-lg w-full h-32 object-cover"
                            />
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="mt-3 w-full border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                          onClick={() => setExpanded(null)}
                        >
                          Show Less
                        </Button>
                      </motion.div>
                      ) : (
                      <Button
                        variant="outline"
                        className="mt-3 w-full border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                        onClick={() => setExpanded(event.id)}
                      >
                        Learn More
                      </Button>
                      );
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Past Events */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-blue-400 text-left">
              Past Events
            </h2>
            {/* {pastEvents.length > 3 && (
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                onClick={() => setShowPast(!showPast)}
              >
                {showPast ? "Collapse" : "Expand"}
              </Button>
            )} */}
          </div>
          {showPast ? (
            <div>
              {" "}
              {/* Container for past events with "Load More" */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {" "}
                {/* Grid layout */}
                {displayedPastEvents.map(
                  (
                    event // Map over displayed events
                  ) => (
                    <motion.div
                      key={event.id}
                      layout
                      className="rounded-lg overflow-hidden text-left aspect-square"
                    >
                      <Card className="bg-gray-700/50 backdrop-blur-md border border-gray-600/50">
                        <CardContent className="p-4">
                          <h3 className="text-xl font-semibold text-blue-300">
                            {event.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {event.date} | {event.location}
                          </p>
                          expanded === event.id ? (
                          <motion.div layout>
                            <p className="mt-2 text-gray-300">
                              {event.description}
                            </p>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              {event.images.map((img, index) => (
                                <img
                                  key={index}
                                  src={img}
                                  alt="Event"
                                  className="rounded-lg w-full h-32 object-cover"
                                />
                              ))}
                            </div>
                            <Button
                              variant="outline"
                              className="mt-3 w-full border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                              onClick={() => setExpanded(null)}
                            >
                              Show Less
                            </Button>
                          </motion.div>
                          ) : (
                          <Button
                            variant="outline"
                            className="mt-3 w-full border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                            onClick={() => setExpanded(event.id)}
                          >
                            Learn More
                          </Button>
                          );
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                )}
              </div>
              {pastEventsToShow < pastEvents.length && ( // "Load More" button
                <div className="text-center mt-4">
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                    onClick={() => setPastEventsToShow(pastEventsToShow + 3)}
                  >
                    {" "}
                    {/* Load 3 more */}
                    Load More
                  </Button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
