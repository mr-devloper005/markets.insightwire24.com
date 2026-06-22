'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const publicLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Search', href: '/search' },
  ]
  const authLinks = session
    ? [{ label: 'Create', href: '/create' }]
    : [
        { label: 'Login', href: '/login' },
        { label: 'Sign Up', href: '/signup' },
      ]
  const navLinks = [...publicLinks, ...authLinks]

  const handleLogout = () => {
    logout()
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white text-[#12356d] shadow-[0_1px_0_rgba(0,0,0,.18)]">
      <div className="bg-[#12356d] text-white">
        <div className="mx-auto flex min-h-[52px] max-w-[1168px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-0">
          <Link href="/" className="text-sm font-extrabold uppercase tracking-[0.12em] hover:text-white/75">Home</Link>
          <nav className="hidden items-center gap-7 text-sm font-bold lg:flex">
            {navLinks.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className={item.label === 'Sign Up' || item.label === 'Create' ? 'bg-[var(--slot4-accent)] px-5 py-4 text-white hover:bg-[#bd3c20]' : 'hover:text-white/75'}>
                {item.label}
              </Link>
            ))}
            {session ? (
              <>
                <span className="max-w-[160px] truncate text-white/85">{session.name}</span>
                <button type="button" onClick={handleLogout} className="inline-flex items-center gap-2 hover:text-white/75">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </>
            ) : null}
          </nav>
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="border-b border-black/20 bg-white">
        <div className="mx-auto grid min-h-[88px] max-w-[1168px] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-0">
          <div className="hidden lg:block" />
          <Link href="/" className="editorial-brand flex min-w-0 items-center justify-center gap-3 text-center text-3xl font-extrabold tracking-tight text-[#12356d] sm:text-4xl">
            <img src="/favicon.png" alt="" className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20" />
            <span className="min-w-0 truncate">
              {SITE_CONFIG.name}
              <span className="ml-2 align-middle text-xs font-bold tracking-normal text-[#6b7480]">by Insightwire</span>
            </span>
          </Link>
          <form action="/search" className="mx-auto flex w-full max-w-[260px] items-center justify-center border-b-4 border-[#d2d2d2] py-2 lg:mx-0 lg:ml-auto">
            <input name="q" type="search" placeholder="Search" className="min-w-0 flex-1 bg-transparent px-2 text-sm text-[#1f2937] outline-none placeholder:text-[#1f2937]" />
            <button type="submit" aria-label="Search"><Search className="h-5 w-5 text-[#12356d]" /></button>
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {navLinks.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-bold">{item.label}</Link>
            ))}
            {session ? (
              <>
                <span className="bg-white px-4 py-3 text-sm font-bold text-[#12356d]">{session.name}</span>
                <button type="button" onClick={handleLogout} className="bg-white px-4 py-3 text-left text-sm font-bold">Logout</button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
