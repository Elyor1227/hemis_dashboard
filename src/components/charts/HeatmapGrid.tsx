import { motion } from 'framer-motion'

interface HeatmapGridProps {
  data: Array<Record<string, string | number>>
  hours: string[]
}

export function HeatmapGrid({ data, hours }: HeatmapGridProps) {
  const getColor = (value: number) => {
    if (value >= 90) return 'bg-emerald-500/80'
    if (value >= 80) return 'bg-cyan-500/70'
    if (value >= 70) return 'bg-blue-500/60'
    if (value >= 60) return 'bg-amber-500/50'
    return 'bg-rose-500/50'
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[400px]">
        <div className="grid grid-cols-[60px_repeat(5,1fr)] gap-1 mb-1">
          <div />
          {hours.map((h) => (
            <div key={h} className="text-center text-[10px] text-slate-500 font-mono">
              {h}
            </div>
          ))}
        </div>
        {data.map((row, ri) => (
          <div key={ri} className="grid grid-cols-[60px_repeat(5,1fr)] gap-1 mb-1">
            <div className="text-xs text-slate-400 flex items-center">{row.day as string}</div>
            {hours.map((h, hi) => {
              const val = row[h] as number
              return (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: ri * 0.05 + hi * 0.03 }}
                  whileHover={{ scale: 1.08, zIndex: 10 }}
                  className={`aspect-square rounded-md ${getColor(val)} flex items-center justify-center cursor-default group relative`}
                  title={`${val}%`}
                >
                  <span className="text-[10px] font-mono text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    {val}%
                  </span>
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-slate-500">
        <span>Past</span>
        <div className="flex gap-0.5">
          {['bg-rose-500/50', 'bg-amber-500/50', 'bg-blue-500/60', 'bg-cyan-500/70', 'bg-emerald-500/80'].map(
            (c, i) => (
              <div key={i} className={`w-4 h-2 rounded-sm ${c}`} />
            ),
          )}
        </div>
        <span>Yuqori</span>
      </div>
    </div>
  )
}
