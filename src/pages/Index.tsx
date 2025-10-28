import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
