import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  actions?: ReactNode
}

export function SectionHeader({ title, subtitle, badge, actions }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
    >
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl lg:text-2xl font-display font-bold text-white tracking-tight">
            {title}
          </h2>
          {badge && (
            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </motion.div>
  )
}
