import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Internee',
    company: 'Aksa-SDS / Axa Business Technologies',
    duration: 'December 2024 - Present',
    description: 'Assisted in developing and maintaining web applications using Vue.js, PHP, Laravel, and MySQL. Worked on front-end development implementing responsive UI components and improving user experience. Integrated RESTful APIs and assisted in debugging and optimizing application performance.'
  },
  {
    role: 'Internee',
    company: 'Allama Iqbal Open University',
    duration: 'August 2023 - December 2024',
    description: 'Worked on MERN stack projects utilizing MongoDB, Express.js, React, and Node.js. Contributed to both front-end and back-end development, ensuring smooth functionality and user experience. Developed and integrated RESTful APIs, participated in database design and management using MongoDB, and conducted testing and debugging to maintain high-quality code standards.'
  },
  {
    role: 'Angular Intern',
    company: 'Genesis Engineering',
    duration: 'April 2022 - December 2022',
    description: 'Developed front-end applications using Angular, AngularJS, and Angular Material. Worked with Angular CLI for project scaffolding and build optimization. Collaborated with backend teams using Node.js and managed project tasks through Jira. Gained hands-on experience with component-based architecture and modern frontend development practices.'
  },
  {
    role: 'Internee',
    company: 'Allama Iqbal Open University',
    duration: 'August 2022 - October 2022',
    description: 'Assisted in managing and updating LMS course content while supporting system upgrades and optimizations. Collaborated with the ICT team to develop new features and troubleshoot technical issues. Gained hands-on experience in LMS management, system performance optimization, and user support.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Experience</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative sm:pl-20 pb-8 sm:pb-12 last:pb-0"
                >
                  <div className="hidden sm:flex absolute left-5 top-0 w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </div>

                  <Card className="p-4 sm:p-6 card-shadow hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 sm:hidden mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{exp.duration}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}