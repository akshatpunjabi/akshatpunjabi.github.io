import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} cursor-pointer`}
            onClick={() => scrollToSection('home')}
          >
            AP
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ scale: 1.1 }}
                className={`${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-500 transition-colors`}
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="text-white" /> : <Moon className="text-gray-900" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDarkMode ? 'text-white' : 'text-gray-900'} p-2`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4"
          >
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 px-4 ${
                  isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`w-full text-left py-2 px-4 ${
                isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;