import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { contactEmail } from '../constants/data';

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-ink text-paper">
      <div className="shell grid gap-11 py-16 md:grid-cols-12 md:gap-8 md:py-20">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-[18px] font-extrabold leading-none text-ink">
              R
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[19px] font-extrabold tracking-[-0.02em] text-paper">
                Rise
              </span>
              <span className="mt-1 font-heading text-[8.5px] font-semibold uppercase tracking-[0.18em] text-paper/50">
                Management & Coaching
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-[34ch] text-[14.5px] leading-[1.8] text-paper/55">
            One-to-one coaching for the words you want to write and the relationships you want to come home to. Founded in London, working worldwide.
          </p>
          <Link to="/apply" className="btn btn-gold mt-7">
            Book a free call
          </Link>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-paper/45">Explore</p>
          <ul className="mt-5 space-y-2.5 text-[14.5px] text-paper/65">
            <li>
              <Link to="/" className="transition-colors hover:text-paper">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#programmes" className="transition-colors hover:text-paper">
                Programmes
              </Link>
            </li>
            <li>
              <Link to="/#about" className="transition-colors hover:text-paper">
                About
              </Link>
            </li>
            <li>
              <Link to="/#coaches" className="transition-colors hover:text-paper">
                Coaches
              </Link>
            </li>
            <li>
              <Link to="/#faq" className="transition-colors hover:text-paper">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/45">Programmes</p>
          <ul className="mt-5 space-y-2.5 text-[14.5px] text-paper/65">
            <li>
              <Link to="/writing-coaching" className="transition-colors hover:text-paper">
                Writing coaching
              </Link>
            </li>
            <li>
              <Link to="/relationship-coaching" className="transition-colors hover:text-paper">
                Relationship & intimacy
              </Link>
            </li>
            <li>
              <Link to="/apply" className="transition-colors hover:text-paper">
                Free discovery call
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="transition-colors hover:text-paper">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/45">Contact</p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-5 flex items-start gap-2 break-all text-[14.5px] text-paper/65 transition-colors hover:text-paper"
          >
            {contactEmail}
            <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          </a>
          <p className="mt-4 text-[13.5px] leading-[1.8] text-paper/45">
            Based in London.
            <br />
            Sessions online via Zoom, worldwide.
          </p>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="shell flex flex-col gap-3 py-6 text-[12.5px] text-paper/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Rise Management & Coaching
          </span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-paper">
              Privacy Policy
            </Link>
            <Link to="/apply" className="transition-colors hover:text-paper">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

