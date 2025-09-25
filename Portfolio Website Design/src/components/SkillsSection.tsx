import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  Globe, 
  Figma, 
  Github 
} from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Framer'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Tools',
      icon: Github,
      skills: ['Git', 'VS Code', 'Postman', 'Slack', 'Jira'],
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const tools = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Figma', icon: '🎨' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MongoDB', icon: '🍃' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I work with modern technologies and tools to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-600"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tool Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Use</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-gray-200">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-900 transition-colors">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}