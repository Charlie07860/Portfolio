import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Faizan Developer</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Creating beautiful digital experiences that make a difference in people's lives.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center space-x-1 text-gray-400 mb-4 sm:mb-0">
                <span>© {currentYear}</span>
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </motion.div>
                <span>by Faizan</span>
              </div>
              
              <div className="text-gray-400 text-sm">
                Built with React, Tailwind CSS & Motion
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}