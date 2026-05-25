import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  CHART_COLORS,
  graduationAnalytics,
  heatmapData,
  riskZoneStudents,
  subjectPassFail,
  teacherPositions,
} from '../../data/mockData'
import { DonutChart } from '../charts/DonutChart'
import { HeatmapGrid } from '../charts/HeatmapGrid'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { ChartTooltip } from '../ui/ChartTooltip'

const heatmapHours = ['h8', 'h10', 'h12', 'h14', 'h16']

export function AcademicPerformance() {
  const passFailChart = subjectPassFail.map((s) => ({
    subject: s.subject,
    passed: s.pass,
    failed: s.fail,
  }))

  return (
    <div className="space-y-6">
      <SectionHeader
        title="O'quv jarayoni"
        subtitle="Fanlar, o'qituvchilar samaradorligi va bitirish tahlili"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GlassCard className="p-5" glow="purple">
          <h3 className="text-sm font-semibold text-white mb-1">
            Fan o'tish / yiqilish
          </h3>
          <p className="text-xs text-slate-400 mb-4">O'quv fanlari bo'yicha (%)</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={passFailChart} layout="vertical" margin={{ left: 70 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="subject" tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} width={65} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="passed" name="O'tdi" stackId="a" fill="#34d399" radius={[0, 0, 0, 0]} />
              <Bar dataKey="failed" name="O'tmadi" stackId="a" fill="#fb7185" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-5">
          <h3 className="text-sm font-semibold text-white mb-1">
            O'qituvchilar lavozimi
          </h3>
          <p className="text-xs text-slate-400 mb-2">Jami: 902 ta</p>
          <DonutChart data={teacherPositions} centerValue={902} centerLabel="Jami" />
        </GlassCard>
      </div>

      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-1">
          Davomat issiqlik xaritasi
        </h3>
        <p className="text-xs text-slate-400 mb-4">Hafta kunlari va soatlar bo'yicha (%)</p>
        <HeatmapGrid data={heatmapData} hours={heatmapHours} />
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GlassCard className="p-5">
          <h3 className="text-sm font-semibold text-white mb-4">Bitirish dinamikasi</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={graduationAnalytics}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis dataKey="year" tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="graduated" name="Bitiruvchilar" stroke="#22d3ee" strokeWidth={2} dot={{ fill: '#22d3ee' }} />
              <Line type="monotone" dataKey="employed" name="Ishga joylashgan" stroke="#34d399" strokeWidth={2} dot={{ fill: '#34d399' }} />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-5" glow="rose">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-white">Qizil zona talabalari</h3>
              <p className="text-xs text-slate-400">Xavf ostidagi talabalar ro'yxati</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
              {riskZoneStudents.length} ta
            </span>
          </div>
          <div className="space-y-2 max-h-[240px] overflow-y-auto">
            {riskZoneStudents.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-rose-500/5 border border-rose-500/10"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{s.name}</p>
                  <p className="text-xs text-slate-500">
                    {s.id} · {s.faculty}
                  </p>
                </div>
                <div className="text-right text-xs font-mono">
                  <p className="text-rose-400">GPA {s.gpa}</p>
                  <p className="text-slate-400">{s.attendance}% · {s.debt} fan</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
