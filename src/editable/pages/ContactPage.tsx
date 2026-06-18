'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Distribution', body: 'Discuss media distribution, public updates, campaigns, and content visibility.' },
  { icon: Mail, title: 'General support', body: 'Reach us for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#172235]">
        <section className="bg-[#12356d] text-white">
          <div className="mx-auto max-w-[1168px] px-4 py-16 sm:px-6 lg:px-0 lg:py-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[var(--slot4-accent)] pl-5 text-base font-semibold leading-8 text-white/82">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1168px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:px-0">
          <aside className="grid gap-4">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border border-black/10 bg-[#f5f7fb] p-6 shadow-sm">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-extrabold text-[#8b95a5]">0{index + 1}</span></div>
                <h2 className="mt-5 text-2xl font-extrabold">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#526071]">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="border-t-[5px] border-[#c9c9c9] bg-white pt-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-extrabold">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
