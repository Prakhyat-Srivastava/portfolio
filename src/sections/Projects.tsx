import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/custom/ScrollReveal';
import { TiltCard } from '@/components/custom/TiltCard';

const projects = [
  {
    title: 'Heart Disease Diagnostic Analysis',
    description:
      'Comprehensive EDA and Tableau dashboard analyzing heart disease patterns across age, gender, and clinical indicators. Performed ETL with missing-value checks, outlier handling, and categorical normalization.',
    image: '/heart_disease_diagnostic.png',
    techStack: ['Python', 'Pandas', 'Tableau', 'EDA', 'Data Cleaning'],
    githubUrl: 'https://github.com/Prakhyat-Srivastava/HeartDisease-Analysis',
    liveUrl: null,
    category: 'Healthcare Analytics',
    color: '#ef4444',
  },
  {
    title: 'Amazon Sales Dashboard',
    description:
      'Interactive Power BI dashboard visualizing multi-year sales performance with revenue tracking, regional analysis, and channel split. Implemented DAX measures for KPI calculations.',
    image: '/amazon_sales_analysis.png',
    techStack: ['Power BI', 'DAX', 'Data Modeling', 'KPI Reporting'],
    githubUrl: 'https://github.com/Prakhyat-Srivastava/Amazon-Sales-Dashboard',
    liveUrl: null,
    category: 'Sales Analytics',
    color: '#f59e0b',
  },
  {
    title: 'Employee Attrition Dashboard',
    description:
      'HR analytics dashboard exploring attrition patterns across demographics, job roles, and satisfaction metrics. Highlighted core KPIs to support retention decisions.',
    image: '/hr_employee_attrition.png',
    techStack: ['Power BI', 'DAX', 'HR Analytics', 'Data Visualization'],
    githubUrl: 'https://github.com/Prakhyat-Srivastava/Employee-Attrition-Dashboard',
    liveUrl: null,
    category: 'HR Analytics',
    color: '#10b981',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none"
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
            <Layers className="w-4 h-4" />
            Portfolio
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my data analysis and visualization work through real-world projects
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <TiltCard className="h-full">
                <motion.div 
                  className="group relative h-full"
                  whileHover={{ y: -4 }}
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-60 blur-md transition-all duration-500"
                    style={{ backgroundColor: project.color }}
                  />
                  
                  <div className="relative glass-card overflow-hidden h-full flex flex-col rounded-xl">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <motion.div 
                        className="absolute top-4 left-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span 
                          className="px-3 py-1.5 text-xs font-medium text-white rounded-full backdrop-blur-sm"
                          style={{ backgroundColor: `${project.color}cc` }}
                        >
                          {project.category}
                        </span>
                      </motion.div>

                      {/* Hover overlay */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ backgroundColor: `${project.color}40` }}
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="w-16 h-16 rounded-full glass flex items-center justify-center"
                        >
                          <BarChart2 className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <motion.h3 
                        className="text-xl font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-2.5 py-1 text-xs bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="w-full border-white/20 text-white hover:bg-white/10"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        </motion.div>
                        {project.liveUrl && (
                          <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              size="sm"
                              asChild
                              className="w-full"
                              style={{ backgroundColor: project.color }}
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Projects */}
        <ScrollReveal className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-accent-purple text-accent-purple hover:bg-accent-purple/10"
            >
              <a
                href="https://github.com/Prakhyat-Srivastava"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
