import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/custom/ParticleBackground';
import { AnimatedText } from '@/components/custom/AnimatedText';
import { TypewriterEffect } from '@/components/custom/TypewriterEffect';
import { GradientBorder } from '@/components/custom/GradientBorder';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/prakhyat-nandan-srivastava', color: 'hover:text-[#0077b5]', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Prakhyat-Srivastava', color: 'hover:text-white', label: 'GitHub' },
    { icon: Mail, href: 'mailto:prakhyatsrivastava024@gmail.com', color: 'hover:text-accent-purple', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/918532978811', color: 'hover:text-green-500', label: 'WhatsApp' },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10 pt-24 md:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-cyan text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </motion.span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
              <AnimatedText
                text="Prakhyat Nandan Srivastava"
                className="gradient-text"
                delay={0.3}
              />
            </h1>

            {/* Title with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
            >
              <TypewriterEffect
                texts={['Data Analyst', 'AI Enthusiast', 'Problem Solver']}
                typingSpeed={60}
                deletingSpeed={40}
                pauseDuration={2000}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Entry-level Data Analyst with practical training in SQL, Excel, Python, R, Power BI, 
              and Tableau. Transforming complex data into actionable insights that drive business decisions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                  className="glow-button bg-gradient-to-r from-accent-purple to-accent-blue text-white border-0 text-base px-8"
                >
                  Hire Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#projects')}
                  className="border-white/20 text-white hover:bg-white/10 text-base px-8"
                >
                  View Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 text-base px-6"
                >
                  <a href="https://wa.me/918532978811" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-xl glass border border-white/10 text-gray-400 ${social.color} hover:border-white/30 transition-all duration-300`}
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 blur-md transition-opacity bg-current" />
                  <social.icon size={20} className="relative" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-20 h-20 rounded-xl glass flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl">📊</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full glass flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-xl">🤖</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 w-12 h-12 rounded-lg glass flex items-center justify-center"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-lg">💡</span>
              </motion.div>

              <GradientBorder className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
                <img
                  src="/prakhyat_profile_image.png"
                  alt="Prakhyat Nandan Srivastava"
                  className="w-full h-full object-cover rounded-full"
                />
              </GradientBorder>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
