# HEMIS Analytics Dashboard

Milliy oliy ta'lim monitoring platformasi — O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi uchun zamonaviy analytics dashboard.

## Xususiyatlar

- **Boshqaruv paneli** — jami talabalar, davomat, GPA, xavf zonasi
- **Talabalar tahlili** — GPA taqsimoti, to'lov shakli, fakultet taqqoslash
- **O'quv jarayoni** — fan o'tish/yiqilish, issiqlik xaritasi, qizil zona
- **Moliyaviy tahlil** — kontrakt, stipendiya, qarzdorlik
- **Jonli monitoring** — real vaqt darslar va faollik
- **AI tahlil** — avtomatik ogohlantirishlar va tavsiyalar

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda: `http://localhost:5173`

## Texnologiyalar

- React 18 + TypeScript
- Vite
- Tailwind CSS (glassmorphism, dark theme)
- Recharts (grafiklar)
- Framer Motion (animatsiyalar)

## Ma'lumotlar

Hozircha mock (namuna) ma'lumotlar ishlatiladi. API ulanganda `src/data/mockData.ts` o'rniga real endpointlar qo'shiladi.
