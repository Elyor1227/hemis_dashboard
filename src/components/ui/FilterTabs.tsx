import { motion } from 'framer-motion'

interface FilterTabsProps {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className="relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
        >
          {active === tab && (
            <motion.div
              layoutId="filter-tab"
              className="absolute inset-0 bg-white/10 rounded-lg border border-white/10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span
            className={`relative z-10 ${
              active === tab ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  )
}
