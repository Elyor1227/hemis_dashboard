import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartTooltip } from '../ui/ChartTooltip'
import { CHART_COLORS } from '../../data/mockData'

interface AttendanceLineChartProps {
  data: Array<{ month: string; value: number; target: number }>
}

export function AttendanceLineChart({ data }: AttendanceLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="attendanceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: CHART_COLORS.text, fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[70, 100]}
          tick={{ fill: CHART_COLORS.text, fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${v}%`}
        />
        <Tooltip content={<ChartTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          name="Davomat"
          stroke="#22d3ee"
          strokeWidth={2}
          fill="url(#attendanceGrad)"
        />
        <Line
          type="monotone"
          dataKey="target"
          name="Maqsad"
          stroke="#a78bfa"
          strokeWidth={1.5}
          strokeDasharray="6 4"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
