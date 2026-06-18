import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const distributionRoute = SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution'

  return (
    <EditableSiteShell>
      <main className="bg-white text-[#172235]">
        <section className="bg-[#12356d] text-white">
          <div className="mx-auto grid max-w-[1168px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-0 lg:py-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl">
                About {SITE_CONFIG.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/82">{pagesContent.about.description}</p>
            </div>
            <div className="self-end border-l-4 border-[var(--slot4-accent)] bg-white/8 p-7">
              <p className="text-sm font-semibold leading-7 text-white/80">
                We organize media, marketing, publishing, branding, business, and communication updates into a public experience that is easy to read and search.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1168px] px-4 py-14 sm:px-6 lg:px-0">
          <div className="grid gap-9 lg:grid-cols-[1.25fr_.75fr]">
            <article className="border-t-[5px] border-[#c9c9c9] pt-7">
              <h2 className="text-3xl font-extrabold">Clear publishing for public updates</h2>
              <div className="article-content mt-7">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={distributionRoute} className="inline-flex items-center gap-2 bg-[var(--slot4-accent)] px-6 py-3 text-sm font-bold text-white">Distribution <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-[#12356d] px-6 py-3 text-sm font-bold text-[#12356d]">Contact</Link>
              </div>
            </article>
            <aside className="grid gap-4">
              {pagesContent.about.values.map((value) => (
                <div key={value.title} className="border border-black/10 bg-[#f5f7fb] p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-[var(--slot4-accent)]"><CheckCircle2 className="h-5 w-5" /><span className="text-xs font-extrabold uppercase tracking-[0.18em]">Value</span></div>
                  <h3 className="mt-4 text-2xl font-extrabold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#526071]">{value.description}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
