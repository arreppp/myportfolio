import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { personal } from '../../data/portfolio'
import GlowButton from '../ui/GlowButton'

// Ring circumferences (r=149, r=113)
const OUTER_C = Math.round(2 * Math.PI * 149)  // 936
const INNER_C = Math.round(2 * Math.PI * 113)  // 710

// ── All timing in seconds from mount ─────────────────────────────────────────
const T = {
  bezel:    0.0,   // disc bezel fades in
  oRing:    0.4,   // outer ring sweeps (1.6s)
  oGlow:    1.5,   // outer glow layers fade in
  iRing:    1.6,   // inner ring sweeps (1.0s)
  iGlow:    2.2,   // inner glow fades in
  rivets:   2.0,   // rivets pop in (staggered)
  lineStart: 2.5,  // connector draws disc → text (0.9s)
  lineDur:  0.9,
  // text (after line arrives ~3.4s)
  label:    3.5,   // "// IDENTITY CONFIRMED"
  name1:    4.1,   // "NURARIEF"
  name2:    5.0,   // "ILMAN"
  title:    5.9,   // "FULL-STACK DEVELOPER"
  para:     6.8,   // paragraph
  btns:     7.0,   // buttons fade in
  loc:      7.6,   // location
  scroll:   8.5,   // scroll indicator
}

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(text: string, delay: number, speed = 50) {
  const [out, setOut] = useState('')

  useEffect(() => {
    setOut('')
    let iv: ReturnType<typeof setInterval>
    const t = setTimeout(() => {
      let i = 0
      iv = setInterval(() => {
        i++
        setOut(text.slice(0, i))
        if (i >= text.length) clearInterval(iv)
      }, speed)
    }, delay * 1000)
    return () => { clearTimeout(t); clearInterval(iv) }
  }, [text, delay, speed])

  return out
}

// ── Blinking cursor ───────────────────────────────────────────────────────────
function Cursor({ on }: { on: boolean }) {
  if (!on) return null
  return (
    <motion.span
      className="inline-block w-[2px] h-[0.85em] bg-grid-cyan align-middle mx-[1px]"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' as const }}
    />
  )
}

// ── TypewriterText ────────────────────────────────────────────────────────────
function Tw({
  text, delay, speed, className,
}: { text: string; delay: number; speed?: number; className?: string }) {
  const d = useTypewriter(text, delay, speed)
  return (
    <span className={className}>
      {d}
      <Cursor on={d.length > 0 && d.length < text.length} />
    </span>
  )
}

