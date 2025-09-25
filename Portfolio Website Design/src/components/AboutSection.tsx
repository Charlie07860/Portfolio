import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import profileImage from 'figma:asset/27482b4128cbd72154ff75d85f02eaef53d3fb4c.png';

export default function AboutSection() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
  const skills = [
    'Frontend Development',
    'Backend Development', 
    'UI/UX Design',
    'Mobile Development',
    'Cloud Architecture',
    'DevOps & CI/CD'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={profileImage}
                  alt="Faizan - Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate developer with 5+ years of experience creating digital solutions 
                that combine beautiful design with powerful functionality. I love turning complex 
                problems into simple, elegant designs.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest design trends, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Animated Skills */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-2">Currently focused on:</p>
              <motion.div
                key={currentSkillIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {skills[currentSkillIndex]}
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}