import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/custom/ScrollReveal';

export function Research() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
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
            <BookOpen className="w-4 h-4" />
            Publication
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Research <span className="gradient-text">Publication</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contributing to the academic community through published research
          </p>
        </ScrollReveal>

        {/* Research Card */}
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative max-w-4xl mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500" />
            
            <div className="relative glass-card p-8 md:p-12 overflow-hidden rounded-2xl">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-50" />
              <div className="absolute inset-[2px] rounded-2xl bg-bg-secondary" />

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative">
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-4 h-4" />
                    Scopus Indexed
                  </motion.span>
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium border border-accent-purple/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Journal Article
                  </motion.span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-accent-cyan transition-colors">
                  Optimized Machine Learning Framework for Sentiment Analysis for Amazon Product Reviews
                </h3>

                {/* Journal Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="glass px-3 py-1 rounded-full text-accent-cyan">Journal of Electrical Systems</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span>Vol. 20, No. 11s (2024)</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span>Pages: 3070–3079</span>
                </div>

                {/* DOI */}
                <motion.div 
                  className="p-4 glass rounded-xl mb-8"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="text-sm text-gray-400 mb-1">DOI</div>
                  <code className="text-accent-cyan text-sm font-mono">10.52783/jes.8003</code>
                </motion.div>

                {/* Abstract Preview */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Abstract
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This research presents an optimized machine learning framework for sentiment analysis 
                    of Amazon product reviews. The study explores various ML techniques to accurately 
                    classify customer sentiments, providing valuable insights for e-commerce businesses 
                    to understand customer feedback and improve product offerings.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-accent-purple to-accent-blue text-white"
                    >
                      <a
                        href="https://doi.org/10.52783/jes.8003"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      asChild
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <a
                        href="https://journal.esrgroups.org/jes/article/view/8003/5450"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Read Full Text
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '1', label: 'Publication' },
              { value: 'Scopus', label: 'Indexed' },
              { value: '2024', label: 'Published' },
              { value: 'ML', label: 'Research Area' },
            ].map((stat) => (
              <motion.div 
                key={stat.label}
                className="glass-card p-6 text-center rounded-xl"
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
