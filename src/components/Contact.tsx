import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/akshatpunjabi',
      color: 'hover:text-purple-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/akshat-punjabi/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:punjabiakshat1@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={item}
            className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Let's Connect and Build Something Amazing
          </motion.h2>
          
          <motion.p
            variants={item}
            className={`text-xl mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            I love working on innovative ideas and collaborating with like-minded people. Feel free to reach out through the platforms below.
          </motion.p>
          
          <motion.div
            variants={item}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
                } ${link.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                {link.icon}
                <span className="mt-2 text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;