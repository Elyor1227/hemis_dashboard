import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell,
  Calendar,
  ChevronDown,
  Filter,
  Search,
  Settings,
} from 'lucide-react'
import { useState } from 'react'
import type { Notification } from '../../types'

interface HeaderProps {
  sidebarWidth: number
  notifications: Notification[]
}

export function Header({ sidebarWidth, notifications }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const unread = notifications.filter((n) => !n.read).length

  return (
    <motion.header
      style={{ marginLeft: sidebarWidth }}
      className="sticky top-0 z-30 h-16 border-b border-white/[0.06] bg-navy-950/70 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between h-full px-6 gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-widest text-accent-cyan/80 font-medium">
            O'zbekiston Respublikasi
          </p>
          <h1 className="text-sm lg:text-base font-display font-semibold text-white truncate">
            Oliy ta'lim, fan va innovatsiyalar vazirligi — Analytics
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Talaba, guruh, fakultet qidirish..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan/40 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
            />
          </div>
          <button className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/15 transition-all">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>2025-2026 o'quv yili</span>
            <ChevronDown className="w-3 h-3" />
          </div>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white transition-all"
            >
              <Bell className="w-4 h-4" />
              {unread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center text-[10px] font-bold bg-rose-500 text-white rounded-full">
                  {unread}
                </span>
              )}
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  className="absolute right-0 top-full mt-2 w-80 glass-card p-2 !rounded-xl z-50"
                >
                  <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Bildirishnomalar
                  </p>
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`px-3 py-2.5 rounded-lg ${!n.read ? 'bg-white/[0.04]' : ''}`}
                    >
                      <p className="text-sm font-medium text-white">{n.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{n.message}</p>
                      <p className="text-[10px] text-slate-500 mt-1">{n.time}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white transition-all">
            <Settings className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 pl-2 border-l border-white/[0.08]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-xs font-bold text-white">
              AV
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
