import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { personal, education, stats } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'
import TronCard from '../ui/TronCard'

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, active)
  return (
    <TronCard accent="cyan" className="text-center p-5">
      <p className="font-display text-4xl font-bold text-neon-cyan mb-1">
        {count}{stat.suffix}
      </p>
      <p className="font-body text-sm text-grid-muted uppercase tracking-widest">{stat.label}</p>
    </TronCard>
  )
}

export default function About() {
  const ref  = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="// SYSTEM PROFILE" title="About" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <TronCard accent="cyan">
              <p className="font-display text-xs text-grid-muted tracking-widest uppercase mb-3">// BIO</p>
              <p className="font-body text-base text-grid-white leading-relaxed">
                Full-Stack Developer based in {personal.location}. I specialise in building scalable REST APIs and modern frontend
                experiences — from architecting 89 production APIs to resolving critical production bugs during major framework migrations.
              </p>
              <p className="font-body text-base text-grid-muted leading-relaxed mt-3">
                Passionate about clean code, developer tooling, and shipping software that actually works.
              </p>
            </TronCard>

            <div className="space-y-4">
              <p className="font-display text-xs text-grid-muted tracking-widest uppercase">// EDUCATION</p>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <TronCard accent={i === 0 ? 'cyan' : 'orange'} className="p-4">
                    <p className="font-display text-xs font-bold text-grid-white leading-snug">{edu.degree}</p>
                    <p className="font-body text-sm text-grid-muted mt-1">{edu.school}</p>
                    <p className="font-body text-xs text-grid-border mt-1">{edu.period}</p>
                  </TronCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-xs text-grid-muted tracking-widest uppercase mb-4">// SYSTEM METRICS</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <StatCard stat={stat} active={visible} />
                </motion.div>
              ))}
            </div>

            <TronCard accent="orange" className="mt-6 p-4">
              <p className="font-display text-xs text-grid-muted tracking-widest uppercase mb-2">// CONTACT INFO</p>
              <div className="space-y-1">
                <p className="font-body text-sm text-grid-white">📧 {personal.email}</p>
                <p className="font-body text-sm text-grid-white">📱 {personal.phone}</p>
                <p className="font-body text-sm text-grid-white">📍 {personal.location}</p>
              </div>
            </TronCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
