import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartTooltip } from '../ui/ChartTooltip'
import { CHART_COLORS } from '../../data/mockData'

interface StackedBarChartProps {
  data: Array<Record<string, string | number>>
  keys: Array<{ key: string; name: string; color: string }>
  layout?: 'vertical' | 'horizontal'
}

export function StackedBarChart({
  data,
  keys,
  layout = 'vertical',
}: StackedBarChartProps) {
  const isVertical = layout === 'vertical'

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        layout={isVertical ? 'vertical' : 'horizontal'}
        margin={{ top: 10, right: 10, left: isVertical ? 80 : -10, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} horizontal={!isVertical} vertical={isVertical} />
        {isVertical ? (
          <>
            <XAxis type="number" tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="category" tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} width={75} />
          </>
        ) : (
          <>
            <XAxis dataKey="course" tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
          </>
        )}
        <Tooltip content={<ChartTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 11, color: CHART_COLORS.text }}
          formatter={(value) => <span className="text-slate-400">{value}</span>}
        />
        {keys.map((k) => (
          <Bar
            key={k.key}
            dataKey={k.key}
            name={k.name}
            stackId="a"
            fill={k.color}
            radius={isVertical ? [0, 4, 4, 0] : [4, 4, 0, 0]}
            animationDuration={1000}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
