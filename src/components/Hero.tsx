import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="min-h-[350px] sm:min-h-[450px] mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TypeAnimation
                sequence={["Hello, I'm"]}
                wrapper="h2"
                speed={50}
                className="text-base sm:text-lg md:text-xl text-primary font-medium mb-2"
                cursor={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <TypeAnimation
                sequence={[1000, "Muhammad Ibraheem Abdullah"]}
                wrapper="h1"
                speed={50}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-3 sm:mb-4 px-2"
                cursor={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              <TypeAnimation
                sequence={[2600, "Full Stack Developer"]}
                wrapper="h2"
                speed={50}
                className="text-xl sm:text-2xl md:text-3xl text-secondary-foreground font-semibold mb-4 sm:mb-6"
                cursor={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
            >
              <TypeAnimation
                sequence={[3800, "Specializing in Vue.js, React, PHP, Laravel & MERN Stack Development"]}
                wrapper="p"
                speed={50}
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
                cursor={true}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4"
          >
            <Button size="lg" className="rounded-full w-full sm:w-auto" asChild>
              <a href="/Muhammad-Ibraheem-Abdullah-CV.pdf" download>
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Hire Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
