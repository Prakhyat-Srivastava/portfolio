import { motion } from 'framer-motion';
import { 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  PieChart, 
  Code2, 
  GitBranch,
  Cloud,
  Brain,
  Terminal,
  Cpu,
  Sparkles
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/custom/ScrollReveal';

const skillCategories = [
  {
    title: 'Analytics & Concepts',
    icon: BarChart3,
    skills: [
      'Data Cleaning',
      'Exploratory Data Analysis',
      'KPI Reporting',
      'Data Validation',
      'Regression Analysis',
      'Correlation Analysis',
      'Hypothesis Testing',
    ],
    gradient: 'from-accent-purple to-accent-blue',
  },
  {
    title: 'Tools & Platforms',
    icon: Database,
    skills: [
      'SQL (Joins, CTEs, Aggregations)',
      'Excel (PivotTables, Power Query)',
      'Power BI (DAX)',
      'Tableau',
      'Python (Pandas, NumPy)',
      'R Programming',
      'Git & GitHub',
      'Jupyter Notebook',
    ],
    gradient: 'from-accent-blue to-accent-cyan',
  },
  {
    title: 'Cloud & AI',
    icon: Cloud,
    skills: [
      'AWS Cloud Practitioner',
      'AWS Solutions Architect',
      'Azure AI Fundamentals',
      'Machine Learning Basics',
    ],
    gradient: 'from-accent-cyan to-accent-pink',
  },
];

const generativeAITools = [
  { name: 'ChatGPT', color: '#10a37f' },
  { name: 'Gemini', color: '#4285f4' },
  { name: 'Grok', color: '#ff6b6b' },
  { name: 'Claude', color: '#d4a574' },
  { name: 'Kimi', color: '#8b5cf6' },
];

const techIcons = [
  { name: 'Python', icon: Code2, color: '#3b82f6' },
  { name: 'SQL', icon: Database, color: '#8b5cf6' },
  { name: 'Power BI', icon: BarChart3, color: '#f59e0b' },
  { name: 'Tableau', icon: PieChart, color: '#06b6d4' },
  { name: 'Excel', icon: FileSpreadsheet, color: '#10b981' },
  { name: 'Git', icon: GitBranch, color: '#f97316' },
  { name: 'AWS', icon: Cloud, color: '#fbbf24' },
  { name: 'AI/ML', icon: Brain, color: '#ec4899' },
  { name: 'R', icon: Terminal, color: '#6366f1' },
  { name: 'Jupyter', icon: Cpu, color: '#f97316' },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-cyan text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Expertise
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to transform data into actionable insights
          </p>
        </ScrollReveal>

        {/* Skills Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 20 }
                }}
                className="group relative h-full"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-60 blur-md transition-all duration-500`} />
                
                <div className="relative glass-card p-6 h-full overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-accent-purple/50 hover:text-accent-cyan transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tech Icons Cloud */}
        <ScrollReveal className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">Technologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techIcons.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -6,
                  transition: { type: 'spring', stiffness: 400 }
                }}
                className="group relative"
              >
                {/* Glow */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 blur-md transition-opacity"
                  style={{ backgroundColor: tech.color }}
                />
                
                <div className="relative flex flex-col items-center gap-2 p-4 rounded-xl glass border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  <tech.icon 
                    className="w-8 h-8 transition-transform group-hover:scale-110" 
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Generative AI Tools */}
        <ScrollReveal>
          <motion.div 
            className="glass-card p-8 md:p-10 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
            
            <div className="relative">
              <motion.div 
                className="inline-flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 text-accent-purple" />
                <h3 className="text-xl font-semibold">Generative AI Tools</h3>
              </motion.div>
              <p className="text-gray-400 mb-6">Leveraging AI to boost productivity 10x</p>
              <div className="flex flex-wrap justify-center gap-3">
                {generativeAITools.map((tool, idx) => (
                  <motion.span
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -4,
                      transition: { type: 'spring', stiffness: 400 }
                    }}
                    className="px-5 py-2.5 rounded-full text-white text-sm font-medium cursor-default glass border border-white/10 hover:border-white/30 transition-all"
                    style={{ 
                      background: `linear-gradient(135deg, ${tool.color}20, ${tool.color}10)`,
                      boxShadow: `0 0 20px ${tool.color}20`
                    }}
                  >
                    {tool.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
