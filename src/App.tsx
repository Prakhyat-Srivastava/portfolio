import { Navbar } from '@/components/custom/Navbar';
import { Hero } from '@/sections/Hero';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Certifications } from '@/sections/Certifications';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Research } from '@/sections/Research';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
