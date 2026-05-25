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

> **Muhim:** `node_modules` va `dist` papkalarini GitHubga yuklamang. Ular `.gitignore` da. Vercel deploy uchun faqat manba kod push qilinadi.

## Vercel deploy

```bash
# Bir marta: repodan node_modules va dist ni olib tashlash
git rm -r --cached node_modules dist tsconfig.tsbuildinfo 2>nul
git add .gitignore
git commit -m "Remove node_modules from repo; fix Vercel build"
git push
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
