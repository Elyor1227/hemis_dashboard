import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
  glow?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'none'
  onClick?: () => void
}

const glowMap = {
  cyan: 'stat-glow-cyan',
  purple: 'stat-glow-purple',
  emerald: 'stat-glow-emerald',
  amber: 'stat-glow-amber',
  rose: 'stat-glow-rose',
  none: '',
}

export function GlassCard({
  children,
  className = '',
  delay = 0,
  glow = 'none',
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`glass-card overflow-hidden ${glowMap[glow]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
