import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Accordion from '@radix-ui/react-accordion';
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Feather,
  HeartHandshake,
  Quote,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import {
  images,
  fallbackImages,
  contactEmail,
  coaches,
  stats,
  whyChooseUsBullets,
  howItWorksSteps,
  testimonials,
  faqs,
  programmesOverview,
} from '../constants/data';

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('');
}

export default function HomePage() {
  const scrollRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 380, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-paper pt-28 md:pt-32">
        <div className="shell grid items-center gap-12 pb-16 md:grid-cols-2 md:gap-12 md:pb-24 lg:gap-16">
          <div>
            <FadeIn>
              <p className="eyebrow">Coaching for writers & relationships</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
                Better words. Braver love. A life that fits.
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-[52ch] text-[16.5px] leading-[1.8] text-mist">
                One-to-one coaching for two kinds of brave work: the words you want to put into the world, and the relationships you want to come home to. Six focused weeks with a specialist who remembers everything you tell them.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/#programmes" className="btn btn-ink">
                  Explore programmes
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link to="/#how-it-works" className="btn btn-line">
                  How it works
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.32}>
              <div className="mt-10 flex items-center gap-4 border-t border-ink/10 pt-7">
                <div className="flex -space-x-2.5">
                  {['AL', 'CF', 'MP'].map((initials) => (
                    <span
                      key={initials}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper bg-gold-tint font-heading text-[10px] font-bold text-ink"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] leading-snug text-mist">
                  <span className="font-heading font-bold text-ink">
                    Hundreds of clients coached
                  </span>
                  <br />
                  since 2018, across 12 countries
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <FadeIn delay={0.14} y={30}>
              <div className="relative overflow-hidden rounded-[26px] bg-cloud">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={images.hero}
                    alt="A writer holding a notebook, photographed in warm natural light"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImages.hero;
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-paper px-5 py-4 shadow-[0_24px_50px_-30px_rgba(11,28,61,0.55)] md:-bottom-7 md:left-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-tint text-ink">
                  <Award className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-[17px] font-extrabold leading-none text-ink">
                    6 weeks
                  </p>
                  <p className="mt-1.5 font-heading text-[9.5px] font-semibold uppercase tracking-[0.16em] text-mist">
                    one-to-one programme
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-ink">
        <div className="shell grid grid-cols-2 gap-y-9 py-12 md:grid-cols-4 md:gap-y-0 md:py-14">
          {stats.map((stat) => (
            <div
              key={stat.figure}
              className="md:border-l md:border-paper/15 md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <p className="font-display text-[26px] font-extrabold leading-none tracking-[-0.02em] text-gold">
                {stat.figure}
              </p>
              <p className="mt-2.5 max-w-[22ch] text-[12.5px] leading-relaxed text-paper/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes Section */}
      <section id="programmes" className="scroll-mt-24 bg-cloud py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <FadeIn>
              <p className="eyebrow">Our programmes</p>
              <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                Two ways to rise. Same six weeks.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-[36ch] text-[15px] leading-relaxed text-mist md:text-right">
                Every programme is one-to-one and built around you. Choose the door that feels closest — we’ll work out the rest together.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programmesOverview.map((item, index) => {
              const IconComponent =
                item.icon === 'Feather'
                  ? Feather
                  : item.icon === 'HeartHandshake'
                  ? HeartHandshake
                  : Compass;

              return (
                <FadeIn key={item.title} delay={0.08 * index}>
                  <Link
                    to={item.to}
                    className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_30px_50px_-35px_rgba(11,28,61,0.55)] md:p-8"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-tint text-ink">
                      <IconComponent className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-6 font-display text-[19px] font-extrabold leading-snug tracking-[-0.015em]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      {item.coach}
                    </p>
                    <p className="mt-4 flex-1 text-[14.5px] leading-[1.75] text-mist">
                      {item.body}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 font-heading text-[12.5px] font-bold text-ink">
                      Learn more
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-20 md:py-28">
        <div className="shell grid items-center gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <FadeIn>
              <div className="relative">
                <div className="overflow-hidden rounded-[26px] bg-cloud">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={images.founders}
                      alt="Ashley and Coralie in conversation over tea in a sunlit London kitchen"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImages.founders;
                      }}
                    />
                  </div>
                </div>
                <div className="absolute -bottom-5 right-4 rounded-2xl bg-gold px-5 py-4 text-ink md:right-6 md:px-6">
                  <p className="font-display text-[22px] font-extrabold leading-none">
                    100%
                  </p>
                  <p className="mt-1.5 font-heading text-[9.5px] font-bold uppercase tracking-[0.16em]">
                    personal attention
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-6">
            <FadeIn delay={0.08}>
              <p className="eyebrow">Why choose us</p>
              <h2 className="mt-5 max-w-[26ch] font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                We don’t just coach. We help you build something that holds.
              </h2>
              <p className="mt-5 max-w-[52ch] text-[15.5px] leading-[1.8] text-mist">
                Rise began in 2018 with two friends and one belief: everyone can rise. Ashley is an author and writing coach; Coralie is a relationship and intimacy coach. Both have lived the complicated journeys they now help others navigate — and you can feel it in how down to earth, and how unshockable, they are.
              </p>
              <ul className="mt-7 space-y-3.5">
                {whyChooseUsBullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[15px] text-ink/85"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-tint text-ink">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link to="/#coaches" className="btn btn-ink mt-8">
                Meet the coaches
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="scroll-mt-24 bg-cloud py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <FadeIn>
              <p className="eyebrow">How it works</p>
              <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                From stuck to started, in four honest steps.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link to="/apply" className="btn btn-ink">
                Start with an application
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <FadeIn key={step.no} delay={0.06 * index}>
                <div className="h-full rounded-2xl border border-ink/10 bg-paper p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-[13px] font-extrabold text-gold-deep">
                      {step.no}
                    </span>
                    <span className="h-px flex-1 bg-ink/10" />
                  </div>
                  <h3 className="mt-4 font-display text-[16.5px] font-extrabold leading-snug tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.75] text-mist">
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="scroll-mt-24 py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <FadeIn>
              <p className="eyebrow">The coaches</p>
              <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                Two London specialists. No generalists.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-[34ch] text-[15px] leading-relaxed text-mist md:text-right">
                You work with one coach for the whole programme — the same person, every week.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[coaches.ashley, coaches.coralie].map((coach, index) => (
              <FadeIn key={coach.name} delay={0.08 * index}>
                <article className="flex h-full flex-col gap-6 rounded-2xl border border-ink/10 bg-paper p-6 sm:flex-row sm:items-start sm:gap-7">
                  <div className="w-full sm:w-[190px] sm:shrink-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-cloud sm:aspect-[4/5]">
                      <span className="absolute inset-0 flex items-center justify-center font-display text-[56px] font-extrabold text-ink/15">
                        {coach.name.charAt(0)}
                      </span>
                      <img
                        src={coach.portrait}
                        alt={coach.name}
                        className="relative h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = coach.fallbackPortrait;
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-gold-deep">
                      {coach.role}
                    </p>
                    <h3 className="mt-2.5 font-display text-[21px] font-extrabold leading-tight tracking-[-0.02em]">
                      {coach.name}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.75] text-mist">
                      {coach.short}
                    </p>
                    <p className="mt-4 text-[12.5px] font-medium text-ink/65">
                      {coach.credit}
                    </p>
                    <Link
                      to={coach.link}
                      className="mt-5 inline-flex items-center gap-2 font-heading text-[12.5px] font-bold text-ink"
                    >
                      Work with {coach.name.split(' ')[0]}
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-cloud py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <FadeIn>
              <p className="eyebrow">Client stories</p>
              <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                What our clients say.
              </h2>
            </FadeIn>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTestimonials(-1)}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials(1)}
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="mt-11 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, index) => (
              <FadeIn
                key={item.name}
                delay={index * 0.06}
                className="w-[86%] shrink-0 snap-start sm:w-[380px] lg:w-[calc(33.333%-1rem)]"
              >
                <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-7">
                  <Quote className="h-7 w-7 text-gold" strokeWidth={1.75} />
                  <blockquote className="mt-5 flex-1 text-[15px] leading-[1.8] text-ink/80">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-tint font-heading text-[11px] font-bold text-ink">
                      {getInitials(item.name)}
                    </span>
                    <div>
                      <p className="font-heading text-[13.5px] font-bold text-ink">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[12px] text-mist">{item.place}</p>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-24 py-20 md:py-28">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="md:sticky md:top-28">
                <p className="eyebrow">Questions</p>
                <h2 className="mt-5 font-display text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                  The things people ask before they apply.
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-mist">
                  Still unsure? Write to us — we answer our own email.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="link-quiet mt-4 inline-block text-[14.5px] font-semibold text-ink"
                >
                  {contactEmail}
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <Accordion.Root type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <Accordion.Item
                    key={faq.q}
                    value={`item-${index}`}
                    className="rounded-xl border border-ink/10 bg-cloud px-5"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left font-display text-[15px] font-bold leading-snug tracking-[-0.01em] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        <span>{faq.q}</span>
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-mist" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden">
                      <p className="max-w-[62ch] pb-5 text-[14.5px] leading-[1.75] text-mist">
                        {faq.a}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
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

