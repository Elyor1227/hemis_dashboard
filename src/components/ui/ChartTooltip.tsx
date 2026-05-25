interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="glass-card px-4 py-3 !rounded-xl border border-white/10 shadow-glass">
      {label && <p className="text-xs text-slate-400 mb-2">{label}</p>}
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-slate-300">{entry.name}:</span>
          <span className="font-mono font-medium text-white">
            {typeof entry.value === 'number'
              ? entry.value.toLocaleString('uz-UZ')
              : entry.value}
          </span>
        </div>
      ))}
    </div>
  )
}
