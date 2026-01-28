import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, CheckCircle } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/custom/ScrollReveal';

// Certifications sorted by date (latest first)
const certifications = [
  {
    name: 'Certified Data Analyst (Python)',
    issuer: 'AnalytixLabs',
    image: '/analytixlabs_DA_python.png',
    date: 'June 2025',
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: 'Advanced Data Analytics',
    issuer: 'EICT Academy IIT Guwahati',
    image: '/IIT_DA.png',
    date: 'June 2025',
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: 'Certified Data Analyst (Excel, SQL & Power BI)',
    issuer: 'AnalytixLabs',
    image: '/analytixlabs_DA.png',
    date: 'March 2025',
    credentialId: 'ALB-DVA-23032025-3839',
    verifyUrl: null,
  },
  {
    name: 'AWS Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    image: '/aws_certified_solutions_architect.png',
    date: '2024',
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: 'Excel Intermediate Level',
    issuer: 'Certification Body',
    image: '/excel_intermediate_level.png',
    date: '2024',
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: 'Accenture Data Analytics',
    issuer: 'Accenture',
    image: '/accenture_certificate.png',
    date: '2024',
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: 'Tata Data Visualization',
    issuer: 'Tata',
    image: '/tata_certificate.png',
    date: '2024',
    credentialId: null,
    verifyUrl: null,
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    image: '/aws_cloud_practitioner.png',
    date: 'December 2023',
    credentialId: 'LBV3BVHL52Q1Q137',
    verifyUrl: 'https://aws.amazon.com/verification',
  },
  {
    name: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    image: '/azure_ai_fundamentals.png',
    date: 'April 2023',
    credentialId: '6non-DwWu',
    verifyUrl: 'https://verify.certiport.com',
  },
  {
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan',
    image: '/applied_machine_learning.png',
    date: '2021',
    credentialId: null,
    verifyUrl: null,
  },
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header with enhanced animation */}
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-cyan text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4" />
            Professional Credentials
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional credentials and achievements that validate my expertise
          </p>
        </ScrollReveal>

        {/* Certifications Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { type: 'spring', stiffness: 400, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCert(cert)}
                onMouseEnter={() => setHoveredCert(cert.name)}
                onMouseLeave={() => setHoveredCert(null)}
                className="relative group cursor-pointer"
              >
                {/* Glow effect on hover */}
                <motion.div 
                  className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"
                  animate={{ opacity: hoveredCert === cert.name ? 0.7 : 0 }}
                />
                
                {/* Card content */}
                <div className="relative glass-card overflow-hidden rounded-xl">
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-tertiary">
                    <motion.img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain p-3"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Hover overlay with view icon */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-accent-purple/80 via-accent-purple/40 to-transparent flex items-end justify-center pb-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <CheckCircle className="w-4 h-4" />
                        Click to View
                      </motion.span>
                    </motion.div>
                  </div>
                  
                  {/* Certificate Info */}
                  <div className="p-4 border-t border-white/10 bg-gradient-to-br from-bg-secondary/50 to-transparent">
                    <motion.h4 
                      className="text-sm font-semibold text-white line-clamp-2 mb-1 group-hover:text-accent-cyan transition-colors duration-300"
                    >
                      {cert.name}
                    </motion.h4>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{cert.issuer}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple font-medium">
                        {cert.date}
                      </span>
                      {cert.verifyUrl && (
                        <span className="flex items-center gap-1 text-xs text-green-400">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Verified badge */}
                {cert.verifyUrl && (
                  <motion.div 
                    className="absolute -top-2 -right-2 z-10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-bg-primary shadow-lg flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Enhanced Stats */}
        <ScrollReveal className="mt-16">
          <motion.div 
            className="glass-card p-8 md:p-10 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {[
                { value: '10+', label: 'Certifications' },
                { value: '3', label: 'Cloud Platforms' },
                { value: '2', label: 'AWS Certs' },
                { value: 'IIT', label: 'Premier Institute' },
                { value: '2021', label: 'Since' },
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  className="group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full glass text-white hover:bg-accent-purple/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Certificate Image */}
              <motion.div 
                className="glass-card overflow-hidden rounded-xl"
                initial={{ boxShadow: '0 0 0 rgba(139, 92, 246, 0)' }}
                animate={{ boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)' }}
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Certificate Info */}
              <motion.div 
                className="mt-4 glass-card p-5 md:p-6 rounded-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{selectedCert.name}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="glass px-3 py-1 rounded-full">
                    Issued by: <span className="text-accent-cyan">{selectedCert.issuer}</span>
                  </span>
                  <span className="glass px-3 py-1 rounded-full">
                    Date: <span className="text-accent-purple">{selectedCert.date}</span>
                  </span>
                  {selectedCert.credentialId && (
                    <span className="glass px-3 py-1 rounded-full">
                      ID: <span className="text-gray-300">{selectedCert.credentialId}</span>
                    </span>
                  )}
                </div>
                {selectedCert.verifyUrl && (
                  <motion.a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-purple/20 hover:bg-accent-purple/30 text-accent-purple rounded-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Credential
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
