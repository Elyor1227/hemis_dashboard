import { motion } from 'framer-motion'

interface TreemapChartProps {
  data: Array<{ name: string; size: number; fill: string }>
}

export function TreemapChart({ data }: TreemapChartProps) {
  const total = data.reduce((s, d) => s + d.size, 0)

  return (
    <div className="flex flex-wrap gap-1 h-[220px] rounded-xl overflow-hidden">
      {data.map((item, i) => {
        const pct = (item.size / total) * 100
        const minWidth = pct < 15 ? 'min-w-[80px]' : ''
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            style={{
              flex: `${pct} 1 ${pct < 20 ? '120px' : '200px'}`,
              backgroundColor: item.fill,
              minHeight: pct > 40 ? '100%' : '48%',
            }}
            className={`relative rounded-lg p-3 flex flex-col justify-end cursor-default border border-white/10 ${minWidth}`}
          >
            <span className="text-xs font-medium text-white/90">{item.name}</span>
            <span className="text-lg font-display font-bold text-white">
              {item.size}
            </span>
            <span className="text-[10px] text-white/60">
              {((item.size / total) * 100).toFixed(0)}%
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
