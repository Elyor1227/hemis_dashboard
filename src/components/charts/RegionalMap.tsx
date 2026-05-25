import { motion } from 'framer-motion'

interface RegionalMapProps {
  data: Array<{ region: string; students: number; growth: number }>
}

export function RegionalMap({ data }: RegionalMapProps) {
  const max = Math.max(...data.map((d) => d.students))

  return (
    <div className="space-y-2">
      {data.map((region, i) => {
        const width = (region.students / max) * 100
        return (
          <motion.div
            key={region.region}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="group"
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium truncate pr-2">
                {region.region}
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="font-mono text-white">
                  {region.students.toLocaleString('uz-UZ')}
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    region.growth >= 2
                      ? 'text-emerald-400 bg-emerald-400/10'
                      : 'text-slate-400 bg-white/5'
                  }`}
                >
                  +{region.growth}%
                </span>
              </div>
            </div>
            <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${width}%` }}
                transition={{ duration: 0.8, delay: i * 0.04 }}
                className="h-full rounded-full bg-gradient-to-r from-accent-cyan/80 to-accent-blue/60 group-hover:from-accent-cyan group-hover:to-accent-blue transition-all"
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
