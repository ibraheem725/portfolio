import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Allama Iqbal Open University, Islamabad',
    duration: '2020 - 2024',
    description: 'Completed comprehensive coursework in computer science fundamentals, software engineering, web development, and database management. Gained practical experience through university projects and internships.',
    certificates: ['Advanced Web Development', 'Advanced Embedded Systems']
  },
  {
    degree: 'FSC (Pre-Engineering)',
    institution: 'IMCB I-10/1, Islamabad',
    duration: '2018 - 2020',
    description: 'Completed intermediate education with focus on Mathematics, Physics, and Chemistry, building a strong foundation for computer science studies.'
  },
  {
    degree: 'Matriculation (Science Group)',
    institution: 'Hamza Army Public School, Stadium Road, Rawalpindi',
    duration: '2016 - 2018',
    description: 'Completed secondary education with science subjects, developing fundamental analytical and problem-solving skills.'
  }
];

export function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Education</h2>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 card-shadow hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-sm sm:text-base text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{edu.duration}</p>
                      <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">{edu.description}</p>
                      {edu.certificates && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.certificates.map(cert => (
                            <Badge key={cert} variant="secondary" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
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
