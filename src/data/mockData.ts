export const executiveStats = {
  totalStudents: 16086,
  activeStudents: 15234,
  attendanceRate: 87.4,
  avgGpa: 3.42,
  riskStudents: 342,
  academicDebt: 1289,
  liveClasses: 847,
  scholarshipStudents: 4521,
  dormitoryStudents: 3892,
  contractStudents: 8234,
  maleStudents: 8018,
  femaleStudents: 8068,
  bachelor: 14596,
  master: 1490,
  redZone: 156,
  admittedThisYear: 2847,
}

export const attendanceTrend = [
  { month: 'Sen', value: 82, target: 85 },
  { month: 'Okt', value: 84, target: 85 },
  { month: 'Noy', value: 86, target: 85 },
  { month: 'Dek', value: 85, target: 85 },
  { month: 'Yan', value: 83, target: 85 },
  { month: 'Fev', value: 87, target: 85 },
  { month: 'Mar', value: 88, target: 85 },
  { month: 'Apr', value: 87, target: 85 },
]

export const gpaDistribution = [
  { range: '4.0-3.5', count: 3241, fill: '#34d399' },
  { range: '3.5-3.0', count: 5892, fill: '#22d3ee' },
  { range: '3.0-2.5', count: 4123, fill: '#3b82f6' },
  { range: '2.5-2.0', count: 1890, fill: '#a78bfa' },
  { range: '<2.0', count: 940, fill: '#fb7185' },
]

export const facultyComparison = [
  { name: 'Muhandislik', gpa: 3.52, attendance: 91, students: 2840 },
  { name: 'Iqtisodiyot', gpa: 3.48, attendance: 89, students: 1920 },
  { name: 'Tibbiyot', gpa: 3.61, attendance: 94, students: 1560 },
  { name: 'Pedagogika', gpa: 3.38, attendance: 86, students: 2100 },
  { name: 'Huquq', gpa: 3.44, attendance: 88, students: 980 },
  { name: 'IT', gpa: 3.55, attendance: 90, students: 1240 },
]

export const ageByGender = [
  { category: '30 yoshgacha', male: 12450, female: 12890 },
  { category: '30 yoshdan katta', male: 420, female: 380 },
  { category: 'Jami', male: 8018, female: 8068 },
]

export const paymentForm = [
  { name: 'Davlat granti', bachelor: 8234, master: 890, value: 9124 },
  { name: "To'lov shartnoma", bachelor: 6362, master: 600, value: 6962 },
]

export const teacherPositions = [
  { name: "Stajer-o'qituvchi", value: 124, fill: '#22d3ee' },
  { name: 'Assistent', value: 198, fill: '#3b82f6' },
  { name: "Katta o'qituvchi", value: 245, fill: '#a78bfa' },
  { name: 'Dotsent', value: 189, fill: '#34d399' },
  { name: 'Professor', value: 98, fill: '#fbbf24' },
  { name: 'Kafedra mudiri', value: 48, fill: '#fb7185' },
]

export const subjectPassFail = [
  { subject: 'Matematika', pass: 78, fail: 22 },
  { subject: 'Fizika', pass: 82, fail: 18 },
  { subject: 'Ingliz tili', pass: 71, fail: 29 },
  { subject: 'Dasturlash', pass: 88, fail: 12 },
  { subject: 'Tarix', pass: 91, fail: 9 },
  { subject: 'Kimyo', pass: 76, fail: 24 },
]

export const heatmapData = [
  { day: 'Dush', h8: 92, h10: 88, h12: 75, h14: 90, h16: 85 },
  { day: 'Sesh', h8: 89, h10: 91, h12: 78, h14: 87, h16: 92 },
  { day: 'Chor', h8: 94, h10: 86, h12: 82, h14: 88, h16: 90 },
  { day: 'Pay', h8: 87, h10: 90, h12: 80, h14: 91, h16: 88 },
  { day: 'Jum', h8: 85, h10: 84, h12: 72, h14: 86, h16: 83 },
  { day: 'Shan', h8: 45, h10: 52, h12: 48, h14: 50, h16: 42 },
]

export const regionalData = [
  { region: 'Toshkent', students: 4200, growth: 4.2 },
  { region: 'Samarqand', students: 1890, growth: 2.8 },
  { region: 'Buxoro', students: 1240, growth: 1.5 },
  { region: 'Farg\'ona', students: 1560, growth: 3.1 },
  { region: 'Andijon', students: 1120, growth: 2.2 },
  { region: 'Namangan', students: 980, growth: 1.8 },
  { region: 'Navoiy', students: 640, growth: 0.9 },
  { region: 'Qashqadaryo', students: 890, growth: 2.5 },
  { region: 'Surxondaryo', students: 720, growth: 1.2 },
  { region: 'Xorazm', students: 580, growth: 0.7 },
  { region: 'Jizzax', students: 450, growth: 1.1 },
  { region: 'Sirdaryo', students: 320, growth: 0.5 },
  { region: 'Qoraqalpog\'iston', students: 596, growth: 1.9 },
]