// =============================================================================
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden">

      {/* ── HUD connector line: draws from disc edge → name (desktop) ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          {/* Origin dot on disc edge */}
          <motion.circle cx="648" cy="388" r="3.5" fill="#00e5ff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: T.lineStart, duration: 0.2 }}
          />

          {/* Main line: disc → bend → name */}
          <motion.path
            d="M 648 388 L 588 325 L 505 325"
            stroke="#00e5ff" strokeWidth="1.2"
            fill="none" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.9 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: T.lineDur, delay: T.lineStart, ease: 'easeInOut' as const }}
          />

          {/* Arrival dot at text side */}
          <motion.circle cx="505" cy="325" r="3.5" fill="#00e5ff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: T.lineStart + T.lineDur, duration: 0.15 }}
          />

          {/* Small bracket extending down from arrival dot */}
          <motion.path
            d="M 505 325 L 505 345 L 490 345"
            stroke="#00e5ff" strokeWidth="0.75" fill="none"
            strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: T.lineStart + T.lineDur + 0.1 }}
          />

          {/* HUD label tag */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: T.lineStart + T.lineDur + 0.2 }}
          >
            <rect x="511" y="311" width="60" height="13" rx="1"
              fill="#000408" stroke="#00e5ff44" strokeWidth="0.5" />
            <text x="514" y="321" fill="#00e5ff" fontSize="6.5"
              fontFamily="Orbitron" letterSpacing="1.2" opacity="0.8">
              USER.131
            </text>
          </motion.g>
        </svg>
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left: typed text — placeholder reserves space, typing fills in-place */}
        <div className="space-y-6">

          {/* Label */}
          <div className="relative font-display text-xs tracking-[0.4em] text-grid-muted uppercase">
            <span className="invisible">// IDENTITY CONFIRMED</span>
            <span className="absolute inset-0">
              <Tw text="// IDENTITY CONFIRMED" delay={T.label} speed={45} />
            </span>
          </div>

          {/* Name — single line */}
          <div className="relative">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight tracking-wider whitespace-nowrap">
              {/* "NURARIEF " — white */}
              <span className="relative inline-block text-grid-white">
                <span className="invisible">NURARIEF&nbsp;</span>
                <span className="absolute inset-0">
                  <Tw text="NURARIEF " delay={T.name1} speed={90} />
                </span>
              </span>
              {/* "ILMAN" — cyan */}
              <span className="relative inline-block text-grid-white">
                <span className="invisible">ILMAN</span>
                <span className="absolute inset-0">
                  <Tw text="ILMAN" delay={T.name2} speed={90} />
                </span>
              </span>
            </h1>
            <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-6 h-px bg-grid-cyan opacity-50" />
            <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-1.5 h-1.5 rounded-full bg-grid-cyan opacity-70" />
          </div>

          {/* Title */}
          <div className="relative font-display text-base sm:text-xl md:text-2xl text-neon-cyan tracking-[0.2em] uppercase">
            <span className="invisible">{personal.title}</span>
            <span className="absolute inset-0">
              <Tw text={personal.title} delay={T.title} speed={50} />
            </span>
          </div>

          {/* Tagline paragraph */}
          <div className="relative font-body text-base sm:text-lg text-grid-muted max-w-lg leading-relaxed">
            <span className="invisible">
              {personal.tagline} Specialising in REST APIs, modern frontend frameworks, and end-to-end system integration.
            </span>
            <span className="absolute inset-0">
              <Tw
                text={`${personal.tagline} Specialising in REST APIs, modern frontend frameworks, and end-to-end system integration.`}
                delay={T.para}
                speed={16}
              />
            </span>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: T.btns, duration: 0.5 }}
          >
            <GlowButton label="View Projects" variant="cyan"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} />
            <GlowButton label="View GitHub" variant="orange"
              href="https://github.com/arreppp" />
          </motion.div>

          {/* Location */}
          {/* <div className="relative flex gap-6 text-xs font-display tracking-widest text-grid-border uppercase">
            <span className="invisible">📍 {personal.location}</span>
            <span className="absolute inset-0">
              <Tw text={`📍 ${personal.location}`} delay={T.loc} speed={55} />
            </span>
          </div> */} 
        </div>

        {/* Right: Identity Disc */}
        <div className="hidden lg:flex items-center justify-center">
          <IdentityDisc />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: T.scroll }}
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

