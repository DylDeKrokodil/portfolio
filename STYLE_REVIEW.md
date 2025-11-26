# Styling Consistency Review

## What changed
- **Unified layout shell:** Added a shared `Section` wrapper that applies consistent max-width, horizontal padding, and vertical rhythm across all sections, replacing ad-hoc `px`/`py` values in the hero, about, projects, skills, and countries blocks.【F:app/components/Section.tsx†L1-L22】【F:app/(sections)/Hero.tsx†L9-L72】【F:app/(sections)/About.tsx†L9-L55】【F:app/(sections)/Projects.tsx†L9-L63】【F:app/(sections)/Skills.tsx†L1-L36】【F:app/(sections)/Countries.tsx†L1-L46】
- **Consolidated buttons:** Replaced duplicated `ButtonPrimary`/`ButtonSecundary` components with a single variant-driven `Button` that shares sizing, typography, hover, and focus styles; updated hero and about calls-to-action to use it.【F:app/components/Button.tsx†L1-L29】【F:app/(sections)/Hero.tsx†L5-L72】【F:app/(sections)/About.tsx†L4-L55】
- **Normalized layering:** Navbar now uses a clear z-index scale (`z-30` shell, `z-40` controls, `z-20` mobile menu) to avoid mixing custom values like `z-1`/`z-50`.【F:app/components/Navbar.tsx†L12-L57】
- **Travel timeline alignment:** Travel timeline adopts the shared heading components, neutral palette, and chip styles so it matches the rest of the site and surfaces country/city counts inline.【F:app/travel/(components)/TripTimeLine.tsx†L1-L86】

## Follow-ups to consider
- Extract shared card tokens (border, radius, shadow, neutral backgrounds) into a helper or theme map so project cards, hero cards, and travel entries stay in lockstep if the aesthetic evolves.
- Wire translation keys for travel destination labels/description text so the timeline content is fully localized instead of showing raw keys.
