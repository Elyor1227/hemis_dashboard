import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'

interface StatCardProps {
  label: string
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  change?: number
  icon: LucideIcon
  gradient: string
  glow?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose'
  delay?: number
}

export function StatCard({
  label,
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  change,
  icon: Icon,
  gradient,
  glow = 'cyan',
  delay = 0,
}: StatCardProps) {
  const trend = change !== undefined ? (change >= 0 ? 'up' : 'down') : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`glass-card p-5 ${glow === 'cyan' ? 'stat-glow-cyan' : glow === 'purple' ? 'stat-glow-purple' : glow === 'emerald' ? 'stat-glow-emerald' : glow === 'amber' ? 'stat-glow-amber' : 'stat-glow-rose'} group`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        {trend !== null && (
          <div
            className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
              trend === 'up'
                ? 'text-emerald-400 bg-emerald-400/10'
                : 'text-rose-400 bg-rose-400/10'
            }`}
          >
            {trend === 'up' ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {Math.abs(change!)}%
          </div>
        )}
      </div>
      <p className="mt-4 text-sm text-slate-400 font-medium">{label}</p>
      <p className="mt-1 text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
        <AnimatedCounter
          value={value}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
        />
      </p>
    </motion.div>
  )
}
