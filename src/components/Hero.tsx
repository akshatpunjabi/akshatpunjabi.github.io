import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface HeroProps {
  isDarkMode: boolean;
}

interface FactCard {
  achievement: string;
  caption: string;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [flippedCards, setFlippedCards] = React.useState<{ [key: number]: boolean }>({});
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const factCards: FactCard[] = [
    {
      achievement: "Engineered a two-tier antivirus with 96.8% accuracy & <2% false positives",
      caption: "Too bad it doesn't protect me from procrastination."
    },
    {
      achievement: "Reduced inventory mismatches by 20% across 72 Oracle retail locations",
      caption: "Now if only I could find my lost AirPods."
    },
    {
      achievement: "Enhanced GraphNAS, accelerating optimal model discovery by 33%",
      caption: "Can't optimize my sleep schedule, though."
    },
    {
      achievement: "Led a team to 1st place out of 800+ at TAMUhack X",
      caption: "Apparently, AI and Blockchain make a great team."
    }
  ];
  

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -1, 1, -1, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    }
  };

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      const headerOffset = 80;
      const elementPosition = projects.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Hey there, I'm Akshat Punjabi
          </h1>
          <div className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <TypeAnimation
              sequence={[
                'I build intelligent systems',
                2000,
                'I optimize high-performance software',
                2000,
                'I break things just to fix them again',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 ${
                isDarkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              } rounded-lg border transition-colors`}
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              Check My Work
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {factCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => toggleCard(index)}
                className="relative cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={flippedCards[index] ? "back" : "front"}
                    initial={{ rotateY: flippedCards[index] ? -180 : 0, opacity: 0 }}
                    animate={{ rotateY: flippedCards[index] ? 0 : 0, opacity: 1 }}
                    exit={{ rotateY: flippedCards[index] ? 0 : -180, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`p-6 rounded-xl shadow-lg ${
                      isDarkMode
                        ? 'bg-gradient-to-br from-gray-800 to-gray-700 text-white'
                        : 'bg-gradient-to-br from-white to-gray-50 text-gray-900'
                    } transform-gpu`}
                  >
                    <div className="h-full flex items-center justify-center text-center p-4">
                      <p className="text-lg font-medium">
                        {flippedCards[index] ? card.caption : card.achievement}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;