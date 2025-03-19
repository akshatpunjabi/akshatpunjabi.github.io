import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img 
            src="/about.jpeg"  // Replace with your actual image path
            alt="About Me"
            className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className={`prose ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} max-w-none w-full md:w-1/2`}
        >
          <h2 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            More Than Just a Developer
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            I started my tech journey breaking things (mostly my own code), but eventually figured out how to make computers work for me. Now, I specialize in AI, cybersecurity, and cloud-native solutions.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I optimize neural networks, build security systems, and once explained a tech concept to my grandma (she still thinks the Cloud is about actual clouds).
          </p>
          <p className="text-lg leading-relaxed">
            If there's a problem, I'll solve it – or at least turn it into a feature.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
