import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { programmeDetails, contactEmail } from '../constants/data';

export default function ProgrammePage({ programmeKey }) {
  const programme = programmeDetails[programmeKey];

  if (!programme) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* Programme Hero */}
      <section className="overflow-hidden bg-cloud pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="shell grid items-center gap-12 md:grid-cols-2 md:gap-12">
          <div>
            <FadeIn>
              <p className="eyebrow">{programme.kicker}</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(1.95rem,4.2vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                {programme.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.8] text-mist">
                {programme.intro}
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-2">
                {programme.meta.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-ink/15 bg-paper px-3.5 py-1.5 font-heading text-[11px] font-semibold tracking-wide text-ink/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to={`/apply?programme=${programme.key}`}
                  className="btn btn-ink"
                >
                  Apply for coaching
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link to="/#coaches" className="btn btn-line">
                  Meet the coach
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn delay={0.14} y={30}>
              <div className="relative overflow-hidden rounded-[26px] bg-paper shadow-[0_30px_60px_-35px_rgba(11,28,61,0.45)]">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={programme.image}
                    alt={programme.imageAlt}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = programme.fallbackImage;
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 left-4 rounded-2xl bg-paper px-5 py-4 shadow-[0_20px_45px_-25px_rgba(11,28,61,0.5)] md:-bottom-6 md:left-6">
                <p className="font-display text-[15px] font-extrabold leading-none text-ink">
                  {programme.coach}
                </p>
                <p className="mt-1.5 font-heading text-[9.5px] font-bold uppercase tracking-[0.16em] text-gold-deep">
                  {programme.coachRole}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Honest Questions / Fit Checklist */}
      <section className="border-t border-ink/10 py-24 md:py-28">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="md:sticky md:top-28">
                <p className="eyebrow">Honest questions</p>
                <h2 className="mt-6 font-display text-[clamp(1.7rem,2.9vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.01em]">
                  Does any of this sound familiar?
                </h2>
                <p className="mt-5 max-w-[30ch] text-[15px] leading-relaxed text-mist">
                  You don’t need to tick every box. Two is usually enough to know.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-12">
              {programme.fit.map((group, groupIndex) => (
                <FadeIn key={group.heading} delay={groupIndex * 0.08}>
                  <div>
                    <h3 className="font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-ink/60">
                      {group.heading}
                    </h3>
                    <ul className="mt-5 border-t border-ink/15">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-4 border-b border-ink/15 py-4 text-[16px] leading-[1.6] text-ink/85"
                        >
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-cloud py-20 md:py-28">
        <div className="shell">
          <FadeIn>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">What changes</p>
                <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                  What we’ll actually work on.
                </h2>
              </div>
              <p className="max-w-[32ch] text-[15px] leading-relaxed text-mist md:text-right">
                Not a syllabus. A set of shifts we keep returning to until they hold.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {programme.outcomes.map((outcome, index) => (
              <FadeIn key={outcome.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-ink/10 bg-paper p-7 md:p-8">
                  <span className="font-display text-[13px] font-extrabold text-gold-deep">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[18px] font-extrabold leading-snug tracking-[-0.015em]">
                    {outcome.title}
                  </h3>
                  <p className="mt-2.5 max-w-[40ch] text-[14.5px] leading-[1.75] text-mist">
                    {outcome.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Path Section */}
      <section className="py-24 md:py-28">
        <div className="shell grid gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="md:sticky md:top-28">
                <p className="eyebrow">The shape of it</p>
                <h2 className="mt-6 font-display text-[clamp(1.7rem,2.9vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.01em]">
                  How the six weeks run.
                </h2>
                <p className="mt-5 max-w-[30ch] text-[15px] leading-relaxed text-mist">
                  These are the stages, not a script. Every programme is written around the person in front of us.
                </p>
                <Link
                  to={`/apply?programme=${programme.key}`}
                  className="btn btn-ink mt-8"
                >
                  Start your application
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-ink/15">
              {programme.path.map((step, index) => (
                <FadeIn key={step.title} delay={index * 0.06}>
                  <div className="grid gap-3 border-b border-ink/15 py-7 sm:grid-cols-[64px_1fr] sm:gap-6">
                    <span className="font-display text-[13px] font-extrabold text-gold-deep">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[14px] font-bold leading-snug tracking-[0.04em]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-[15.5px] leading-[1.75] text-mist">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="bg-ink py-24 text-paper md:py-28">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <FadeIn>
              <blockquote>
                <p className="font-display text-[clamp(1.2rem,2.3vw,1.85rem)] font-normal leading-[1.45] tracking-[0em]">
                  <span className="text-gold">“</span>
                  {programme.quote.text}
                  <span className="text-gold">”</span>
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />
                  <div>
                    <p className="text-[14px]">{programme.quote.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-paper/40">
                      {programme.quote.note}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <FadeIn delay={0.12}>
              <div className="md:border-l md:border-paper/15 md:pl-8">
                <p className="text-[15px] leading-[1.8] text-paper/65">
                  “{programme.secondaryQuote.text}”
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-paper/40">
                  {programme.secondaryQuote.name} · {programme.secondaryQuote.note}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cross-Programme Recommendation */}
      <section className="border-t border-ink/10 py-20 md:py-24">
        <div className="shell grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <FadeIn>
              <p className="eyebrow text-mist/70">{programme.cross.label}</p>
              <Link
                to={programme.cross.to}
                className="group mt-5 inline-flex items-baseline gap-4 font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-[0em] text-ink"
              >
                {programme.cross.title}
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-gold-deep transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
              </Link>
            </FadeIn>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <FadeIn delay={0.1}>
              <Link to="/apply" className="btn btn-gold w-full">
                Apply for coaching
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-ink py-16 md:py-20">
        <div className="shell flex flex-col gap-9 md:flex-row md:items-center md:justify-between md:gap-12">
          <FadeIn>
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold text-ink">
                <CalendarDays className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div>
                <p className="eyebrow text-gold">Free 20-minute call</p>
                <h2 className="mt-3 max-w-[24ch] font-display text-[clamp(1.6rem,2.8vw,2.3rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-paper">
                  Book a free discovery call.
                </h2>
                <p className="mt-3 max-w-[46ch] text-[14.5px] leading-[1.75] text-paper/60">
                  Three sentences about where you are is enough to start. No pitch, no obligation — just a real conversation about what you want to change.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="md:text-right">
              <Link to="/apply" className="btn btn-gold">
                Book now
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 block break-all text-[13px] text-paper/50 transition-colors hover:text-paper"
              >
                {contactEmail}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

