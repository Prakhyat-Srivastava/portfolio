import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageCircle,
  ExternalLink,
  Send
} from 'lucide-react';
import { ScrollReveal } from '@/components/custom/ScrollReveal';

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 8532978811',
    href: 'https://wa.me/918532978811',
    color: 'from-green-500 to-emerald-600',
    description: 'Quick chat on WhatsApp',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'prakhyatsrivastava024@gmail.com',
    href: 'mailto:prakhyatsrivastava024@gmail.com',
    color: 'from-accent-purple to-accent-blue',
    description: 'Send me an email',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8532978811',
    href: 'tel:+918532978811',
    color: 'from-blue-500 to-cyan-500',
    description: 'Call me directly',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/prakhyat-nandan-srivastava',
    color: '#0077b5',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Prakhyat-Srivastava',
    color: '#fff',
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-cyan text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Send className="w-4 h-4" />
            Get In Touch
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm available for freelance projects and full-time opportunities. 
            Reach out through any of these channels!
          </p>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={method.label} delay={index * 0.1}>
              <motion.a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative block"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative glass-card p-6 h-full overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <motion.div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Label */}
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-cyan transition-colors">
                      {method.label}
                    </h3>
                    
                    {/* Value */}
                    <p className="text-gray-300 text-sm mb-2">{method.value}</p>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-xs">{method.description}</p>
                    
                    {/* Arrow indicator */}
                    <motion.div 
                      className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        {/* Location Card */}
        <ScrollReveal delay={0.3}>
          <motion.div 
            className="glass-card p-8 max-w-2xl mx-auto text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <motion.div 
                className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center mx-auto mb-4"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(139, 92, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-2">Based In</h3>
              <p className="text-gray-300">Lucknow, India</p>
              <p className="text-gray-500 text-sm mt-2">Available for remote work worldwide</p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Or connect with me on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 blur-md transition-opacity"
                    style={{ backgroundColor: social.color }}
                  />
                  
                  {/* Button */}
                  <div className="relative p-4 rounded-xl glass border border-white/10 group-hover:border-white/30 transition-colors">
                    <social.icon 
                      className="w-6 h-6 transition-colors" 
                      style={{ color: social.color }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal delay={0.5}>
          <motion.div 
            className="mt-16 glass-card p-8 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-blue/10 to-accent-cyan/10 opacity-50" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to start a project?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how I can help transform your data into actionable insights
              </p>
              <motion.a
                href="https://wa.me/918532978811"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-green-500/25"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
