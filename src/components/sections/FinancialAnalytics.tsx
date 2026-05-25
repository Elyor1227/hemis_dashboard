import { motion } from 'framer-motion'
import { CreditCard, PiggyBank, Receipt, Wallet } from 'lucide-react'
import { financialData } from '../../data/mockData'
import { DonutChart } from '../charts/DonutChart'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function FinancialAnalytics() {
  const contractData = [
    { name: "To'langan", value: financialData.contractPaid, fill: '#34d399' },
    { name: 'Kutilmoqda', value: financialData.contractPending, fill: '#fbbf24' },
  ]

  const scholarshipBreakdown = [
    { name: 'Akademik', value: 2100, fill: '#22d3ee' },
    { name: 'Ijtimoiy', value: 1420, fill: '#a78bfa' },
    { name: 'Prezident', value: 1001, fill: '#fbbf24' },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Moliyaviy tahlil"
        subtitle="Kontrakt, stipendiya va qarzdorlik monitoringi"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "To'langan kontrakt",
            value: financialData.contractPaid,
            icon: CreditCard,
            color: 'from-emerald-500/20',
          },
          {
            label: 'Kutilayotgan',
            value: financialData.contractPending,
            icon: Receipt,
            color: 'from-amber-500/20',
          },
          {
            label: 'Stipendiya oluvchilar',
            value: financialData.scholarshipTotal,
            icon: PiggyBank,
            color: 'from-cyan-500/20',
          },
          {
            label: 'Qarzdor talabalar',
            value: financialData.debtStudents,
            icon: Wallet,
            color: 'from-rose-500/20',
          },
        ].map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card p-5 bg-gradient-to-br ${item.color} to-transparent`}
            >
              <Icon className="w-5 h-5 text-slate-400 mb-3" />
              <p className="text-2xl font-display font-bold text-white">
                <AnimatedCounter value={item.value} suffix=" ta" />
              </p>
              <p className="text-xs text-slate-400 mt-1">{item.label}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GlassCard className="p-5" glow="emerald">
          <h3 className="text-sm font-semibold text-white mb-4">Kontrakt to'lovlari</h3>
          <DonutChart
            data={contractData}
            centerValue={
              financialData.contractPaid + financialData.contractPending
            }
            centerLabel="Jami"
          />
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/[0.06]">
            <div>
              <p className="text-xs text-slate-500">To'langan</p>
              <p className="text-lg font-mono text-emerald-400">
                {((financialData.contractPaid / (financialData.contractPaid + financialData.contractPending)) * 100).toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Kutilmoqda</p>
              <p className="text-lg font-mono text-amber-400">
                {((financialData.contractPending / (financialData.contractPaid + financialData.contractPending)) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5" glow="cyan">
          <h3 className="text-sm font-semibold text-white mb-4">Stipendiya turlari</h3>
          <DonutChart
            data={scholarshipBreakdown}
            centerValue={financialData.scholarshipTotal}
            centerLabel="Jami"
          />
        </GlassCard>
      </div>

      <GlassCard className="p-5" glow="rose">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-white">O'qish haqi qarzi</h3>
            <p className="text-xs text-slate-400 mt-1">
              Jami qarzdorlik summasi — milliy monitoring
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl lg:text-4xl font-display font-bold text-rose-400">
              {(financialData.tuitionDebt / 1_000_000_000).toFixed(2)} mlrd
            </p>
            <p className="text-xs text-slate-500 mt-1">so'm · {financialData.debtStudents} talaba</p>
          </div>
        </div>
        <div className="mt-6 h-3 rounded-full bg-white/[0.04] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '68%' }}
            transition={{ duration: 1.2 }}
            className="h-full rounded-full bg-gradient-to-r from-rose-500/80 to-amber-500/60"
          />
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Qarzdorlikning 68% i 2-chorak davrida shakllangan
        </p>
      </GlassCard>
    </div>
  )
}
