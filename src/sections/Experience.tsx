import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { ScrollReveal } from '@/components/custom/ScrollReveal';

const experiences = [
  {
    role: 'Data Analytics Trainee',
    company: 'AnalytixLabs',
    duration: 'Jan 2025 – Dec 2025',
    location: 'Gurugram, India',
    type: 'Training',
    description:
      'Completed hands-on training in Excel, SQL, Power BI, Tableau, and Python through case-based assignments and dashboard tasks. Practised data transformation and validation workflows; built KPI summaries and BI visuals using DAX measures.',
    skills: ['Excel', 'SQL', 'Power BI', 'Tableau', 'Python', 'DAX'],
  },
  {
    role: 'Data Analytics Intern',
    company: 'Internship Studio',
    duration: 'Apr 2024 – May 2024',
    location: 'Remote',
    type: 'Internship',
    description:
      'Cleaned datasets and prepared analysis-ready outputs for reporting and dashboarding. Presented insights using clear visuals and concise summaries for non-technical stakeholders.',
    skills: ['Data Cleaning', 'Data Visualization', 'Reporting', 'Stakeholder Communication'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-cyan text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Building2 className="w-4 h-4" />
            Journey
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in the world of data analytics
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-accent-purple via-accent-blue to-transparent" />
            {/* Animated glow on line */}
            <motion.div 
              className="absolute w-full h-20 bg-gradient-to-b from-accent-cyan to-transparent"
              animate={{ y: [0, 200, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.2}>
                <div className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-accent-purple border-4 border-bg-primary z-10"
                    whileHover={{ scale: 1.3 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-accent-purple"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="group relative"
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
                      
                      <div className="relative glass-card p-6 overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div 
                              className="p-3 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue shadow-lg"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <Briefcase className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">{exp.role}</h3>
                              <p className="text-accent-purple">{exp.company}</p>
                            </div>
                          </div>

                          {/* Meta */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                            <motion.div 
                              className="flex items-center gap-1.5 glass px-3 py-1 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </motion.div>
                            <motion.div 
                              className="flex items-center gap-1.5 glass px-3 py-1 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </motion.div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <motion.span
                                key={skill}
                                className="px-2.5 py-1 text-xs bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-accent-purple/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>

                          {/* Type Badge */}
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple rounded-full border border-accent-purple/30">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
