# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

    npm run dev       # start dev server at localhost:5173
    npm run build     # production build to dist/
    npm run preview   # preview production build locally

No linter or test runner is configured.

On Windows, the preview_start MCP tool is more reliable than running npm directly. Use the launch config named "RentHawk Dev".

## Architecture

Single-page marketing landing page for RentHawk TLV, a Telegram bot that scans Tel Aviv apartment listings. The entire UI lives in one file: **src/App.jsx**.

**Stack:** React 18 + Vite 6 (ESM, no TypeScript), Tailwind CSS 3 + PostCSS. No router, no state management library, no component library.

### Page structure

All components are defined and assembled in src/App.jsx, in render order:

- Header - fixed top bar, logo only
- HeroSection - headline, hawk SVG mascot, animated notification cards, primary CTA
- TrustBadges - horizontally scrollable pill chips
- FeaturesSection - 3 vertical feature cards
- HowItWorksSection - vertical timeline, 3 steps with connecting line
- LiveDemoFeed - Telegram chat mockup; cycles new notifications every 3.5s via useState/useEffect
- SocialProof - testimonial cards
- MainCTASection - gold-background CTA block
- Footer - minimal copyright + links
- StickyCtaBar - fixed bottom bar, always-visible CTA button

Shared data (notification content, badges, features, steps, testimonials) lives as plain arrays at module level, above the components that use them.

### Design system

Design language: "Approachable Premium" — soft shadows, rounded corners, warm sand background.

- Background: #F9F8F6
- Primary text: #0F172A
- Secondary text: #475569
- Accent gold: #EAB308
- Soft highlight: #FEF3C7
- Card shadow: 0 4px 20px rgba(15,23,42,0.07)
- CTA shadow: 0 12px 30px rgba(15,23,42,0.25)

Shadows and dynamic rgba values are applied via inline style props, not Tailwind utilities. Static layout and spacing use Tailwind classes.

### CSS animations (src/index.css)

- animate-hawk-bob - slow vertical float for the hawk mascot
- animate-slide-up - fade+slide-in for hero notification cards; pair with animationDelay inline style for stagger
- animate-cta-pulse - box-shadow pulse on CTA buttons, 3s loop
- animate-notif-in - slide-in from right for new messages in the live demo feed
- no-scrollbar - hides scrollbar on the trust badges horizontal scroll container

### String quoting — important

All JavaScript strings in App.jsx use **double quotes only**. Do not use single quotes. The file is written and patched via bash heredocs; single quotes break shell parsing.

### Key constants (top of App.jsx)

- BOT_LINK - Telegram bot URL; update before deploying
- Support email in Footer: support@renthawk-tlv.com

### Static assets

The hawk mascot is a hand-crafted inline SVG in the HawkSVG component (navy body, gold eyes, gold talons, viewBox 0 0 200 230). An optional /public/hawk-hero.png is not currently used.

### Tailwind config (tailwind.config.js)

Custom tokens: sand, midnight, ink, gold, highlight colors; card, card-lg, cta, cta-lg box-shadow utilities.
