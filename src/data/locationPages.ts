// Prose for the /{town} location pages. One file per town in ./towns/, keyed by
// the same slug as src/data/locations.ts. LocationPage.astro joins the two, so
// the checked facts (council, postcode, drive time) live once in locations.ts
// and only the writing lives here.
//
// RULE ZERO: none of this may repeat a sentence from another site in the
// project, from this site's homepage or service pages, or from another town
// file. Each town leads on whatever genuinely dominates its roofs.
//
// Images follow the site's img() convention. A publicId of
// "roof-repairs-croydon/loc/purley-webb-estate" resolves to
// /images/roof-repairs-croydon-loc-purley-webb-estate-w{width}.webp, so heroes
// are requested at 1200, the about image at 800 and attraction cards at 600.

import { locations } from "./locations";

export interface LocationAttraction {
  name: string;
  text: string;
  publicId: string;
  alt: string;
  /** Google Maps link for the named place itself, not a generic search. */
  mapLink: string;
}

export interface LocationPageData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  /** Question aimed at the visitor. */
  h2: string;
  /** Short descriptive line expanding on the H1. */
  h3: string;
  intro: string;
  heroPublicId: string;
  heroAlt: string;
  about: { h: string; p1: string; p2: string; publicId: string; alt: string };
  /** Exactly three. The services this town's roofs generate most. */
  featured: { name: string; href: string; text: string }[];
  benefitsHeading: string;
  benefitsIntro: string;
  /** Five. */
  benefits: { title: string; text: string }[];
  /** Framed as our own experience, never as external research. */
  insight: string;
  /** Town-specific wording for the first and fifth process steps. */
  processSurvey: string;
  processWork: string;
  attractions: LocationAttraction[];
  mapQuery: string;
  costText: string;
  /** Four. The first is the planning answer and must name the right council. */
  faqs: { question: string; answer: string }[];
  finalH: string;
  finalP: string;
}

const modules = import.meta.glob<{ default: LocationPageData }>("./towns/*.ts", { eager: true });
const bySlug = new Map(Object.values(modules).map((m) => [m.default.slug, m.default]));

// Ordered as locations.ts is, so every list of towns on the site agrees.
export const locationPages: LocationPageData[] = locations
  .map((l) => bySlug.get(l.slug))
  .filter((p): p is LocationPageData => Boolean(p));
