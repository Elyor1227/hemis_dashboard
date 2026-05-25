import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Monitor, Users, Video, Wifi } from 'lucide-react'
import {
  classroomTreemap,
  executiveStats,
  groupsByCourse,
  liveActivity,
} from '../../data/mockData'
import { StackedBarChart } from '../charts/StackedBarChart'
import { TreemapChart } from '../charts/TreemapChart'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { ChartTooltip } from '../ui/ChartTooltip'
import { CHART_COLORS } from '../../data/mockData'

export function RealtimeMonitoring() {
  const [liveCount, setLiveCount] = useState(executiveStats.liveClasses)
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((c) => c + Math.floor(Math.random() * 5) - 2)
      setPulse((p) => !p)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Jonli monitoring"
        subtitle="Faol darslar, auditoriya bandligi va onlayn faollik"
        badge="REAL-TIME"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Faol darslar',
            value: liveCount,
            icon: Video,
            live: true,
          },
          {
            label: 'Onlayn talabalar',
            value: 8420,
            icon: Wifi,
            live: true,
          },
          {
            label: 'Auditoriya bandligi',
            value: 94,
            suffix: '%',
            icon: Monitor,
          },
          {
            label: 'Darsda talabalar',
            value: 12450,
            icon: Users,
          },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 relative overflow-hidden"
            >
              {stat.live && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full bg-emerald-400 ${pulse ? 'animate-ping' : ''}`}
                  />
                  <span className="text-[10px] text-emerald-400 font-medium uppercase">
                    Live
                  </span>
                </div>
              )}
              <Icon className="w-5 h-5 text-accent-cyan mb-3" />
              <p className="text-2xl font-display font-bold text-white font-mono">
                {stat.value.toLocaleString('uz-UZ')}
                {stat.suffix}
              </p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </motion.div>
          )
        })}
      </div>

      <GlassCard className="p-5" glow="cyan">
        <h3 className="text-sm font-semibold text-white mb-1">
          Kunlik faollik grafigi
        </h3>
        <p className="text-xs text-slate-400 mb-4">24 soatlik onlayn/offline dinamikasi</p>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={liveActivity}>
            <defs>
              <linearGradient id="onlineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
            <XAxis dataKey="hour" tick={{ fill: CHART_COLORS.text, fontSize: 10 }} axisLine={false} tickLine={false} interval={3} />
            <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="online"
              name="Onlayn"
              stroke="#22d3ee"
              fill="url(#onlineGrad)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="offline"
              name="Oflayn"
              stroke="#64748b"
              fill="transparent"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GlassCard className="p-5">
          <h3 className="text-sm font-semibold text-white mb-4">
            Guruhlar (kurs bo'yicha)
          </h3>
          <StackedBarChart
            data={groupsByCourse}
            keys={[
              { key: 'bachelor', name: 'Bakalavr', color: CHART_COLORS.bachelor },
              { key: 'master', name: 'Magistr', color: CHART_COLORS.master },
            ]}
          />
        </GlassCard>

        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Auditoriyalar</h3>
            <span className="text-xs font-mono text-slate-400">Jami: 912 ta</span>
          </div>
          <TreemapChart data={classroomTreemap} />
        </GlassCard>
      </div>

      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Hozirgi faol darslar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { room: 'A-201', subject: 'Matematika', group: 'DI-401', students: 28, online: true },
            { room: 'B-105', subject: 'Fizika', group: 'MH-302', students: 32, online: false },
            { room: 'C-304', subject: 'Dasturlash', group: 'IT-201', students: 24, online: true },
            { room: 'D-102', subject: 'Ingliz tili', group: 'IQ-104', students: 30, online: true },
            { room: 'E-401', subject: 'Kimyo', group: 'TM-205', students: 26, online: false },
            { room: 'F-203', subject: 'Tarix', group: 'PD-301', students: 35, online: true },
          ].map((lesson, i) => (
            <motion.div
              key={lesson.room}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent-cyan/20 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent-cyan">{lesson.room}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    lesson.online
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-slate-500/20 text-slate-400'
                  }`}
                >
                  {lesson.online ? 'Onlayn' : 'Oflayn'}
                </span>
              </div>
              <p className="text-sm font-medium text-white mt-2">{lesson.subject}</p>
              <p className="text-xs text-slate-500">{lesson.group}</p>
              <p className="text-xs font-mono text-slate-400 mt-2">
                {lesson.students} talaba
              </p>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
