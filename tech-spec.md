# Prakhyat Portfolio - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, form submit | Gradient background, glow effect |
| Card | Project cards, certification cards | Glassmorphism styling |
| Input | Contact form fields | Dark theme, focus glow |
| Textarea | Contact form message | Dark theme, focus glow |
| Badge | Tech stack tags, status labels | Gradient variants |
| Separator | Section dividers | Subtle opacity |
| Sheet | Mobile navigation menu | Slide from top |
| Tooltip | Icon hints | Dark theme |

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| ParticleBackground | Hero animated background | `components/ParticleBackground.tsx` |
| GlassCard | Reusable glassmorphism card | `components/GlassCard.tsx` |
| AnimatedText | Word-by-word text reveal | `components/AnimatedText.tsx` |
| TypewriterEffect | Typing animation | `components/TypewriterEffect.tsx` |
| TiltCard | 3D hover tilt effect | `components/TiltCard.tsx` |
| ScrollReveal | Scroll-triggered animations | `components/ScrollReveal.tsx` |
| GradientBorder | Animated gradient border | `components/GradientBorder.tsx` |
| SkillTag | Animated skill badge | `components/SkillTag.tsx` |
| Timeline | Experience timeline | `components/Timeline.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Page Load Sequence** | Framer Motion | AnimatePresence + staggered variants | High |
| **Navbar Scroll Effect** | React hooks | useScroll hook + conditional classes | Medium |
| **Particle Background** | Canvas API | Custom canvas component with requestAnimationFrame | High |
| **Word-by-Word Text Reveal** | Framer Motion | motion.span with staggerChildren | Medium |
| **Typewriter Effect** | Custom hook | useTypewriter with interval | Medium |
| **Profile Image Glow** | CSS + Framer Motion | Animated gradient border + float | Medium |
| **Button Glow Pulse** | CSS | @keyframes animation | Low |
| **Scroll Reveal (global)** | Framer Motion | useInView + motion variants | Medium |
| **3D Card Tilt** | Custom hook | useTilt with mouse position | High |
| **Skill Cloud Float** | Framer Motion | Infinite animation with random delays | Medium |
| **Certificate Gallery** | CSS Grid + Framer Motion | Masonry layout with hover scale | Medium |
| **Timeline Draw** | Framer Motion | SVG path animation with useScroll | High |
| **Form Input Focus** | CSS | Transition on focus state | Low |
| **Mobile Menu** | Framer Motion | AnimatePresence + slide variants | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
**Rationale:**
- Native React integration
- Declarative animation API
- Built-in gesture support
- AnimatePresence for mount/unmount
- useInView for scroll triggers
- Excellent performance

**Use for:**
- All scroll-triggered reveals
- Page load animations
- Hover state transitions
- Staggered animations
- Mobile menu transitions

### Secondary: CSS Animations
**Rationale:**
- Zero JS overhead for simple effects
- Better for continuous animations
- GPU accelerated

**Use for:**
- Button glow pulses
- Gradient border rotation
- Floating animations
- Simple hover transitions

### Canvas API (Custom)
**Rationale:**
- Full control over particles
- High performance for many elements
- No DOM overhead

**Use for:**
- Particle background system

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── prakhyat_profile_image.png
│   ├── amazon_sales_analysis.png
│   ├── heart_disease_diagnostic.png
│   ├── hr_employee_attrition.png
│   ├── aws_cloud_practitioner.png
│   ├── aws_certified_solutions_architect.png
│   ├── azure_ai_fundamentals.png
│   ├── applied_machine_learning.png
│   ├── analytixlabs_DA.png
│   ├── analytixlabs_DA_python.png
│   ├── IIT_DA.png
│   ├── excel_intermediate_level.png
│   ├── accenture_certificate.png
│   ├── tata_certificate.png
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   ├── ParticleBackground.tsx
│   │   ├── GlassCard.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── TypewriterEffect.tsx
│   │   ├── TiltCard.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── GradientBorder.tsx
│   │   ├── SkillTag.tsx
│   │   ├── Timeline.tsx
│   │   └── Navbar.tsx
│   ├── hooks/
│   │   ├── useTilt.ts
│   │   ├── useTypewriter.ts
│   │   └── useScrollPosition.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Research.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core (Pre-installed)
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

### Animation
```bash
npm install framer-motion
```

### Icons
```bash
npm install lucide-react
```

### Fonts (Google Fonts via CDN)
- Inter
- JetBrains Mono

---

## CSS Custom Properties

```css
:root {
  /* Background Colors */
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-tertiary: #1a1a25;
  
  /* Accent Colors */
  --accent-purple: #8b5cf6;
  --accent-blue: #3b82f6;
  --accent-cyan: #06b6d4;
  --accent-pink: #ec4899;
  
  /* Text Colors */
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  
  /* Glassmorphism */
  --glass-bg: rgba(18, 18, 26, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}
```

---

## Tailwind Configuration Extensions

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        'bg-secondary': '#12121a',
        'bg-tertiary': '#1a1a25',
        accent: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-border': 'gradient-border 8s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-border': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139,92,246,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139,92,246,0.6)' },
        },
      },
    },
  },
}
```

---

## Performance Considerations

1. **Particle System**
   - Limit to 50-80 particles
   - Use requestAnimationFrame
   - Pause when not in viewport
   - Use will-change: transform

2. **Scroll Animations**
   - Use Intersection Observer (via useInView)
   - Trigger at 15% visibility
   - Animate only transform and opacity

3. **Image Optimization**
   - Use appropriate image sizes
   - Lazy load below-fold images
   - Use WebP where possible

4. **General**
   - Respect prefers-reduced-motion
   - Debounce scroll handlers
   - Use CSS transitions where possible

---

## Accessibility

1. **Reduced Motion**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

2. **Focus States**
   - Visible focus rings on all interactive elements
   - Skip to main content link

3. **Semantic HTML**
   - Proper heading hierarchy
   - ARIA labels where needed
   - Landmark regions

4. **Color Contrast**
   - All text meets WCAG AA standards
   - Interactive elements have sufficient contrast
