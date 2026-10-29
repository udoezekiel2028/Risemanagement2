import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../constants/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_30px_-24px_rgba(11,28,61,0.6)]' : ''
        }`}
      >
        <div
          className={`shell flex items-center justify-between border-b border-ink/10 transition-all duration-300 ${
            scrolled ? 'h-[68px]' : 'h-[76px]'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-[18px] font-extrabold leading-none text-ink">
              R
            </span>
            <span className="flex flex-col justify-center leading-none">
              <span className="font-display text-[19px] font-extrabold tracking-[-0.02em] text-ink">
                Rise
              </span>
              <span className="mt-1 font-heading text-[8.5px] font-semibold uppercase tracking-[0.18em] text-mist">
                Management & Coaching
              </span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-heading text-[13px] font-semibold text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/apply"
              className="btn btn-gold !hidden !h-[42px] !px-5 sm:!inline-flex"
            >
              Book a free call
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-paper transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="shell flex h-[76px] items-center justify-between border-b border-ink/10">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-[18px] font-extrabold leading-none text-ink">
              R
            </span>
            <span className="flex flex-col justify-center leading-none">
              <span className="font-display text-[19px] font-extrabold tracking-[-0.02em] text-ink">
                Rise
              </span>
              <span className="mt-1 font-heading text-[8.5px] font-semibold uppercase tracking-[0.18em] text-mist">
                Management & Coaching
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink"
          >
            <X className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
        <nav className="shell mt-4 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-b border-ink/10 py-4 font-display text-[17px] font-bold text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/apply" className="btn btn-gold mt-7 w-full">
            Book a free call
          </Link>
          <Link to="/privacy" className="mt-6 text-[13px] text-mist">
            Privacy
          </Link>
        </nav>
      </div>
    </>
  );
}

