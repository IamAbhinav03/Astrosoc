import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show navbar at the top
        setIsVisible(true);
      } else {
        // Show navbar only when scrolling up
        setIsVisible(lastScrollY > currentScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-4  z-50"
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img src="/src/assets/logo.png" alt="Logo" className="h-14 w-auto" />
        <h1
          className={`text-white ${
            isMobile ? "text-sm" : "text-xl"
          } whitespace-nowrap`}
        >
          Ashoka Astronomy Society
        </h1>
      </div>

      {/* Mobile Hamburger */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white block transition-transform origin-left"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-0.5 bg-white block transition-opacity"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-white block transition-transform origin-left"
          />
        </button>
      )}

      {/* Desktop Navigation */}
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <ul className="flex items-center gap-10">
          {["Home", "About", "Events", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg relative hover:text-white transition-colors duration-300 group"
              >
                {item}
                <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-full max-w-xs bg-gradient-to-b from-black/30 via-[#0A0F1F]/90 to-[#0A0F1F] backdrop-blur-md"
          >
            <div className="flex flex-col h-full pt-24 px-8">
              <ul className="flex flex-col gap-8">
                {["Home", "About", "Events", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-blue-900/30 pb-4"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white text-xl relative hover:text-blue-300 transition-colors duration-300 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Additional mobile menu content */}
              <div className="mt-auto mb-8">
                <div className="text-gray-400 space-y-4">
                  <p className="text-sm">Connect with us:</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-blue-300">
                      Instagram
                    </a>
                    <a href="#" className="text-white hover:text-blue-300">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
