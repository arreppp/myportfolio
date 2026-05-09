import { motion } from 'framer-motion'

interface GlowButtonProps {
  label:    string
  variant?: 'cyan' | 'orange'
  onClick?: () => void
  href?:    string
  type?:    'button' | 'submit'
}

export default function GlowButton({
  label,
  variant = 'cyan',
  onClick,
  href,
  type = 'button',
}: GlowButtonProps) {
  const isCyan = variant === 'cyan'
  const base = `
    relative inline-flex items-center justify-center
    px-6 py-3 font-display text-sm uppercase tracking-widest
    border transition-all duration-300 overflow-hidden
  `
  const colorClass = isCyan
    ? 'border-grid-cyan text-grid-cyan hover:shadow-cyan hover:bg-grid-cyan/10'
    : 'border-grid-orange text-grid-orange hover:shadow-orange hover:bg-grid-orange/10'

  const content = (
    <motion.span
      className={`${base} ${colorClass}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative z-10">{label}</span>
      {/* Corner accents */}
      <span className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${isCyan ? 'border-grid-cyan' : 'border-grid-orange'}`} />
      <span className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${isCyan ? 'border-grid-cyan' : 'border-grid-orange'}`} />
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  )
}
