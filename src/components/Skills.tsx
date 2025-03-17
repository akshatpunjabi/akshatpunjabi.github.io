import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cloud, Brain } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Array<{
    name: string;
    description: string;
  }>;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Software Development and Frameworks',
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: 'React', description: 'Building modern web applications' },
        { name: 'Spring Boot', description: 'Enterprise-grade backend development' },
        { name: '.NET', description: 'Cross-platform application development' },
        { name: 'Flutter', description: 'Cross-platform mobile development' },
        { name: 'TensorFlow', description: 'Deep learning and neural networks' },
        { name: 'PyTorch', description: 'Advanced machine learning models' },
        { name: 'Firebase', description: 'Serverless application development' },
        { name: 'SwiftUI', description: 'Native iOS development' }
      ]
    },
    {
      title: 'DevOps and Cloud Technologies',
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: 'Docker', description: 'Container orchestration' },
        { name: 'Kubernetes', description: 'Container deployment and scaling' },
        { name: 'Git', description: 'Version control and collaboration' },
        { name: 'CI/CD', description: 'Automated deployment pipelines' },
        { name: 'AWS', description: 'Cloud infrastructure and services' },
        { name: 'Azure', description: 'Enterprise cloud solutions' },
        { name: 'GCP', description: 'Cloud-native development' },
        { name: 'MongoDB', description: 'NoSQL database management' },
        { name: 'Redis', description: 'In-memory data structures' }
      ]
    },
    {
      title: 'Data Science and AI',
      icon: <Brain className="w-8 h-8" />,
      skills: [
      { name: 'LangChain', description: 'Large language model applications' },
      { name: 'Hugging Face', description: 'State-of-the-art NLP models' },
      { name: 'OpenCV', description: 'Computer vision applications' },
      { name: 'Power BI', description: 'Business intelligence and analytics' },
      { name: 'Tableau', description: 'Data visualization and insights' },
      { name: 'Matplotlib', description: 'Scientific plotting and visualization' },
      { name: 'Seaborn', description: 'Statistical data visualization' },
      { name: 'Pandas', description: 'Data manipulation and analysis' },
      { name: 'NLTK', description: 'Natural language processing' },
    ]
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
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            The Tech Toolbox
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A collection of technologies, frameworks, and tools I use to build scalable, secure, and intelligent systems.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              } shadow-lg`}
            >
              <div className="flex items-center mb-6">
                <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold ml-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-200'
                          : 'bg-white text-gray-800'
                      } transition-all duration-300 group-hover:shadow-md`}
                    >
                      {skill.name}
                    </div>
                    <div
                      className={`absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 px-4 py-2 mb-2 rounded-lg ${
                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                      } shadow-lg transition-all duration-200 text-sm w-48 text-center`}
                    >
                      <div className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>
                        {skill.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;