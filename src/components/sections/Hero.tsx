import { motion } from 'framer-motion'
import { personal } from '../../data/portfolio'
import GlowButton from '../ui/GlowButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.p variants={item} className="font-display text-xs tracking-[0.4em] text-grid-muted uppercase">
            // IDENTITY CONFIRMED
          </motion.p>

          <motion.h1 variants={item} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-grid-white uppercase leading-tight tracking-wider">
            NURARIEF<br />
            <span className="text-neon-cyan">ILMAN</span>
          </motion.h1>

          <motion.h2 variants={item} className="font-display text-xl md:text-2xl text-neon-cyan tracking-[0.2em] uppercase">
            {personal.title}
          </motion.h2>

          <motion.p variants={item} className="font-body text-lg text-grid-muted max-w-lg leading-relaxed">
            {personal.tagline} Specialising in REST APIs, modern frontend frameworks, and end-to-end system integration.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <GlowButton
              label="View Projects"
              variant="cyan"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <GlowButton
              label="Download Resume"
              variant="orange"
              onClick={() => window.open('mailto:' + personal.email)}
            />
          </motion.div>

          <motion.div variants={item} className="flex gap-6 text-xs font-display tracking-widest text-grid-border uppercase">
            <span>📍 {personal.location}</span>
          </motion.div>
        </motion.div>

        {/* Right: Identity Disc */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <IdentityDisc />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-display text-xs text-grid-border tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-grid-cyan to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}

function IdentityDisc() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96">
      <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <motion.circle
          cx="200" cy="200" r="180"
          stroke="#00e5ff" strokeWidth="1.5" fill="none" strokeOpacity="0.3"
          animate={{ rotate: 360 }}
          style={{ originX: '200px', originY: '200px' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        {/* Segmented ring */}
        {Array.from({ length: 24 }, (_, i) => {
          const angle  = (i / 24) * 360
          const rad    = (angle * Math.PI) / 180
          const x1     = 200 + 155 * Math.cos(rad)
          const y1     = 200 + 155 * Math.sin(rad)
          const x2     = 200 + 170 * Math.cos(rad)
          const y2     = 200 + 170 * Math.sin(rad)
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#00e5ff" strokeWidth="2" strokeOpacity={i % 4 === 0 ? 0.9 : 0.3}
            />
          )
        })}
        {/* Mid rings */}
        <circle cx="200" cy="200" r="140" stroke="#00e5ff" strokeWidth="0.75" fill="none" strokeOpacity="0.15" />
        <motion.circle
          cx="200" cy="200" r="110"
          stroke="#00e5ff" strokeWidth="1" fill="none" strokeOpacity="0.4"
          strokeDasharray="20 10"
          animate={{ rotate: -360 }}
          style={{ originX: '200px', originY: '200px' }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <circle cx="200" cy="200" r="80" stroke="#ff6d00" strokeWidth="1" fill="none" strokeOpacity="0.25" />
        {/* Core */}
        <circle cx="200" cy="200" r="50" fill="#010d18" stroke="#00e5ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <motion.circle
          cx="200" cy="200" r="35"
          fill="#00e5ff"
          fillOpacity="0.08"
          animate={{ fillOpacity: [0.05, 0.18, 0.05] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <text x="200" y="196" textAnchor="middle" fill="#00e5ff" fontSize="9" fontFamily="Orbitron" letterSpacing="2">ARIEF</text>
        <text x="200" y="210" textAnchor="middle" fill="#00e5ff66" fontSize="6" fontFamily="Orbitron" letterSpacing="1.5">.EXE</text>
        {/* Scan line effect */}
        <motion.line
          x1="200" y1="20" x2="200" y2="380"
          stroke="#00e5ff" strokeWidth="0.5" strokeOpacity="0.4"
          animate={{ rotate: 360 }}
          style={{ originX: '200px', originY: '200px' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  )
}
