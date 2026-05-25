import { motion } from 'framer-motion'
import {
  AlertTriangle,
  BookOpen,
  GraduationCap,
  Radio,
  TrendingUp,
  Users,
} from 'lucide-react'
import {
  attendanceTrend,
  CHART_COLORS,
  executiveStats,
  regionalData,
} from '../../data/mockData'
import { AttendanceLineChart } from '../charts/AttendanceLineChart'
import { DonutChart } from '../charts/DonutChart'
import { RegionalMap } from '../charts/RegionalMap'
import { StackedBarChart } from '../charts/StackedBarChart'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { StatCard } from '../ui/StatCard'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function ExecutiveOverview() {
  const genderDonut = [
    { name: 'Erkak', value: executiveStats.maleStudents, fill: CHART_COLORS.male },
    { name: 'Ayol', value: executiveStats.femaleStudents, fill: CHART_COLORS.female },
  ]

  const levelData = [
    {
      category: 'Bakalavr',
      male: 7146,
      female: 7450,
    },
    {
      category: 'Magistr',
      male: 872,
      female: 618,
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Boshqaruv paneli"
        subtitle="Milliy oliy ta'lim monitoring markazi — real vaqt statistikasi"
        badge="LIVE"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4">
        <StatCard
          label="Jami talabalar"
          value={executiveStats.totalStudents}
          suffix=" ta"
          change={2.4}
          icon={Users}
          gradient="from-cyan-500/80 to-blue-600/80"
          glow="cyan"
          delay={0}
        />
        <StatCard
          label="Faol talabalar"
          value={executiveStats.activeStudents}
          suffix=" ta"
          change={1.8}
          icon={GraduationCap}
          gradient="from-emerald-500/80 to-teal-600/80"
          glow="emerald"
          delay={0.05}
        />
        <StatCard
          label="Davomat"
          value={executiveStats.attendanceRate}
          suffix="%"
          decimals={1}
          change={-1.2}
          icon={TrendingUp}
          gradient="from-violet-500/80 to-purple-600/80"
          glow="purple"
          delay={0.1}
        />
        <StatCard
          label="O'rtacha GPA"
          value={executiveStats.avgGpa}
          decimals={2}
          change={0.8}
          icon={BookOpen}
          gradient="from-amber-500/80 to-orange-600/80"
          glow="amber"
          delay={0.15}
        />
        <StatCard
          label="Xavf zonasi"
          value={executiveStats.riskStudents}
          suffix=" ta"
          change={-5.2}
          icon={AlertTriangle}
          gradient="from-rose-500/80 to-pink-600/80"
          glow="rose"
          delay={0.2}
        />
        <StatCard
          label="Jonli darslar"
          value={executiveStats.liveClasses}
          suffix=" ta"
          icon={Radio}
          gradient="from-sky-500/80 to-indigo-600/80"
          glow="cyan"
          delay={0.25}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <GlassCard className="p-5 lg:col-span-2" delay={0.1} glow="cyan">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-white">Davomat dinamikasi</h3>
              <p className="text-xs text-slate-400">Oylik trend va maqsad ko'rsatkichi</p>
            </div>
            <span className="text-xs font-mono text-accent-cyan px-2 py-1 rounded-lg bg-accent-cyan/10">
              87.4% hozir
            </span>
          </div>
          <AttendanceLineChart data={attendanceTrend} />
        </GlassCard>

        <GlassCard className="p-5" delay={0.15}>
          <h3 className="text-sm font-semibold text-white mb-1">Jins bo'yicha</h3>
          <p className="text-xs text-slate-400 mb-4">Talabalar taqsimoti</p>
          <DonutChart
            data={genderDonut}
            centerValue={executiveStats.totalStudents}
            centerLabel="Jami"
          />
          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span className="text-slate-400">Erkak</span>
              <span className="font-mono text-white">{executiveStats.maleStudents.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-pink" />
              <span className="text-slate-400">Ayol</span>
              <span className="font-mono text-white">{executiveStats.femaleStudents.toLocaleString()}</span>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          {
            label: 'Bakalavr',
            male: 7146,
            female: 7450,
            total: 14596,
            gradient: 'from-teal-500/20 via-cyan-500/10 to-transparent',
            border: 'border-cyan-500/20',
          },
          {
            label: 'Magistr',
            male: 872,
            female: 618,
            total: 1490,
            gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
            border: 'border-purple-500/20',
          },
          {
            label: 'Qarzdor fanlar',
            value: executiveStats.academicDebt,
            sub: 'talaba',
            gradient: 'from-amber-500/20 to-transparent',
            border: 'border-amber-500/20',
          },
          {
            label: 'Qizil zona',
            value: executiveStats.redZone,
            sub: 'talaba',
            gradient: 'from-rose-500/20 to-transparent',
            border: 'border-rose-500/20',
          },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className={`glass-card p-5 bg-gradient-to-br ${card.gradient} ${card.border}`}
          >
            <p className="text-xs text-slate-400 uppercase tracking-wider">{card.label}</p>
            {'total' in card ? (
              <>
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-accent-cyan">{card.male?.toLocaleString()} Erkak</span>
                  <span className="text-accent-pink">{card.female?.toLocaleString()} Ayol</span>
                </div>
                <p className="mt-2 text-2xl font-display font-bold text-white">
                  <AnimatedCounter value={card.total!} suffix=" ta" />
                </p>
              </>
            ) : (
              <p className="mt-2 text-2xl font-display font-bold text-white">
                <AnimatedCounter value={card.value!} suffix={` ${card.sub}`} />
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GlassCard className="p-5" delay={0.25}>
          <h3 className="text-sm font-semibold text-white mb-4">
            Ta'lim darajasi (jins bo'yicha)
          </h3>
          <StackedBarChart
            data={levelData}
            keys={[
              { key: 'male', name: 'Erkak', color: CHART_COLORS.male },
              { key: 'female', name: 'Ayol', color: CHART_COLORS.female },
            ]}
            layout="vertical"
          />
        </GlassCard>

        <GlassCard className="p-5" delay={0.3}>
          <h3 className="text-sm font-semibold text-white mb-1">Hududiy tahlil</h3>
          <p className="text-xs text-slate-400 mb-4">Viloyatlar bo'yicha talabalar</p>
          <RegionalMap data={regionalData} />
        </GlassCard>
      </div>
    </div>
  )
}
