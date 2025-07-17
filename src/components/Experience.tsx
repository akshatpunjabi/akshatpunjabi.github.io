import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, School, Award } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Co-Founder and CTO',
      company: 'Aissential',
      period: '2025 - Present',
      icon: <Briefcase />,
      achievements: [
        'Leading the development of domain-agnostic AI agents for applications in education, media, and enterprise',
        'Deployed Odin, an AI-powered learning platform with a RAG-based TA chatbot, forums, and smart study modules',
        'Built ByteDigest, a personalized news app that leverages real-time NLP to boost user engagement by 4×'
      ]
    },
    {
      title: 'Graduate Researcher',
      company: 'Texas A&M University',
      period: '2023 - 2025',
      icon: <School />,
      achievements: [
        'Developed a two-tier antivirus system achieving 96.8% accuracy with <2% false positives',
        'Engineered a DLL injection-based monitoring tool intercepting 157 system calls and logging ~920K process events',
        'Optimized threat detection pipeline, reducing latency to under 1.5 seconds'
      ]
    },
    {
      title: 'MS in Computer Science',
      company: 'Texas A&M University',
      period: '2023 - 2025',
      icon: <School />,
      achievements: [
        'GPA: 4.0/4.0',
        'Relevant Coursework: Deep Learning, Cybersecurity Risk, ML-Based Cyber Defenses, Deep Reinforcement Learning, Network Security, Distributed Systems, Machine Learning'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Oracle',
      period: 'Spring 2023',
      icon: <Briefcase />,
      achievements: [
        'Enhanced Business Intelligence API dependability, simplifying troubleshooting workflows',
        'Refactored POS synchronization pipeline, reducing inventory mismatches by 20% across 72 locations',
        'Designed an automated test script for scheduled exports, saving 12 hours of manual testing weekly',
        'Resolved a critical DST bug impacting 8,000+ users, ensuring accurate financial reporting'
      ]
    },
    {
      title: 'Amazon ML Summer School',
      company: 'Amazon',
      period: 'Summer 2022',
      icon: <Award />,
      achievements: [
        'Collaborated with industry experts to optimize AI training workflows',
        'Analyzed 500K+ data points to build predictive models for early risk detection',
        'Improved machine translation performance by 5 BLEU points, enhancing cross-language communication'
      ]
    },
    {
      title: 'Bachelor\'s in Computer Science',
      company: 'MIT Manipal',
      period: '2019 - 2023',
      icon: <School />,
      achievements: [
        'GPA: 3.64/4.0',
        'Minor Specialization: Computational Intelligence',
      ]
    }
  ];
  


  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          My Journey So Far
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500" />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              },
              hidden: {
                opacity: 0
              }
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
                }}
                className={`relative mb-12 ${index % 2 === 0 ? 'ml-auto pl-12 pr-0' : 'mr-auto pr-12 pl-0'} w-full md:w-1/2`}
              >
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? '-left-6' : '-right-6'
                } w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-white'} border-4 border-blue-500 flex items-center justify-center`}>
                  <div className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                    {exp.icon}
                  </div>
                </div>
                <div className={`p-6 rounded-lg shadow-lg ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                }`}>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