export const classroomTreemap = [
  { name: 'Amaliyot', size: 640, fill: '#0ea5e9' },
  { name: "Ma'ruza", size: 180, fill: '#a78bfa' },
  { name: 'Laboratoriya', size: 52, fill: '#34d399' },
  { name: 'Boshqa', size: 40, fill: '#fbbf24' },
]

export const groupsByCourse = [
  { course: '1-kurs', bachelor: 245, master: 32 },
  { course: '2-kurs', bachelor: 238, master: 28 },
  { course: '3-kurs', bachelor: 220, master: 24 },
  { course: '4-kurs', bachelor: 198, master: 18 },
  { course: '5-kurs', bachelor: 42, master: 12 },
  { course: '6-kurs', bachelor: 8, master: 4 },
]

export const liveActivity = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  online: Math.floor(1200 + Math.sin(i / 3) * 400 + Math.random() * 200),
  offline: Math.floor(200 + Math.random() * 100),
}))

export const financialData = {
  contractPaid: 6842,
  contractPending: 1392,
  scholarshipTotal: 4521,
  tuitionDebt: 2840000000,
  debtStudents: 892,
}

export const aiInsights = [
  {
    id: '1',
    type: 'warning' as const,
    title: 'Davomat pasayishi',
    description: "Muhandislik fakultetida davomat 12% ga tushdi — o'tgan haftaga nisbatan.",
    time: '5 daqiqa oldin',
    metric: '-12%',
  },
  {
    id: '2',
    type: 'critical' as const,
    title: 'Qizil zonaga kirish',
    description: "Bu hafta 23 ta talaba qizil zonaga kirdi — GPA va davomat ko'rsatkichlari kritik.",
    time: '23 daqiqa oldin',
    metric: '+23',
  },
  {
    id: '3',
    type: 'warning' as const,
    title: "Fan o'tish darajasi",
    description: "Matematika fanida o'tish darajasi 6% ga kamaydi — 2-chorak natijalari.",
    time: '1 soat oldin',
    metric: '-6%',
  },
  {
    id: '4',
    type: 'success' as const,
    title: 'Stipendiya oshishi',
    description: "IT yo'nalishida stipendiya oluvchilar 8% ga ko'paydi.",
    time: '2 soat oldin',
    metric: '+8%',
  },
  {
    id: '5',
    type: 'info' as const,
    title: 'Auditoriya bandligi',
    description: "Ertalabki smenada auditoriya bandligi 94% — optimal yuklanish.",
    time: '3 soat oldin',
    metric: '94%',
  },
]

export const topGroups = [
  { name: 'DI-401', faculty: 'IT', gpa: 4.12, attendance: 96 },
  { name: 'TM-302', faculty: 'Tibbiyot', gpa: 4.08, attendance: 98 },
  { name: 'IQ-201', faculty: 'Iqtisodiyot', gpa: 3.98, attendance: 94 },
  { name: 'MH-305', faculty: 'Muhandislik', gpa: 3.95, attendance: 92 },
  { name: 'PD-104', faculty: 'Pedagogika', gpa: 3.91, attendance: 91 },
]

export const riskZoneStudents = [
  { id: 'ST-28471', name: 'Karimov A.', faculty: 'Muhandislik', gpa: 1.8, attendance: 62, debt: 3 },
  { id: 'ST-19283', name: 'Rahimova D.', faculty: 'Iqtisodiyot', gpa: 2.1, attendance: 58, debt: 2 },
  { id: 'ST-38492', name: 'Tursunov B.', faculty: 'IT', gpa: 2.0, attendance: 65, debt: 4 },
  { id: 'ST-48291', name: 'Yusupova M.', faculty: 'Huquq', gpa: 1.9, attendance: 55, debt: 2 },
  { id: 'ST-58392', name: 'Aliyev S.', faculty: 'Pedagogika', gpa: 2.2, attendance: 68, debt: 1 },
]

export const engagementScore = [
  { week: '1-hafta', score: 72 },
  { week: '2-hafta', score: 75 },
  { week: '3-hafta', score: 78 },
  { week: '4-hafta', score: 74 },
  { week: '5-hafta', score: 81 },
  { week: '6-hafta', score: 83 },
  { week: '7-hafta', score: 85 },
  { week: '8-hafta', score: 84 },
]

export const graduationAnalytics = [
  { year: '2021', graduated: 2840, employed: 2412 },
  { year: '2022', graduated: 3120, employed: 2680 },
  { year: '2023', graduated: 2980, employed: 2590 },
  { year: '2024', graduated: 3240, employed: 2890 },
  { year: '2025', graduated: 890, employed: 720 },
]

export const CHART_COLORS = {
  male: '#22d3ee',
  female: '#f472b6',
  bachelor: '#34d399',
  master: '#a78bfa',
  grant: '#818cf8',
  contract: '#fbbf24',
  grid: 'rgba(255,255,255,0.06)',
  text: '#94a3b8',
}
