import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'
import TronCard from '../ui/TronCard'

const categories = [
  { label: 'Languages',  key: 'languages' as const, accent: 'cyan'   as const },
  { label: 'Frontend',   key: 'frontend'  as const, accent: 'cyan'   as const },
  { label: 'Backend',    key: 'backend'   as const, accent: 'orange' as const },
  { label: 'Databases',  key: 'databases' as const, accent: 'orange' as const },
  { label: 'Tools',      key: 'tools'     as const, accent: 'cyan'   as const },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="// TECH STACK" title="Skills" />

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <p className={`font-display text-xs tracking-[0.3em] uppercase mb-4 ${cat.accent === 'cyan' ? 'text-neon-cyan' : 'text-neon-orange'}`}>
                // {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {skills[cat.key].map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.04 }}
                  >
                    <TronCard accent={cat.accent} className="px-4 py-2 !p-0">
                      <span className={`
                        block px-4 py-2 font-display text-xs uppercase tracking-widest
                        ${cat.accent === 'cyan' ? 'text-grid-cyan' : 'text-grid-orange'}
                      `}>
                        {skill}
                      </span>
                    </TronCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
