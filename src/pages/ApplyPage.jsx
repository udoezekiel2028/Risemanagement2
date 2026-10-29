import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { contactEmail } from '../constants/data';

const programmeOptions = [
  { value: 'writing', label: 'Writing coaching' },
  { value: 'relationships', label: 'Relationships & intimacy' },
  { value: 'not_sure', label: 'Not sure yet' },
];

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const initialProgramme = searchParams.get('programme');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programme: programmeOptions.some((p) => p.value === initialProgramme)
      ? initialProgramme
      : 'not_sure',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'
  const [error, setError] = useState('');

  useEffect(() => {
    const prog = searchParams.get('programme');
    if (programmeOptions.some((p) => p.value === prog)) {
      setFormData((prev) => ({ ...prev, programme: prog }));
    }
  }, [searchParams]);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      return setError('Please tell us your name.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return setError('Please check your email address.');
    }
    if (formData.message.trim().length < 10) {
      return setError('A sentence or two about where you are is enough to start.');
    }

    setStatus('sending');

    // Simulate sending application securely (or store locally)
    setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem('rise_applications') || '[]');
        saved.push({
          ...formData,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('rise_applications', JSON.stringify(saved));
      } catch (err) {
        // ignore localStorage error if restricted
      }
      setStatus('sent');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  if (status === 'sent') {
    const firstName = formData.name.trim().split(' ')[0] || formData.name;
    return (
      <section className="pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="shell max-w-[720px]">
          <FadeIn>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
              <Check className="h-6 w-6" strokeWidth={2} />
            </span>
            <p className="eyebrow mt-8">Application received</p>
            <h1 className="mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
              Thank you, {firstName}.
            </h1>
            <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.8] text-mist">
              Your application is with us. We read every form personally — you’ll hear back within two working days, either way.
            </p>

            <div className="mt-10 border-t border-ink/15">
              {[
                {
                  t: 'We read it',
                  b: 'One of us — not an assistant — reads what you wrote.',
                },
                {
                  t: 'We reply',
                  b: 'Within two working days, to arrange a free twenty-minute call if it feels like a fit.',
                },
                {
                  t: 'We meet',
                  b: 'A relaxed Zoom conversation. No pitch, no obligation.',
                },
              ].map((step, index) => (
                <div
                  key={step.t}
                  className="flex gap-5 border-b border-ink/15 py-5"
                >
                  <span className="font-display text-[13px] font-extrabold text-gold-deep">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-display text-[19px]">{step.t}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-mist">
                      {step.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/" className="btn btn-ink">
                Back to the site
              </Link>
              <a href={`mailto:${contactEmail}`} className="btn btn-line">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                Email us directly
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="shell grid gap-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <FadeIn>
            <p className="eyebrow">Apply</p>
            <h1 className="mt-5 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
              Tell us where you are.
            </h1>
            <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.8] text-mist">
              Three minutes, and completely confidential. We read every application ourselves and reply within two working days — whether or not we’re the right fit.
            </p>
            <div className="mt-10 space-y-5 border-t border-ink/15 pt-8">
              {[
                'No obligation, no sales call',
                'Sessions online, worldwide',
                'Your details are never shared',
              ].map((point) => (
                <p
                  key={point}
                  className="flex items-center gap-3 text-[14px] text-ink/75"
                >
                  <Check className="h-4 w-4 text-gold-deep" strokeWidth={2.5} />
                  {point}
                </p>
              ))}
            </div>
            <p className="mt-10 text-[13px] leading-relaxed text-mist/70">
              Prefer email?{' '}
              <a href={`mailto:${contactEmail}`} className="link-quiet text-ink">
                {contactEmail}
              </a>
            </p>
          </FadeIn>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink/10 bg-cloud p-7 md:p-10"
            >
              <div className="grid gap-7">
                <div>
                  <label className="lbl" htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    className="field"
                    value={formData.name}
                    onChange={handleChange('name')}
                    placeholder="First and last name"
                    autoComplete="name"
                  />
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label className="lbl" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="field"
                      value={formData.email}
                      onChange={handleChange('email')}
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="lbl" htmlFor="phone">
                      Phone <span className="normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      className="field"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      placeholder="+44"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <span className="lbl">Which coaching?</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {programmeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        aria-pressed={formData.programme === opt.value}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, programme: opt.value }))
                        }
                        className={`rounded-full border px-4 py-2 text-[12.5px] transition-all duration-300 ${
                          formData.programme === opt.value
                            ? 'border-ink bg-ink text-paper'
                            : 'border-ink/20 text-ink/70 hover:border-ink/50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="lbl" htmlFor="message">
                    Where are you right now?
                  </label>
                  <textarea
                    id="message"
                    className="field min-h-[110px] resize-y"
                    value={formData.message}
                    onChange={handleChange('message')}
                    placeholder="What you'd like to change, and what's been stopping you."
                  />
                </div>

                {error && (
                  <p className="text-[13.5px] leading-relaxed text-destructive">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-ink w-full"
                >
                  {status === 'sending' ? 'Sending…' : 'Send my application'}
                  {status !== 'sending' && (
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  )}
                </button>

                <p className="text-[12px] leading-relaxed text-mist/70">
                  By applying you agree to us holding your details so we can reply. We never share them, and you can ask us to delete them at any time — see our{' '}
                  <Link to="/privacy" className="link-quiet text-ink">
                    privacy note
                  </Link>
                  .
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

