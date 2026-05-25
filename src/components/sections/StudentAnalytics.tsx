import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  ageByGender,
  CHART_COLORS,
  engagementScore,
  executiveStats,
  facultyComparison,
  gpaDistribution,
  topGroups,
} from '../../data/mockData'
import { DonutChart } from '../charts/DonutChart'
import { StackedBarChart } from '../charts/StackedBarChart'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { FilterTabs } from '../ui/FilterTabs'
import { ChartTooltip } from '../ui/ChartTooltip'

export function StudentAnalytics() {
  const [paymentFilter, setPaymentFilter] = useState("Davlat granti")
  const [levelFilter, setLevelFilter] = useState('Bakalavr')

  const paymentData =
    paymentFilter === "Davlat granti"
      ? [
          { name: 'Bakalavr', value: 8234, fill: CHART_COLORS.grant },
          { name: 'Magistr', value: 890, fill: CHART_COLORS.master },
        ]
      : [
          { name: 'Bakalavr', value: 6362, fill: CHART_COLORS.contract },
          { name: 'Magistr', value: 600, fill: '#f97316' },
        ]

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Talabalar tahlili"
        subtitle="GPA, davomat, jalb qilish va talabalar faolligi"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Qabul buyrug\'i', value: executiveStats.admittedThisYear, color: 'cyan' },
          { label: 'Stipendiya', value: executiveStats.scholarshipStudents, color: 'emerald' },
          { label: 'Turar joy', value: executiveStats.dormitoryStudents, color: 'purple' },
          { label: 'Kontrakt', value: executiveStats.contractStudents, color: 'amber' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-4 text-center"
          >
            <p className="text-2xl font-display font-bold text-white">
              {s.value.toLocaleString('uz-UZ')}
            </p>
            <p className="text-xs text-slate-400 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GlassCard className="p-5" glow="purple">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">GPA taqsimoti</h3>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={gpaDistribution} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis dataKey="range" tick={{ fill: CHART_COLORS.text, fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="count" name="Talabalar" radius={[6, 6, 0, 0]} animationDuration={1000}>
                {gpaDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Talabalar faolligi</h3>
            <span className="text-xs text-emerald-400 font-mono">+12% o'sish</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={engagementScore}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis dataKey="week" tick={{ fill: CHART_COLORS.text, fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="score" name="Ball" fill="#34d399" radius={[4, 4, 0, 0]} animationDuration={1000} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <GlassCard className="p-5 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Yosh bo'yicha</h3>
            <FilterTabs
              tabs={['Bakalavr', 'Magistr']}
              active={levelFilter}
              onChange={setLevelFilter}
            />
          </div>
          <StackedBarChart
            data={ageByGender}
            keys={[
              { key: 'male', name: 'Erkak', color: CHART_COLORS.male },
              { key: 'female', name: 'Ayol', color: CHART_COLORS.female },
            ]}
            layout="vertical"
          />
        </GlassCard>

        <GlassCard className="p-5 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">To'lov shakli</h3>
            <FilterTabs
              tabs={["Davlat granti", "To'lov shartnoma"]}
              active={paymentFilter}
              onChange={setPaymentFilter}
            />
          </div>
          <DonutChart
            data={paymentData}
            centerValue={paymentData.reduce((s, d) => s + d.value, 0)}
            centerLabel="Jami"
          />
        </GlassCard>

        <GlassCard className="p-5 lg:col-span-1">
          <h3 className="text-sm font-semibold text-white mb-4">Eng yaxshi guruhlar</h3>
          <div className="space-y-2">
            {topGroups.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-accent-cyan/20 transition-colors"
              >
                <span className="w-6 h-6 flex items-center justify-center text-xs font-bold rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white">{g.name}</p>
                  <p className="text-xs text-slate-500">{g.faculty}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-white">{g.gpa}</p>
                  <p className="text-[10px] text-emerald-400">{g.attendance}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Fakultetlar taqqoslash</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-white/[0.06]">
                <th className="pb-3 pr-4">Fakultet</th>
                <th className="pb-3 pr-4">Talabalar</th>
                <th className="pb-3 pr-4">GPA</th>
                <th className="pb-3">Davomat</th>
              </tr>
            </thead>
            <tbody>
              {facultyComparison.map((f, i) => (
                <motion.tr
                  key={f.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-white/[0.04] hover:bg-white/[0.02]"
                >
                  <td className="py-3 pr-4 font-medium text-white">{f.name}</td>
                  <td className="py-3 pr-4 font-mono text-slate-300">
                    {f.students.toLocaleString()}
                  </td>
                  <td className="py-3 pr-4">
                    <span className="font-mono text-accent-cyan">{f.gpa}</span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[120px] h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-emerald"
                          style={{ width: `${f.attendance}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-slate-400 w-8">{f.attendance}%</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  )
}
