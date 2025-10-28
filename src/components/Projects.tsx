import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'CodeScade Platform',
    description: 'A comprehensive web development platform showcasing modern web technologies and best practices.',
    tech: ['Vue.js', 'PHP', 'MySQL', 'Laravel'],
    liveUrl: 'https://codescade.com',
    githubUrl: '#'
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern and responsive personal portfolio website showcasing projects and professional experience.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://ibrahemm.vercel.app',
    githubUrl: '#'
  },
  {
    title: 'Hostel Management System',
    description: 'Learning Management System for AIOU with dashboard functionality for managing hostel operations, student accommodations, and administrative tasks.',
    tech: ['MERN Stack', 'MongoDB', 'Express.js', 'React', 'Node.js'],
    liveUrl: 'https://hms-aiou.vercel.app/dashboard',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Projects</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-5 sm:p-6 h-full card-shadow hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="default" size="sm" className="w-full sm:w-auto" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
