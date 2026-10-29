import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { contactEmail } from '../constants/data';

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="shell max-w-[720px]">
        <FadeIn>
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-5 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            What we do with what you tell us.
          </h1>
          <div className="mt-10 space-y-6 text-[16px] leading-[1.8] text-mist">
            <p>
              When you apply for coaching we ask for your name, email address, an optional phone number and a short description of what you’d like to change. That is the only information we collect.
            </p>
            <p>
              We use it for one purpose: to read your application and reply to you. It is stored securely, seen only by Ashley and Coralie, and never sold, shared or used in marketing.
            </p>
            <p>
              Everything discussed in a coaching session is confidential. If you would like your application or session notes deleted, email us and we will remove them.
            </p>
            <p>
              We never ask for payment details through this website. Any investment in a programme is agreed directly with your coach after your free call.
            </p>
          </div>
          <div className="mt-12 border-t border-ink/15 pt-8">
            <p className="text-[13px] uppercase tracking-[0.16em] text-mist/60">
              Questions
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="link-quiet mt-3 inline-block break-all font-display text-[20px] text-ink"
            >
              {contactEmail}
            </a>
          </div>
          <Link to="/" className="btn btn-line mt-10">
            Back to the site
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

