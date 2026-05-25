import { motion } from 'framer-motion'

interface RadialProgressProps {
  value: number
  max?: number
  label: string
  color?: string
  size?: number
}

export function RadialProgress({
  value,
  max = 100,
  label,
  color = '#22d3ee',
  size = 120,
}: RadialProgressProps) {
  const pct = Math.min((value / max) * 100, 100)
  const r = (size - 12) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (pct / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={8}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
        />
      </svg>
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span className="text-xl font-display font-bold text-white">
          {value.toFixed(1)}
          {max === 100 ? '%' : ''}
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-400 text-center">{label}</p>
    </div>
  )
}
