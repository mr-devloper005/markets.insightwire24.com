import Link from 'next/link'
import { ArrowRight, BarChart3, Eye, Megaphone, Play, Search, ShieldCheck, Sparkles, Star, Wand2 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, HorizontalPostCard, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const reasons = [
  { icon: Megaphone, title: 'True Multichannel Amplification', text: 'Extend every announcement across channels built for discovery, visibility, and useful reader context.', color: 'bg-[#669df6]' },
  { icon: Search, title: 'Unmatched Discoverability', text: 'Help audiences find the updates, ideas, and resources that are most relevant to their work.', color: 'bg-[#0aa39a]' },
  { icon: Sparkles, title: 'Innovation in One Platform', text: 'Plan, publish, and organize media content with a clean public experience for every visitor.', color: 'bg-[#b45ff0]' },
  { icon: Eye, title: 'Maximum Visibility', text: 'Surface fresh releases, topic collections, and featured stories in layouts designed for scanning.', color: 'bg-[#2d5bbf]' },
  { icon: ShieldCheck, title: 'Most Trusted Source', text: 'Keep messaging clear, accessible, and practical without overclaiming what the site represents.', color: 'bg-[#ec529b]' },
  { icon: Star, title: 'Premium Service and Guidance', text: 'Give readers structured pages, safer fallbacks, and a polished route from headline to detail.', color: 'bg-[#ff5a24]' },
]

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ') || 'Unmatched Visibility. Powerful Results.'

  return (
    <>
      <section className="slot4-hero-grid relative overflow-hidden text-white">
        <div className="slot4-wave-lines pointer-events-none absolute -right-20 -top-12 h-[115%] w-[48%]" />
        <div className={`${dc.shell.section} grid min-h-[410px] items-center gap-10 py-10 lg:grid-cols-[.82fr_1.18fr]`}>
          <div className="relative z-10">
            <h1 className={`${dc.type.heroTitle} max-w-xl`}>{heroTitle}</h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white">
              Share stories, launches, commentary, and public updates through a polished media hub built for reach across channels.
            </p>
            <div className="mt-7 flex flex-wrap gap-5">
              <Link href={primaryRoute} className={dc.button.accent}>Send a Press Release</Link>
              <Link href="/contact" className={dc.button.secondary}>Request a Demo</Link>
            </div>
          </div>

          <Link href={lead ? postHref(primaryTask, lead, primaryRoute) : primaryRoute} className="slot4-hero-screen group relative z-10 mx-auto w-full max-w-[580px]">
            <div className="rounded-sm bg-white p-4 text-[#172235] shadow-[0_26px_70px_rgba(0,0,0,.32)]">
              <div className="grid gap-3 lg:grid-cols-[150px_1fr]">
                <div className="hidden border-r border-black/10 pr-3 text-xs lg:block">
                  <div className="h-6 w-24 bg-[#eef3fb]" />
                  <div className="mt-4 grid gap-2">
                    {['Trending topics', 'Your drafts', 'Campaign builder', 'Content', 'Reports'].map((item, index) => <span key={item} className={index === 0 ? 'bg-[#12356d] px-2 py-1 text-white' : 'px-2 py-1 text-[#5c6675]'}>{item}</span>)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#667085]">Trending topics</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {(lead ? [lead, ...posts.slice(1, 3)] : posts.slice(0, 3)).map((post) => (
                      <div key={post.id || post.slug} className="bg-[#f7f1ff] p-3">
                        <p className="line-clamp-3 text-xs font-bold">{post.title}</p>
                        <span className="mt-3 inline-flex text-[10px] font-bold text-[#4e3aa8]">Create press release</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto -mt-1 flex max-w-[500px] items-center gap-3 bg-[#57aeea] px-4 py-2 text-white">
              <Play className="slot4-pulse-play h-5 w-5 fill-white" />
              <span className="font-bold">1:24</span>
              <span className="h-1 flex-1 rounded-full bg-white/65" />
              <span className="text-xs font-extrabold uppercase">HD</span>
            </div>
          </Link>
        </div>
      </section>
      <div className="bg-[#e9eaec]">
        <div className={`${dc.shell.section} py-5 text-center text-sm font-semibold text-[#12356d]`}>
          Big news and useful updates are collected here for communicators, publishers, marketers, and readers. <Link href={primaryRoute} className="ml-2 bg-white px-3 py-2 text-xs">Learn More</Link>
        </div>
      </div>
    </>
  )
}

export function EditableStoryRail(_props: HomeSectionProps) {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="slot4-section-heading">
          <h2 className="text-4xl font-extrabold text-[#2a3038]">What Sets {SITE_CONFIG.name} Apart</h2>
        </div>
        <p className="mt-3 text-lg text-[#2d3748]">Top reasons to work with a focused media distribution experience</p>
        <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="slot4-card-sheen min-h-[285px] rounded-md border border-black/10 bg-white p-8 shadow-[0_3px_10px_rgba(16,24,40,.12)] transition hover:-translate-y-1">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${item.color} text-white`}><Icon className="h-6 w-6" /></span>
                <h3 className="mt-7 text-lg font-extrabold text-[#172235]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#1f2937]">{item.text}</p>
                <Link href="/about" className="mt-4 inline-flex text-sm font-semibold text-[#003b77]">Learn More</Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featurePosts = posts.slice(0, 3)
  if (!featurePosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} pb-14`}>
        <div className="slot4-section-heading">
          <h2 className="text-4xl font-extrabold text-[#2a3038]">Featured Solutions</h2>
        </div>
        <p className="mt-3 text-lg text-[#2d3748]">Explore tools and stories that help you plan smarter, create faster, and amplify your message.</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          {featurePosts.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group block">
              <div className={`slot4-card-sheen flex aspect-[1.05/1] items-center justify-center overflow-hidden rounded-md ${index === 1 ? 'bg-[#163a76]' : 'bg-[#eaf2fd]'} p-10`}>
                <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full rounded-sm object-cover shadow-sm transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-[#172235]">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#263241]">{getEditableExcerpt(post, 170)} <span className="font-bold text-[#003b77]">Learn more.</span></p>
            </Link>
          ))}
        </div>
        <Link href={primaryRoute} className="mt-8 flex w-full items-center justify-center border border-black/35 py-3 text-sm text-[#374151]">Explore our platform</Link>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts
  const lead = source[0]
  const side = source.slice(1, 5)
  const topics = posts.slice(5, 14)
  if (!lead) return null
  const railPosts = [...posts.slice(0, 8), ...posts.slice(0, 8)]

  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-10`}>
        <div className="slot4-section-heading">
          <h2 className="text-4xl font-extrabold text-[#2a3038]">Featured Stories</h2>
        </div>
        <p className="mt-3 text-lg text-[#2d3748]">Highlights from the latest releases</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.92fr]">
          <Link href={postHref(primaryTask, lead, primaryRoute)} className="group">
            <div className="flex min-h-[315px] items-center justify-center border border-black/15 bg-white p-8">
              <img src={getEditablePostImage(lead)} alt={lead.title} className="max-h-[190px] max-w-[72%] object-contain transition duration-500 group-hover:scale-105" />
            </div>
            <p className="mt-7 text-sm uppercase text-[#172235]">Latest update</p>
            <h3 className="mt-2 text-xl font-extrabold leading-snug text-[#172235]">{lead.title}</h3>
            <p className="mt-4 text-sm leading-6 text-[#263241]">{getEditableExcerpt(lead, 210)}</p>
          </Link>
          <div>
            {side.map((post) => <HorizontalPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
        <Link href={primaryRoute} className="mt-7 flex w-full items-center justify-center border border-black/35 py-3 text-sm text-[#374151]">Browse All News Stories</Link>
      </div>

      <div className={`${dc.shell.section} grid gap-8 py-12 lg:grid-cols-[1.65fr_.72fr]`}>
        <div>
          <div className="slot4-section-heading">
            <h2 className="text-4xl font-extrabold text-[#2a3038]">Trending Topics</h2>
          </div>
          <p className="mt-3 text-lg text-[#2d3748]">Track the topics taking shape and powering decisions around the world</p>
          <div className="mt-6 grid gap-7 md:grid-cols-3">
            {topics.slice(0, 3).map((topic) => (
              <div key={topic.id || topic.slug}>
                <Link href={postHref(primaryTask, topic, primaryRoute)} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#12356d]">
                    <img src={getEditablePostImage(topic)} alt={topic.title} className="h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105" />
                    <h3 className="absolute inset-0 flex items-center justify-center p-4 text-center text-lg font-extrabold text-white">{getEditableExcerpt(topic, 34) || topic.title}</h3>
                  </div>
                </Link>
                {topics.slice(3, 6).map((post, index) => (
                  <Link key={`${topic.id}-${post.id}-${index}`} href={postHref(primaryTask, post, primaryRoute)} className="mt-4 block text-sm leading-6 text-[#111827]">
                    <span className="block text-[#172235]">0{8 + index}:00 ET</span>{post.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <Link href={primaryRoute} className="mt-8 flex w-full items-center justify-center border border-black/35 py-3 text-sm text-[#374151]">View All Trending Topics</Link>
        </div>
        <aside>
          <div className="slot4-section-heading">
            <h2 className="text-4xl font-extrabold text-[#2a3038]">Browse News</h2>
          </div>
          <p className="mt-3 text-lg leading-7 text-[#2d3748]">Find news by industry or search for topics that matter most to you</p>
          <div className="mt-6 grid">
            {['News in Focus', 'Auto & Transportation', 'Consumer Products & Retail', 'Energy', 'Entertainment', 'Financial Services & Investing', 'General Business', 'Health', 'People & Culture', 'Policy & Public Interest', 'Sports'].map((item) => (
              <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className="border-b border-black/35 py-2 text-sm text-[#111827] hover:text-[var(--slot4-accent)]">{item}</Link>
            ))}
          </div>
          <Link href="/search" className="mt-10 flex w-full items-center justify-center border border-black/35 py-3 text-sm text-[#374151]">Browse All Sectors & Topics</Link>
        </aside>
      </div>

      {railPosts.length ? (
        <div className="overflow-hidden bg-[#f5f7fb] py-10">
          <div className={`${dc.shell.section}`}>
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-extrabold text-[#2a3038]">Latest on the wire</h2>
              <Link href={primaryRoute} className="inline-flex items-center gap-2 text-sm font-bold text-[#003b77]">View all <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="slot4-auto-rail">
              <div className="slot4-auto-track flex gap-6">
                {railPosts.map((post, index) => <RailPostCard key={`${post.id || post.slug}-${index}`} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index % Math.max(posts.length, 1)} />)}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} grid gap-8 py-14 lg:grid-cols-2`}>
        <div>
          <div className="slot4-section-heading">
            <h2 className="text-4xl font-extrabold text-[#2a3038]">Resources for Journalists</h2>
          </div>
          <div className="mt-6 grid gap-7 sm:grid-cols-[1fr_1fr]">
            <div className="flex min-h-48 items-center justify-center bg-[#f3f5f8] p-8">
              <div className="rounded-md border-[10px] border-[#5d5d5d] bg-[#dff8f8] p-5 text-center font-extrabold text-[#e1b14e]">NEW STORY IDEA</div>
            </div>
            <div>
              <h3 className="font-extrabold">Meeting a Deadline?</h3>
              <p className="mt-3 text-sm leading-6 text-[#263241]">Get story ideas in your inbox. Browse recent updates, useful references, and public media resources in one place.</p>
            </div>
          </div>
          <Link href="/search" className="mt-7 flex w-full items-center justify-center border border-black/35 py-3 text-sm text-[#374151]">Visit {SITE_CONFIG.name} for Journalists</Link>
        </div>
        <div>
          <div className="slot4-section-heading">
            <h2 className="text-4xl font-extrabold text-[#2a3038]">Resources for Communicators</h2>
          </div>
          <div className="mt-5 grid gap-0">
            {[
              ['WHITE PAPERS', 'State of the Media Report', Wand2],
              ['VIDEOS & WEBINARS', 'From Keywords to Conversations', BarChart3],
              ['WHITE PAPERS', 'A Beginner’s Guide to Creating an Effective Release', Sparkles],
            ].map(([label, title, Icon]) => {
              const ResourceIcon = Icon as typeof Wand2
              return (
                <Link key={`${label}-${title}`} href="/search" className="grid grid-cols-[1fr_215px] gap-5 border-b border-black/20 py-5">
                  <div>
                    <p className="text-sm uppercase text-[#4b5563]">{label as string}</p>
                    <h3 className="mt-1 text-sm font-extrabold text-[#111827]">{title as string}</h3>
                  </div>
                  <div className="flex min-h-24 items-center justify-center bg-[#e8effc] text-[#12356d]"><ResourceIcon className="h-9 w-9" /></div>
                </Link>
              )
            })}
          </div>
          <Link href="/search" className="mt-5 flex w-full items-center justify-center border border-black/35 py-3 text-sm text-[#374151]">Browse All Resources</Link>
        </div>
      </div>
    </section>
  )
}
