import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#172235]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1168px] px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-0">
          <div className="flex flex-col justify-center bg-[#12356d] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-extrabold leading-tight sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/78">{pagesContent.auth.login.description}</p>
          </div>
          <div className="flex flex-col justify-center border border-black/10 bg-white p-7 shadow-sm sm:p-12 lg:p-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Member access</p>
            <h2 className="mt-3 text-4xl font-extrabold">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-black/15 pt-5 text-sm text-[#526071]">New here? <Link href="/signup" className="font-extrabold text-[var(--slot4-accent)] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
