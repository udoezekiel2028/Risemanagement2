# Rise Management & Coaching — Website Clone

A pixel-perfect, responsive clone of [https://risemanagement.base44.app](https://risemanagement.base44.app) built with React, Vite, Tailwind CSS, Lucide Icons, and Framer Motion.

## 🌟 Cloned Pages & Features

1. **Home Page (`/`)**:
   - Navigation with backdrop blur, brand logo, section anchors, and mobile drawer menu
   - Hero section with headline, copy, CTAs, trust stats avatar row, and 6-week badge
   - Stats bar (`Hundreds of clients coached`, `2018`, `6 weeks`, `Online worldwide`)
   - 3 Programme overview cards (`Writing coaching`, `Relationship & intimacy`, `Not sure where to start?`)
   - About section with founders photo (Ashley & Coralie), `100% personal attention` gold badge, and feature points
   - "How it works" 4-step numbered roadmap (`01 Apply`, `02 Free call`, `03 Six weeks`, `04 The rise`)
   - Coaches section featuring Ashley-Lou Brown and Coralie Fox with high-res portraits, credentials, and direct links
   - Client Stories interactive testimonial carousel with horizontal snap scrolling and quote marks
   - FAQ section featuring accordion questions & answers using Radix UI Accordion
   - Bottom CTA banner with gold button and direct email link

2. **Writing Coaching Page (`/writing-coaching`)**:
   - Custom programme hero with badges (`Six weeks, one-to-one`, `Online via Zoom`, `One session every week`)
   - "Honest questions: Does any of this sound familiar?" checklist with gold markers
   - "What changes: What we'll actually work on" (Voice, Structure, Momentum, Publishing path)
   - "The shape of it: How the six weeks run" (4 stages with numbers and timeline)
   - Testimonials block with primary and secondary client quotes
   - Cross-programme link to Relationship & intimacy coaching

3. **Relationship Coaching Page (`/relationship-coaching`)**:
   - Intimacy and relationship programme hero with badges (`Six weeks, one-to-one`, `Online via Zoom`, `Solo or with your partner`)
   - Dual-category checklist ("If you're longing for a relationship" & "If you're already in a relationship")
   - Outcomes (Confidence that travels, The words, Desire on purpose, Repair)
   - 4-stage programme roadmap
   - Testimonial block (Caren & Stuey shared sessions quote)
   - Cross-programme link to Writing coaching

4. **Apply Page (`/apply`)**:
   - Complete interactive application form with validation
   - Pre-selection support via `?programme=writing` or `?programme=relationships`
   - Real-time client-side validation for name, email format, and message length
   - Interactive submission with loading spinner and full Success screen state (with steps 01, 02, 03)

5. **Privacy Page (`/privacy`)**:
   - Complete confidentiality and data retention policy
   - Direct question email link and back-to-site button

6. **404 Not Found Page (`*`)**:
   - Custom 404 page with return link

## 🛠️ Tech Stack

- **React 18**
- **Vite 6**
- **Tailwind CSS 3**
- **Framer Motion** (Smooth viewport fade-up animations)
- **Radix UI Accordion** (Accessible, animated collapsible FAQ items)
- **Lucide React** (Clean, SVG line icons matching original design)
- **React Router DOM 6**

## 🚀 Getting Started

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

