import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'
import TronCard from '../ui/TronCard'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="// PROJECT LOG" title="Projects" accent="orange" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TronCard
                accent={proj.accent}
                className="h-full flex flex-col group"
                style={{
                  clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)',
                } as React.CSSProperties}
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <h3 className="font-display text-base font-bold text-grid-white uppercase tracking-wide">
                    {proj.title}
                  </h3>
                  <span className="font-body text-xs text-grid-border">{proj.period}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map(tech => (
                    <span
                      key={tech}
                      className={`font-display text-xs px-2 py-0.5 border uppercase tracking-wider ${
                        proj.accent === 'cyan'
                          ? 'border-grid-cyan/40 text-grid-cyan bg-grid-cyan/5'
                          : 'border-grid-orange/40 text-grid-orange bg-grid-orange/5'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="font-body text-sm text-grid-muted leading-relaxed flex-1">{proj.desc}</p>

                <div className="mt-4 pt-4 border-t border-grid-border">
                  <span className={`font-display text-xs uppercase tracking-widest ${
                    proj.accent === 'cyan' ? 'text-neon-cyan' : 'text-neon-orange'
                  } opacity-70 group-hover:opacity-100 transition-opacity`}>
                    ▸ View Details
                  </span>
                </div>
              </TronCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
