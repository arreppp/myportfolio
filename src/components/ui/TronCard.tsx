import { motion } from 'framer-motion'
import { CSSProperties, ReactNode } from 'react'

interface TronCardProps {
  children:   ReactNode
  accent?:    'cyan' | 'orange'
  className?: string
  hover?:     boolean
  style?:     CSSProperties
}

export default function TronCard({
  children,
  accent    = 'cyan',
  className = '',
  hover     = true,
  style,
}: TronCardProps) {
  const borderColor  = accent === 'cyan' ? '#00bcd4' : '#e65100'
  const glowColor    = accent === 'cyan' ? '#00e5ff44' : '#ff6d0044'
  const cornerColor  = accent === 'cyan' ? 'border-grid-cyan-dim' : 'border-grid-orange-dim'

  return (
    <motion.div
      className={`relative bg-grid-surface border border-grid-border p-6 ${className}`}
      style={{ borderColor, ...style }}
      whileHover={hover ? { boxShadow: `0 0 20px ${glowColor}`, borderColor: accent === 'cyan' ? '#00e5ff' : '#ff6d00' } : undefined}
      transition={{ duration: 0.2 }}
    >
      {/* Top-left corner */}
      <span className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${cornerColor} -translate-x-px -translate-y-px`} />
      {/* Bottom-right corner */}
      <span className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${cornerColor} translate-x-px translate-y-px`} />
      {children}
    </motion.div>
  )
}
