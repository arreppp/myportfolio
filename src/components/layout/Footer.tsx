import { personal } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-grid-border py-8 px-6 text-center">
      <p className="font-display text-xs text-grid-muted tracking-widest uppercase">
        © {new Date().getFullYear()} — {personal.name}
      </p>
      <p className="font-body text-xs text-grid-muted/60 mt-1">
        Built on The Grid · React + TypeScript + Vite
      </p>
    </footer>
  )
}
