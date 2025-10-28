import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.png';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img 
                  src={profilePhoto} 
                  alt="Muhammad Ibraheem Abdullah - Full Stack Developer specializing in Vue.js, React, PHP Laravel and MERN Stack" 
                  className="relative w-full h-full object-cover rounded-3xl card-shadow ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 card-shadow">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Professional Background</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                  Full Stack Developer specializing in Vue.js, React, Angular, and PHP/Laravel with hands-on experience 
                  at AIOU and Aksa-SDS. Proven track record in building Learning Management Systems and delivering 
                  scalable web applications using the MERN stack.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Skilled in front-end and back-end development, database management, API integration, and performance 
                  optimization. Passionate about creating efficient, responsive, and user-friendly applications while 
                  staying current with modern web technologies.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
