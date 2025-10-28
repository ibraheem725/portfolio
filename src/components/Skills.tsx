import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skills = {
  'Frontend Development': ['Vue.js', 'React', 'Angular', 'AngularJS', 'Angular Material', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  'Backend Development': ['PHP', 'Laravel', 'Node.js', 'Express.js', 'RESTful APIs', 'API Integration'],
  'Database': ['MySQL', 'MongoDB', 'Database Design', 'Query Optimization'],
  'Full Stack': ['MERN Stack', 'Vue.js + PHP', 'Laravel Framework', 'LMS Development', 'Angular + Node.js'],
  'Testing & Tools': ['Testing & Debugging', 'Git', 'Angular CLI', 'Jira', 'Performance Optimization', 'System Troubleshooting'],
  'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Project Management', 'Technical Support']
};

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Skills & Technologies</h2>

          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card-shadow bg-card rounded-2xl p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="secondary" className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}