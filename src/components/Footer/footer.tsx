import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

export default function Footer() {
  return (
    <footer className="bg-[#050810] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="src/assets/logo.png"
              alt="Ashoka Astronomy Society"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-lg">Ashoka Astronomy Society</p>
            <p className="text-gray-400 text-sm">
              Exploring the Universe, One Star at a Time
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-white transition"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-white transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                {/* <Mail className="w-4 h-4 mr-2" /> */}
                astronomy@ashoka.edu.in
              </li>
              <li>Room 123, Science Building</li>
              <li>Ashoka University</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />{" "}
                {/* Use FontAwesomeIcon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />{" "}
                {/* Use FontAwesomeIcon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />{" "}
                {/* Use FontAwesomeIcon */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ashoka Astronomy Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
