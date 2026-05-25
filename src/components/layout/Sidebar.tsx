import { motion } from 'framer-motion'
import {
  Activity,
  BarChart3,
  Brain,
  Building2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  Radio,
  Wallet,
} from 'lucide-react'
import type { SectionId } from '../../types'

const navItems: { id: SectionId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'executive', label: 'Boshqaruv', icon: LayoutDashboard },
  { id: 'students', label: 'Talabalar', icon: GraduationCap },
  { id: 'academic', label: "O'quv jarayoni", icon: BarChart3 },
  { id: 'financial', label: 'Moliyaviy', icon: Wallet },
  { id: 'realtime', label: 'Jonli monitoring', icon: Radio },
  { id: 'ai', label: 'AI tahlil', icon: Brain },
]

interface SidebarProps {
  active: SectionId
  onNavigate: (id: SectionId) => void
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ active, onNavigate, collapsed, onToggle }: SidebarProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 260 }}
      className="fixed left-0 top-0 bottom-0 z-40 flex flex-col border-r border-white/[0.06] bg-navy-900/80 backdrop-blur-2xl"
    >
      <div className="flex items-center gap-3 px-4 h-16 border-b border-white/[0.06]">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-white/10 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-accent-cyan" />
        </div>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-w-0"
          >
            <p className="text-xs font-bold text-white tracking-wide leading-tight">
              HEMIS
            </p>
            <p className="text-[10px] text-slate-500 leading-tight truncate">
              Analytics Platform
            </p>
          </motion.div>
        )}
      </div>

      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item, i) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onNavigate(item.id)}
              className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-gradient-to-r from-accent-cyan/15 to-accent-purple/10 rounded-xl border border-accent-cyan/20"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
              <Icon
                className={`relative z-10 w-5 h-5 flex-shrink-0 ${
                  isActive ? 'text-accent-cyan' : ''
                }`}
              />
              {!collapsed && (
                <span className="relative z-10 truncate">{item.label}</span>
              )}
              {isActive && !collapsed && (
                <Activity className="relative z-10 w-3 h-3 ml-auto text-accent-cyan animate-pulse" />
              )}
            </motion.button>
          )
        })}
      </nav>

      <div className="p-2 border-t border-white/[0.06]">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span className="text-xs">Yig'ish</span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  )
}
