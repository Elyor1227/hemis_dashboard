import { AnimatePresence, motion } from 'framer-motion'
import { useState, type ComponentType } from 'react'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { AcademicPerformance } from './components/sections/AcademicPerformance'
import { AIInsightsPanel } from './components/sections/AIInsightsPanel'
import { ExecutiveOverview } from './components/sections/ExecutiveOverview'
import { FinancialAnalytics } from './components/sections/FinancialAnalytics'
import { RealtimeMonitoring } from './components/sections/RealtimeMonitoring'
import { StudentAnalytics } from './components/sections/StudentAnalytics'
import type { Notification, SectionId } from './types'

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Davomat ogohlantirishi',
    message: 'Muhandislik fakultetida davomat 12% tushdi',
    time: '5 daqiqa oldin',
    read: false,
  },
  {
    id: '2',
    title: 'Qizil zona',
    message: '23 ta yangi talaba qizil zonaga kirdi',
    time: '23 daqiqa oldin',
    read: false,
  },
  {
    id: '3',
    title: 'Hisobot tayyor',
    message: 'Oylik statistik hisobot yuklandi',
    time: '2 soat oldin',
    read: true,
  },
]

const sections: Record<SectionId, ComponentType> = {
  executive: ExecutiveOverview,
  students: StudentAnalytics,
  academic: AcademicPerformance,
  financial: FinancialAnalytics,
  realtime: RealtimeMonitoring,
  ai: AIInsightsPanel,
}

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('executive')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const sidebarWidth = sidebarCollapsed ? 72 : 260
  const ActiveComponent = sections[activeSection]

  return (
    <div className="min-h-screen grid-bg">
      <Sidebar
        active={activeSection}
        onNavigate={setActiveSection}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <Header sidebarWidth={sidebarWidth} notifications={notifications} />

      <main
        style={{ marginLeft: sidebarWidth }}
        className="min-h-[calc(100vh-4rem)] p-6 transition-[margin] duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
