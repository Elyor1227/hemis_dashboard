import { motion } from 'framer-motion'
import {
  AlertTriangle,
  Brain,
  Info,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { aiInsights } from '../../data/mockData'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

const typeConfig = {
  warning: {
    icon: AlertTriangle,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  critical: {
    icon: AlertTriangle,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
  success: {
    icon: TrendingUp,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  info: {
    icon: Info,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
}

export function AIInsightsPanel() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="AI tahlil markazi"
        subtitle="Sun'iy intellekt asosida avtomatik tahlil va ogohlantirishlar"
        badge="AI"
        actions={
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 text-sm font-medium text-white"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            Yangi tahlil
          </motion.button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <GlassCard className="p-6 lg:col-span-1" glow="purple">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-accent-purple/30 to-accent-cyan/20 border border-white/10">
              <Brain className="w-8 h-8 text-accent-cyan" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white">HEMIS AI</h3>
              <p className="text-xs text-slate-400">Intelligent Analytics Engine</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Bugungi tahlillar</p>
              <p className="text-2xl font-display font-bold text-white mt-1">24</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Kritik ogohlantirish</p>
              <p className="text-2xl font-display font-bold text-rose-400 mt-1">3</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Aniqlik darajasi</p>
              <p className="text-2xl font-display font-bold text-emerald-400 mt-1">94.2%</p>
            </div>
          </div>
        </GlassCard>

        <div className="lg:col-span-2 space-y-3">
          {aiInsights.map((insight, i) => {
            const config = typeConfig[insight.type]
            const Icon = config.icon
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card p-5 ${config.bg} border ${config.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-xl ${config.bg}`}>
                    <Icon className={`w-5 h-5 ${config.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-white">{insight.title}</h4>
                      {insight.metric && (
                        <span
                          className={`text-sm font-mono font-bold flex items-center gap-1 ${config.color}`}
                        >
                          {insight.metric.startsWith('-') ? (
                            <TrendingDown className="w-3 h-3" />
                          ) : insight.metric.startsWith('+') ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : null}
                          {insight.metric}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{insight.description}</p>
                    <p className="text-[10px] text-slate-500 mt-2">{insight.time}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <GlassCard className="p-5">
        <h3 className="text-sm font-semibold text-white mb-4">Tavsiya etilgan harakatlar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            "Muhandislik fakultetida davomat bo'yicha tekshiruv o'tkazish",
            "Matematika kafedrasida qo'shimcha mashg'ulotlar tashkil etish",
            'Qizil zonadagi 23 talaba bilan individual ishlab chiqish',
          ].map((action, i) => (
            <motion.div
              key={i}
              whileHover={{ borderColor: 'rgba(34, 211, 238, 0.3)' }}
              className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] cursor-default"
            >
              <span className="text-xs text-accent-cyan font-medium">#{i + 1}</span>
              <p className="text-sm text-slate-300 mt-2">{action}</p>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