// =============================================================================
function IdentityDisc() {
  const outerCtrl = useAnimation()
  const innerCtrl = useAnimation()
  const mounted   = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    // Outer ring: sweep (top-down clockwise) → then gentle pulse
    ;(async () => {
      await outerCtrl.start({
        strokeDashoffset: 0,
        transition: {
          duration: 1.6,
          delay: T.oRing,
          ease: [0.05, 0.45, 0.85, 1.0] as const,
        },
      })
      // Flash bright on completion
      await outerCtrl.start({ opacity: [1, 1.0, 0.7, 1], transition: { duration: 0.3 } })
      // Settle into steady pulse
      outerCtrl.start({
        opacity: [1, 0.88, 1],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
      })
    })()

    // Inner ring: starts slightly after outer, same pattern
    const t = setTimeout(async () => {
      await innerCtrl.start({
        strokeDashoffset: 0,
        transition: { duration: 1.0, ease: [0.05, 0.45, 0.85, 1.0] as const },
      })
      innerCtrl.start({
        opacity: [0.78, 0.95, 0.78],
        transition: { duration: 3, repeat: Infinity, delay: 0.5, ease: 'easeInOut' as const },
      })
    }, T.iRing * 1000)

    return () => clearTimeout(t)
  }, [outerCtrl, innerCtrl])

  const rivetR = 129
  const rivets = [315, 225, 135, 45].map(deg => {
    const rad = (deg * Math.PI) / 180
    return [200 + rivetR * Math.cos(rad), 200 + rivetR * Math.sin(rad)] as [number, number]
  })

  return (
    <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
      {/* Ambient glow behind disc */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: T.oGlow, duration: 1 }}
        style={{ boxShadow: '0 0 70px 20px rgba(0,229,255,0.16), 0 0 130px 40px rgba(0,229,255,0.06)' }}
      />

      <svg viewBox="0 0 400 400" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="cg" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4"  result="b1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="bz" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#2e2e3c" />
            <stop offset="45%"  stopColor="#1c1c28" />
            <stop offset="100%" stopColor="#0e0e18" />
          </radialGradient>
          <radialGradient id="ch" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#1a1a25" />
            <stop offset="100%" stopColor="#0c0c16" />
          </radialGradient>
          <clipPath id="dc"><circle cx="200" cy="200" r="192" /></clipPath>
        </defs>

        {/* ══ 1. BEZEL — fades in first ══════════════════════════════════════ */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: T.bezel }}
        >
          <circle cx="200" cy="200" r="192" fill="url(#bz)" />
          {/* Groove texture */}
          <g clipPath="url(#dc)" opacity="0.35">
            {Array.from({ length: 80 }, (_, i) => {
              const rad = ((i / 80) * 360 * Math.PI) / 180
              const c = Math.cos(rad), s = Math.sin(rad)
              return (
                <line key={i}
                  x1={200 + 156 * c} y1={200 + 156 * s}
                  x2={200 + 191 * c} y2={200 + 191 * s}
                  stroke={i % 8 === 0 ? '#3a3a50' : '#0d0d18'}
                  strokeWidth={i % 8 === 0 ? '1.2' : '0.6'}
                />
              )
            })}
          </g>
          <circle cx="200" cy="200" r="191" fill="none" stroke="#5a5a70" strokeWidth="1.5" strokeOpacity="0.45" />
          <circle cx="200" cy="200" r="189" fill="none" stroke="#04040c" strokeWidth="2"   strokeOpacity="0.7"  />
          <circle cx="200" cy="200" r="155" fill="none" stroke="#111120" strokeWidth="3"                        />
          <circle cx="200" cy="200" r="153.5" fill="none" stroke="#404055" strokeWidth="0.75" strokeOpacity="0.5" />
        </motion.g>

        {/* ══ 2. OUTER RING glow halos — fade in as ring nears completion ═══ */}
        <motion.circle cx="200" cy="200" r="149" fill="none" stroke="#00e5ff"
          strokeWidth="36" initial={{ opacity: 0 }} animate={{ opacity: 0.06 }}
          transition={{ delay: T.oGlow, duration: 0.6 }} />
        <motion.circle cx="200" cy="200" r="149" fill="none" stroke="#00e5ff"
          strokeWidth="20" initial={{ opacity: 0 }} animate={{ opacity: 0.13 }}
          transition={{ delay: T.oGlow + 0.1, duration: 0.5 }} />
        <motion.circle cx="200" cy="200" r="149" fill="none" stroke="#00e5ff"
          strokeWidth="10" initial={{ opacity: 0 }} animate={{ opacity: 0.28 }}
          transition={{ delay: T.oGlow + 0.2, duration: 0.4 }} />

        {/* ══ 2b. OUTER RING core — SWEEPS clockwise from 12 o'clock ════════ */}
        <motion.circle
          cx="200" cy="200" r="149"
          transform="rotate(-90 200 200)"
          fill="none" stroke="#00e5ff" strokeWidth="7"
          strokeDasharray={OUTER_C}
          filter="url(#cg)"
          initial={{ strokeDashoffset: OUTER_C }}
          animate={outerCtrl}
        />
        {/* Bright highlight stripe — fades in after sweep */}
        <motion.circle cx="200" cy="200" r="149" fill="none" stroke="#ccf8ff"
          strokeWidth="1.5" initial={{ opacity: 0 }} animate={{ opacity: 0.55 }}
          transition={{ delay: T.oGlow + 0.4, duration: 0.3 }} />

        {/* ══ 3. INNER CHANNEL — fades in with inner ring ═══════════════════ */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: T.iRing - 0.1, duration: 0.4 }}
        >
          <circle cx="200" cy="200" r="145" fill="url(#ch)" />
          <circle cx="200" cy="200" r="145" fill="none" stroke="#111120" strokeWidth="2"    strokeOpacity="0.9" />
          <circle cx="200" cy="200" r="144" fill="none" stroke="#2a2a3a" strokeWidth="0.75" strokeOpacity="0.4" />
          {/* subtle radial shading in channel */}
          <g opacity="0.15">
            {Array.from({ length: 36 }, (_, i) => {
              const rad = ((i / 36) * 360 * Math.PI) / 180
              const c = Math.cos(rad), s = Math.sin(rad)
              return <line key={i}
                x1={200 + 118 * c} y1={200 + 118 * s}
                x2={200 + 143 * c} y2={200 + 143 * s}
                stroke="#04040c" strokeWidth="0.8" />
            })}
          </g>
        </motion.g>

        {/* ══ 4. INNER RING glow halos ═══════════════════════════════════════ */}
        <motion.circle cx="200" cy="200" r="113" fill="none" stroke="#00e5ff"
          strokeWidth="16" initial={{ opacity: 0 }} animate={{ opacity: 0.06 }}
          transition={{ delay: T.iGlow, duration: 0.5 }} />
        <motion.circle cx="200" cy="200" r="113" fill="none" stroke="#00e5ff"
          strokeWidth="8"  initial={{ opacity: 0 }} animate={{ opacity: 0.14 }}
          transition={{ delay: T.iGlow + 0.1, duration: 0.4 }} />

        {/* ══ 4b. INNER RING core — SWEEPS clockwise from 12 o'clock ════════ */}
        <motion.circle
          cx="200" cy="200" r="113"
          transform="rotate(-90 200 200)"
          fill="none" stroke="#00e5ff" strokeWidth="3.5"
          strokeDasharray={INNER_C}
          filter="url(#cg)"
          initial={{ strokeDashoffset: INNER_C, opacity: 0.78 }}
          animate={innerCtrl}
        />
        <motion.circle cx="200" cy="200" r="113" fill="none" stroke="#bbf5ff"
          strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
          transition={{ delay: T.iGlow + 0.4, duration: 0.3 }} />

        {/* ══ 5. RIVETS — static from the start, part of the bezel ══════════ */}
        {rivets.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x + 0.5} cy={y + 0.5} r="5.5" fill="#040408" fillOpacity="0.8" />
            <circle cx={x} cy={y} r="5.5" fill="#181825" stroke="#3a3a50" strokeWidth="0.75" />
            <circle cx={x} cy={y} r="3.5" fill="#222233" />
            <circle cx={x} cy={y} r="1.2" fill="#2e2e40" />
          </g>
        ))}

        {/* ══ 6. CENTER VOID — pure black ═══════════════════════════════════ */}
        <motion.circle cx="200" cy="200" r="101" fill="#000000"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: T.bezel + 0.1, duration: 0.3 }} />
        <motion.circle cx="200" cy="200" r="101" fill="none"
          stroke="#00e5ff" strokeWidth="0.75" strokeOpacity="0.18"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: T.iGlow, duration: 0.4 }} />
      </svg>
    </div>
  )
}
