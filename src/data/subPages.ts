// Service x town sub-pages: /flat-roof-repairs-{town} and /chimney-repairs-{town}.
// One prose file per page in ./sub/, named {service}-{town}.ts. The checked
// facts (council, postcode, drive time, attractions, map query) come from
// locations.ts and the town's own file in ./towns/, so they cannot drift.
//
// The town hub (/{town}) is "Roof Repairs In {Town}", so these two services
// were picked because they are separate searches that do not compete with it.
// No sub-page for leak repairs, which would.
//
// RULE ZERO: every sentence here is written for its own page. Nothing may
// repeat a sentence from another sub-page, a town page, a service page or
// another site in the project. Spaced hyphens, never em dashes.
// RULE ONE: the Real Work copy for each page lives in realWork.ts under the
// page's slug, like every other page on the site.

import { locations } from "./locations";

export type SubService = "flat-roof-repairs" | "chimney-repairs";

export const subServices: { key: SubService; name: string }[] = [
  { key: "flat-roof-repairs", name: "Flat Roof Repairs" },
  { key: "chimney-repairs", name: "Chimney Repairs" },
];

export interface SubPageData {
  service: SubService;
  /** Town slug from locations.ts. */
  town: string;
  /** "{Service} {Town} | Roof Repairs Croydon" - no "In". Under ~60 chars. */
  metaTitle: string;
  /** Under ~155 chars, keyword + town + call to action. */
  metaDescription: string;
  /** Hero H2: a question aimed at the visitor. */
  h2: string;
  /** Hero H3: short descriptive line expanding on the H1. */
  h3: string;
  /** Localised hero paragraph naming real roads/estates and housing. */
  intro: string;
  symptomsHeading: string;
  symptomsIntro: string;
  /** Four: what the owner sees, and what it usually means. */
  symptoms: { sign: string; cause: string }[];
  benefitsHeading: string;
  /** Six. */
  benefits: { title: string; text: string }[];
  /** The local-conditions section: how this town's stock and weather affect this service. */
  local: { h: string; p1: string; p2: string };
  /** Framed as our own experience, never as external research. */
  insight: string;
  processHeading: string;
  /** Six steps. */
  process: { h: string; p: string }[];
  lookForHeading: string;
  /** Three. */
  lookFor: { h: string; p: string }[];
  comparison: {
    header: string;
    intro: string;
    proLabel: string;
    altLabel: string;
    /** Six rows. */
    rows: { label: string; pro: string; alt: string }[];
  };
  /** In-text link to the same town's other sub-page. */
  crossLink: { h: string; before: string; anchor: string; after: string };
  cost: {
    h: string;
    intro: string;
    /** Three. At least one names local areas and ground/housing conditions. */
    factors: { title: string; text: string }[];
  };
  attractionsIntro: string;
  /** Three short blurbs, same order as the town file's attractions. */
  attractions: string[];
  mapText: string;
  areasText: string;
  /** Five or six. Must include: planning answer naming the right council,
   *  a local-conditions question, and a question naming the town. */
  faqs: { question: string; answer: string }[];
  finalH: string;
  finalP: string;
}

const modules = import.meta.glob<{ default: SubPageData }>("./sub/*.ts", { eager: true });
const all = Object.values(modules).map((m) => m.default);

export function subSlug(service: SubService, town: string) {
  return `${service}-${town}`;
}

/** Ordered by town as locations.ts is, flat roofs before chimneys. */
export const subPages: SubPageData[] = locations.flatMap((l) =>
  subServices
    .map((s) => all.find((p) => p.service === s.key && p.town === l.slug))
    .filter((p): p is SubPageData => Boolean(p)),
);

export function subPagesFor(town: string) {
  return subPages.filter((p) => p.town === town);
}

export function subPagesOf(service: SubService) {
  return subPages.filter((p) => p.service === service);
}
