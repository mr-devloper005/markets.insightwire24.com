import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#ffffff',
  '--slot4-page-text': '#1f2a37',
  '--slot4-panel-bg': '#f3f5f8',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#46515f',
  '--slot4-soft-muted-text': '#6f7a87',
  '--slot4-accent': '#d94b2b',
  '--slot4-accent-fill': '#d94b2b',
  '--slot4-accent-soft': '#ffe8df',
  '--slot4-dark-bg': '#12356d',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e9f1fb',
  '--slot4-cream': '#f5f7fa',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#2f74c8',
  '--slot4-gray': '#e5e7eb',
  '--slot4-body-gradient': 'linear-gradient(180deg, #ffffff 0%, #f7f9fc 54%, #ffffff 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/15',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[0_8px_22px_rgba(18,53,109,0.08)]',
  shadowStrong: 'shadow-[0_24px_70px_rgba(18,53,109,0.20)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(10,35,74,0.05),rgba(8,31,66,0.82))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1168px] px-4 sm:px-6 lg:px-0',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-7 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start',
    rail: 'slot4-auto-rail flex gap-6 overflow-hidden pb-2',
    minRailCard: 'w-[280px] shrink-0 sm:w-[320px]',
  },
  type: {
    eyebrow: 'text-[11px] font-bold uppercase tracking-[0.16em]',
    heroTitle: 'text-4xl font-extrabold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.65rem]',
    sectionTitle: 'text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border border-black/10 ${editablePalette.surfaceBg} rounded-sm`,
    soft: `border border-black/10 ${editablePalette.surfaceBg} rounded-sm`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 bg-[var(--slot4-dark-bg)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#09234f]`,
    secondary: `inline-flex items-center justify-center gap-2 border border-[#2d6ebd] bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[var(--slot4-dark-bg)]`,
    accent: `inline-flex items-center justify-center gap-2 bg-[var(--slot4-accent-fill)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#bb3b20]`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(18,53,109,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a PR-style public information layout: white masthead, navy hero, orange action buttons, ruled sections, resource blocks, newsletter band, and deep blue footer.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Cards should vary between featured, compact, horizontal, editorial list, and image-first styles.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
