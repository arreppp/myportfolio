import { useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'
import TronCard from '../ui/TronCard'
import GlowButton from '../ui/GlowButton'

const contactLinks = [
  { icon: '✉', label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: '📱', label: 'Phone',   value: personal.phone,    href: `tel:${personal.phone}`    },
  { icon: '🔗', label: 'Linktree', value: 'linktr.ee/ariefilman', href: personal.linktree    },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body    = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`)
  }

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="// ESTABLISH LINK" title="Contact" accent="cyan" />

        {/* Contact link cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TronCard accent="cyan" className="text-center p-5 group">
                <span className="text-2xl block mb-2">{c.icon}</span>
                <p className="font-display text-xs text-grid-muted uppercase tracking-widest mb-1">{c.label}</p>
                <p className="font-body text-sm text-neon-cyan group-hover:text-grid-white transition-colors break-all">{c.value}</p>
              </TronCard>
            </motion.a>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TronCard accent="cyan">
            <p className="font-display text-xs text-grid-muted tracking-widest uppercase mb-6">// SEND TRANSMISSION</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <TerminalInput
                  name="name" label="IDENTITY" placeholder="Your name"
                  value={form.name} onChange={handleChange}
                />
                <TerminalInput
                  name="email" label="FREQUENCY" placeholder="your@email.com" type="email"
                  value={form.email} onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-display text-xs text-grid-muted tracking-widest uppercase block mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-grid-cyan/40 focus:border-grid-cyan outline-none font-body text-sm text-grid-white placeholder-grid-border py-2 resize-none transition-colors"
                />
              </div>
              <div className="pt-2">
                <GlowButton label="Transmit Message" variant="cyan" type="submit" />
              </div>
            </form>
          </TronCard>
        </motion.div>
      </div>
    </section>
  )
}

function TerminalInput({
  name, label, placeholder, type = 'text', value, onChange,
}: {
  name: string; label: string; placeholder: string; type?: string
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <div>
      <label htmlFor={name} className="font-display text-xs text-grid-muted tracking-widest uppercase block mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border-0 border-b border-grid-cyan/40 focus:border-grid-cyan outline-none font-body text-sm text-grid-white placeholder-grid-border py-2 transition-colors"
      />
    </div>
  )
}
