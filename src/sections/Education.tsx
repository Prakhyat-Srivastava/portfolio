import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/custom/ScrollReveal';

const education = [
  {
    degree: 'Integrated M.Tech (CSE) in Artificial Intelligence',
    institution: 'Vellore Institute of Technology, Bhopal',
    duration: 'Sep 2020 – May 2025',
    details: 'CGPA: 8.61/10',
    highlight: true,
    icon: Award,
  },
  {
    degree: 'Class XII (CBSE)',
    institution: 'Doon Global School, Dehradun',
    duration: '2020',
    details: null,
    highlight: false,
    icon: GraduationCap,
  },
  {
    degree: 'Class X (CBSE)',
    institution: "St. Clare's Sr. Sec. School, Agra",
    duration: '2018',
    details: null,
    highlight: false,
    icon: GraduationCap,
  },
];

export function Education() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-cyan text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4" />
            Background
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic foundation that powers my data analytics journey
          </p>
        </ScrollReveal>

        {/* Education Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu) => (
            <StaggerItem key={edu.degree}>
              <motion.div
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 20 }
                }}
                className={`group relative h-full ${edu.highlight ? '' : ''}`}
              >
                {/* Glow effect for highlight */}
                {edu.highlight && (
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-60 blur-md transition-all duration-500" />
                )}

                <div className={`relative glass-card p-6 h-full overflow-hidden rounded-xl ${
                  edu.highlight ? 'border-accent-purple/30' : ''
                }`}>
                  {/* Background glow for highlight */}
                  {edu.highlight && (
                    <>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}

                  <div className="relative">
                    {/* Icon */}
                    <motion.div 
                      className={`p-3 rounded-xl w-fit mb-4 ${
                        edu.highlight 
                          ? 'bg-gradient-to-br from-accent-purple to-accent-cyan shadow-lg' 
                          : 'bg-white/5 group-hover:bg-white/10'
                      } transition-colors`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <edu.icon className={`w-6 h-6 ${
                        edu.highlight ? 'text-white' : 'text-gray-400 group-hover:text-accent-purple'
                      }`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-purple text-sm mb-3">{edu.institution}</p>

                    {/* Meta */}
                    <motion.div 
                      className="flex items-center gap-1.5 text-sm text-gray-400 glass w-fit px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </motion.div>

                    {/* Details - only for M.Tech */}
                    {edu.details && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <motion.span 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/20 text-accent-cyan text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award className="w-4 h-4" />
                          {edu.details}
                        </motion.span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Achievement Banner */}
        <ScrollReveal className="mt-12">
          <motion.div 
            className="glass-card p-8 relative overflow-hidden rounded-xl"
            whileHover={{ scale: 1.01 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <motion.div 
                className="p-4 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-cyan shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Academic Excellence
                </h3>
                <p className="text-gray-400">
                  Graduated with an integrated M.Tech degree in Artificial Intelligence from VIT Bhopal 
                  with a CGPA of <span className="text-accent-cyan font-semibold">8.61/10</span>. 
                  Received degree on October 4, 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
