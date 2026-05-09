import { motion } from 'framer-motion'

interface SectionTitleProps {
  label:    string
  title:    string
  accent?:  'cyan' | 'orange'
}

export default function SectionTitle({ label, title, accent = 'cyan' }: SectionTitleProps) {
  const accentClass = accent === 'cyan' ? 'text-neon-cyan' : 'text-neon-orange'
  const lineColor   = accent === 'cyan' ? 'bg-grid-cyan' : 'bg-grid-orange'

  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className={`font-display text-xs tracking-[0.3em] uppercase mb-2 ${accentClass}`}>
        {label}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-grid-white uppercase tracking-wider">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className={`h-px w-16 ${lineColor} opacity-60`} />
        <div className={`h-1 w-1 rounded-full ${lineColor}`} />
        <div className={`h-px w-32 ${lineColor}`} />
        <div className={`h-1 w-1 rounded-full ${lineColor}`} />
        <div className={`h-px w-16 ${lineColor} opacity-60`} />
      </div>
    </motion.div>
  )
}
