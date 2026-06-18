'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const distributionRoute = SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution'
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Distribution', href: distributionRoute },
    { label: 'Login', href: '/login' },
    { label: 'Sign Up', href: '/signup' },
    { label: 'Search', href: '/search' },
  ]

  return (
    <footer className="bg-[#12356d] text-white">
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#182270_0%,#246fc0_48%,#120048_100%)]">
        <div className="mx-auto max-w-[1168px] px-4 py-12 sm:px-6 lg:px-0">
          <p className="text-center text-xl uppercase tracking-wide sm:text-2xl">Receive monthly media releases and industry news</p>
          <h2 className="mt-4 text-center text-3xl font-extrabold uppercase">Straight to your inbox</h2>
          <form action="/signup" className="mx-auto mt-7 grid max-w-5xl overflow-hidden rounded-full bg-white text-[#172235] sm:grid-cols-[1fr_auto]">
            <input name="email" type="email" placeholder="Enter your email" className="min-w-0 px-8 py-4 text-xl font-bold outline-none placeholder:text-[#6d7280]" />
            <button className="bg-[var(--slot4-accent)] px-9 py-4 text-xl font-extrabold uppercase text-white">Sign up</button>
          </form>
          <p className="mx-auto mt-6 max-w-4xl text-center text-xs font-semibold leading-6 text-white/85">
            We handle personal information responsibly and use it to send the updates you request.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1168px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.2fr_.9fr] lg:px-0">
        <div>
          <Link href="/" className="text-3xl font-extrabold tracking-tight">{SITE_CONFIG.name}</Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/78">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>
        <nav className="grid gap-3 sm:grid-cols-2">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold hover:text-white/70">{item.label}</Link>
          ))}
        </nav>
        <div>
          <h3 className="text-lg font-bold">Search the site</h3>
          <form action="/search" className="mt-4 flex border border-white/35 bg-white/10">
            <input name="q" placeholder="Search" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm font-semibold outline-none placeholder:text-white/55" />
            <button className="px-4" aria-label="Search"><Search className="h-5 w-5" /></button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1168px] flex-wrap items-center justify-between gap-4 border-t border-white/20 px-4 py-5 text-xs font-semibold sm:px-6 lg:px-0">
        <p>Copyright © {year} {SITE_CONFIG.name}.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href={distributionRoute}>Distribution</Link>
        </div>
      </div>
    </footer>
  )
}
