'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, PlusCircle, Send, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
}

const fieldClass = 'border border-black/25 bg-white px-4 py-3 text-sm font-bold text-[#172235] outline-none transition placeholder:text-[#8b95a5] focus:border-[var(--slot4-accent)]'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task, setTask] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="min-h-screen bg-white text-[#172235]">
          <section className="slot4-hero-grid relative overflow-hidden text-white">
            <div className="slot4-wave-lines pointer-events-none absolute -right-20 -top-12 h-[115%] w-[48%]" />
            <div className={`${dc.shell.section} grid gap-8 py-16 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:py-20`}>
              <div className="relative z-10 flex min-h-72 items-center justify-center border border-white/25 bg-white/10">
                <Lock className="h-20 w-20 opacity-90" />
              </div>
              <div className="relative z-10 self-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">{pagesContent.create.locked.badge}</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight sm:text-6xl">{pagesContent.create.locked.title}</h1>
                <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-white/82">{pagesContent.create.locked.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/login" className={dc.button.accent}>Login <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/signup" className={dc.button.secondary}>Sign up</Link>
                </div>
              </div>
            </div>
          </section>
          <section className={dc.shell.section}>
            <div className="border-b-[5px] border-[#c9c9c9] py-8">
              <p className="max-w-3xl text-sm font-semibold leading-7 text-[#526071]">
                Login to open the publishing workspace and create clean, structured content for the active site sections.
              </p>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-white text-[#172235]">
        <section className="slot4-hero-grid relative overflow-hidden text-white">
          <div className="slot4-wave-lines pointer-events-none absolute -right-20 -top-12 h-[115%] w-[48%]" />
          <div className={`${dc.shell.section} relative z-10 grid gap-10 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-16`}>
            <aside>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">{pagesContent.create.hero.badge}</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight sm:text-6xl">{pagesContent.create.hero.title}</h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-white/82">{pagesContent.create.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center bg-white px-5 py-3 text-sm font-extrabold text-[#12356d]">{session.name}</span>
                <span className="inline-flex items-center border border-white/35 px-5 py-3 text-sm font-bold text-white">Ready to publish</span>
              </div>
            </aside>

            <div className="border border-white/25 bg-white/10 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">Choose section</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`min-h-32 border p-4 text-left transition ${active ? 'border-[var(--slot4-accent)] bg-[var(--slot4-accent)] text-white' : 'border-white/20 bg-white text-[#172235] hover:border-white'}`}>
                      <Icon className="h-5 w-5" />
                      <span className="mt-3 block text-sm font-extrabold">{item.label}</span>
                      <span className="mt-1 block text-xs font-semibold opacity-65">{item.description}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={`${dc.shell.section} py-12 lg:py-14`}>
          <form onSubmit={submit} className="border border-black/15 bg-white p-5 shadow-[0_8px_22px_rgba(18,53,109,0.08)] sm:p-7 lg:p-9">
            <div className="border-b-[5px] border-[#c9c9c9] pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Create {activeTask?.label || 'post'}</p>
                  <h2 className="mt-2 text-4xl font-extrabold text-[#2a3038]">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="bg-[#12356d] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white">{session.name}</span>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Website or source URL" />
              </div>
              <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
              <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short summary" required />
              <textarea className={`${fieldClass} min-h-48`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Main content, details, notes, or description" required />
            </div>

            {created ? (
              <div className="mt-5 border border-emerald-700 bg-emerald-50 p-4 text-emerald-900">
                <p className="flex items-center gap-2 text-sm font-extrabold"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
              </div>
            ) : null}

            <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 bg-[var(--slot4-accent)] px-6 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-[#bd3c20]">
              <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
            </button>
          </form>
        </section>
      </main>
    </EditableSiteShell>
  )
}
