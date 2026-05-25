import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartTooltip } from '../ui/ChartTooltip'

interface DonutChartProps {
  data: Array<{ name: string; value: number; fill: string }>
  centerLabel?: string
  centerValue?: string | number
}

export function DonutChart({ data, centerLabel, centerValue }: DonutChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0)

  return (
    <div className="relative h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="58%"
            outerRadius="78%"
            paddingAngle={3}
            dataKey="value"
            animationBegin={0}
            animationDuration={1200}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip content={<ChartTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      {(centerLabel || centerValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {centerValue !== undefined && (
            <span className="text-2xl font-display font-bold text-white">
              {typeof centerValue === 'number'
                ? centerValue.toLocaleString('uz-UZ')
                : centerValue}
            </span>
          )}
          {centerLabel && (
            <span className="text-xs text-slate-400 mt-0.5">{centerLabel}</span>
          )}
          {!centerValue && (
            <span className="text-lg font-mono text-slate-300">
              {total.toLocaleString('uz-UZ')}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
