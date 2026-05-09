import { motion } from 'framer-motion'
import { experiences } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'
import TronCard from '../ui/TronCard'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle label="// WORK LOG" title="Experience" accent="orange" />

        <div className="relative">
          {/* Center timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-grid-cyan opacity-20 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-start ${i % 2 === 0 ? '' : 'direction-rtl'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className={`w-3 h-3 rounded-full border-2 ${exp.color === 'cyan' ? 'border-grid-cyan bg-grid-bg shadow-cyan' : 'border-grid-orange bg-grid-bg shadow-orange'}`} />
                </div>

                {i % 2 === 0 ? (
                  <>
                    <div className="md:pr-8">
                      <ExperienceCard exp={exp} />
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-8">
                      <ExperienceCard exp={exp} />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const isOrange = exp.color === 'orange'
  return (
    <TronCard accent={exp.color}>
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div>
          <h3 className="font-display text-base font-bold text-grid-white uppercase tracking-wide">{exp.role}</h3>
          <p className={`font-display text-sm mt-0.5 ${isOrange ? 'text-neon-orange' : 'text-neon-cyan'}`}>
            {exp.company}
          </p>
        </div>
        <span className={`font-display text-xs px-3 py-1 border uppercase tracking-wider ${
          isOrange
            ? 'border-grid-orange text-grid-orange bg-grid-orange/10'
            : 'border-grid-cyan text-grid-cyan bg-grid-cyan/10'
        }`}>
          {exp.period}
        </span>
      </div>
      <ul className="space-y-2 mt-4">
        {exp.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 font-body text-sm text-grid-muted leading-relaxed">
            <span className={`mt-1 flex-shrink-0 ${isOrange ? 'text-neon-orange' : 'text-neon-cyan'}`}>▸</span>
            {h}
          </li>
        ))}
      </ul>
    </TronCard>
  )
}
