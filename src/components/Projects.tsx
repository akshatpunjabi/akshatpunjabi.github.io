import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'Odin - AI Powered Learning Companion',
      description: 'Built Odin, an AI that knows your course. It answers questions, writes notes, creates quizzes, and upholds academic integrity with every response.',
      tech: ['AWS', 'LLM', 'Python', 'React'],
      live: 'https://odin.aissential.ai/',
      metrics: ['99% inference quality', 'Real-time responses', 'Always Available']
    },
    {
      title: 'ReLeaf - 1st Place Hackathon Project',
      description: 'Blockchain-powered fundraising platform with smart contracts, winning 1st place among 800+ participants.',
      tech: ['Solidity', 'React', 'Web3.js', 'Ethereum'],
      github: 'https://github.com/akshatpunjabi/ReLeaf',
      metrics: ['1st Place', '800+ participants', 'Smart Contracts']
    },
    {
      title: 'GraphNAS Optimization',
      description: 'Optimized graph neural networks using reinforcement learning techniques like PPO and TRPO.',
      tech: ['PyTorch', 'Python', 'RL', 'GNN'],
      github: 'https://github.com/akshatowl/GraphNAS',
      metrics: ['33% performance boost', 'PPO implementation', 'Custom reward function']
    },
    {
      title: 'Manipal Locals App',
      description: 'Android app centralizing university resources with over 500 daily active users.',
      tech: ['Flutter', 'Firebase','Android', 'MongoDB'],
      github: 'https://github.com/Pranshul2002/ManipalLocals_OpenSource',
      metrics: ['500+ daily users', '1,200+ downloads', 'First month success']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          The Fun Stuff
        </h2>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`rounded-lg p-6 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              } transition-all duration-300`}
            >
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode
                        ? 'bg-gray-700 text-blue-400'
                        : 'bg-gray-200 text-blue-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                {project.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    • {metric}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
