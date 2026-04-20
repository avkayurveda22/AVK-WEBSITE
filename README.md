# AVK Ayurvedic Clinic — Next.js

Next.js 14 (App Router) port of the AVK Ayurvedic Clinic site.

## Structure

```
nextjs/
├── app/
│   ├── layout.tsx           Root layout — fonts, Nav, Footer, BookingProvider, BookingModal
│   ├── globals.css          All design tokens and component styles
│   ├── page.tsx             Home
│   ├── about/page.tsx
│   ├── specialists/page.tsx
│   ├── spine/page.tsx       → SpecialityPage(slug="spine-joint")
│   ├── skin/page.tsx        → SpecialityPage(slug="skin")
│   ├── wellness/page.tsx    → SpecialityPage(slug="wellness")
│   ├── family/page.tsx      → SpecialityPage(slug="geriatric")
│   ├── gallery/page.tsx
│   ├── testimonials/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Nav.tsx              Sticky nav + mobile drawer
│   ├── Footer.tsx
│   ├── BookingContext.tsx   Global booking-modal state (React Context)
│   ├── BookingModal.tsx     5-step booking wizard
│   ├── SpecialityPage.tsx   Shared layout for the 4 speciality pages
│   ├── ui.tsx               Button, Kicker, ImgPH, Stars, Logo
│   └── Icon.tsx             Inline SVG icon set
└── lib/
    └── data.ts              Clinic info, specialities, specialists, testimonials, gallery
```

## Run

```bash
cd nextjs
npm install
npm run dev
```

Visit http://localhost:3000.

## Notes

- Default theme is **teal + Playfair Display** (applied via `body` classes in `layout.tsx`).
- To change theme, edit the body className in `app/layout.tsx`:
  - Accents: `accent-sage` (default green), `accent-forest`, `accent-teal`, `accent-olive`
  - Serif: (default Cormorant), `serif-playfair`, `serif-eb`
- Booking modal state is global via `BookingProvider` — call `openBooking()` or `openBooking(slug)` from any client component.
- All pages that use state or context are marked `"use client"`. The two speciality-index wrappers (`spine`, `skin`, `wellness`, `family`) are server components that render the client `SpecialityPage`.
