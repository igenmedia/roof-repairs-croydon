// Copy for the "Real Work" section (src/components/RealWork.astro), one entry
// per indexable page. Keys: "home", "contact", "roof-repair-cost",
// "common-roof-problems", service slugs without the leading slash, and town
// slugs from src/data/locations.ts.
//
// SOURCE - the owners' own account, voice note supplied 2026-10-18. These are
// the ONLY facts allowed here:
//   - run by John and Mark, brothers (first names only); family-run
//   - always worked together without falling out; they work best together
//   - they often quote together, go through the numbers together, run jobs
//     together and manage the team together
//   - customers often say it's a refreshing experience
//   - two points of contact who both know the job; can't reach one, you'll
//     usually get the other
//   - they trust each other, so decisions come naturally
//   - they like to think it makes them twice as good as a typical roofing firm
//     (similar thinking, same aims, nearly twice the output) - THEIR view, keep
//     it attributed and light
// Never add years trading, job counts, response times, named reviews, or any
// claim of past jobs or history in a named town. Town copy may only use what
// the site already says about the town (src/data/locations.ts, towns/*.ts).
//
// RULE ZERO: every page has its own wording. Spaced hyphens, no em dashes.
// No client photos yet, so no images are passed. Add real job photos only.

/** A real job photo in public/images/ (never stock). */
export interface RealWorkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface RealWorkCopy {
  heading: string;
  body: string[];
  images?: RealWorkImage[];
}

export const realWork: Record<string, RealWorkCopy> = {
  home: {
    heading: "Two brothers, one roofing firm",
    body: [
      "Roof Repairs Croydon is a family business, run by brothers John and Mark. Plenty of family firms end with people not speaking at Christmas. These two have always worked side by side without a falling-out, and they'll tell you they're at their best together.",
      "They price jobs together, go over the numbers together, run the work and look after the team between them. Customers often say that's refreshing. You get two people who know your roof properly, and if one can't pick up, the other usually will.",
    ],
  },

  // ---------- Service pages ----------
  "roof-leak-repairs": {
    heading: "Two heads on one leak",
    body: [
      "A leak is detective work, and this firm has two detectives. John and Mark are the brothers who run Roof Repairs Croydon, and on a stubborn one they'll often talk it through and price it up between them.",
      "Both of them know the job, so you aren't waiting on one person to ring back while a bucket fills in the spare room. If John's tied up, try Mark. He'll know exactly where your leak has got to.",
    ],
  },
  "emergency-roof-repairs": {
    heading: "When it's urgent, there are two of them",
    body: [
      "In an emergency, the worst kind of firm is the one where a single person holds all the details. Roof Repairs Croydon is run by two brothers, John and Mark, and each of them knows every job as well as the other does.",
      "Can't get hold of one? You'll usually get his brother, and you won't have to explain the whole thing again from scratch. They trust each other enough that decisions don't need a meeting.",
    ],
  },
  "storm-damage-repairs": {
    heading: "Storm damage, and the benefit of brothers",
    body: [
      "After a big blow, half of Croydon wants a roofer at once. This is a family business run by John and Mark, brothers who run jobs together and both keep track of how each one is going.",
      "So there's more than one person who can answer your questions about the damage, the make-safe and the repair. Miss one brother and you'll normally reach the other. They'd say it makes them twice as useful as the average roofing firm in a week like that. You can be the judge.",
    ],
  },
  "flat-roof-repairs": {
    heading: "The brothers behind the flat roof work",
    body: [
      "Behind every flat roof quote on this page is a family firm. John and Mark are brothers, and they've always worked together without the kind of row a lot of family businesses seem to end up in.",
      "They'll usually work a flat roof price out together, so your figure has been argued over by two people who mostly agree anyway. Afterwards, either of them can tell you how the job's going.",
    ],
  },
  "chimney-repairs": {
    heading: "A family firm on your chimney",
    body: [
      "Roof Repairs Croydon belongs to two brothers, John and Mark. Some brothers can't share a car journey without an argument. These two share a business, the quoting, the sums and the running of the work, and they still get on.",
      "For a chimney repair that means one quote they're both happy with and two people you can call about it. Neither has to check with the other before answering you. They tend to think the same way anyway.",
    ],
  },
  guttering: {
    heading: "Who you're dealing with on a gutter job",
    body: [
      "Gutters are often the smallest thing we get asked about, and they're handled by the same two brothers as everything else. John and Mark run Roof Repairs Croydon and manage the team between them.",
      "Customers often say it makes a nice change to deal with a family firm where both people at the top actually know what's happening. Ring about your gutters while John's busy and Mark can usually help.",
    ],
  },
  "fascias-and-soffits": {
    heading: "A family business, start to finish",
    body: [
      "John and Mark run Roof Repairs Croydon together. They're brothers, and they have never fallen out over the business, which in the world of family firms counts as a small miracle.",
      "On fascia and soffit work they often sort the quote out together and keep an eye on the job together, so nothing about your roofline lives in only one person's head. They want the same things. Decisions get made without fuss.",
    ],
  },
  "roof-replacement": {
    heading: "Two brothers on one quote",
    body: [
      "A new roof is a big spend, so it helps to know who's pricing it. Roof Repairs Croydon is a family firm run by John and Mark, brothers who often quote together and go through the figures side by side before anything reaches you.",
      "They'll tell you, half joking, that working this way makes them twice as good as the average roofing firm: same thinking, same aims, nearly double the output. Either way, two people know your replacement in detail, and either can take your call.",
    ],
  },

  // ---------- Other service and info pages ----------
  "common-roof-problems": {
    heading: "Who you'd be talking to",
    body: [
      "Read all this and still not sure what's wrong? The business you'd be dealing with is run by John and Mark. They're brothers, and Roof Repairs Croydon is their family firm.",
      "They work things out together, from the first look at the numbers to managing the team that does the job. People who use us often call it refreshing to have two contacts who both know what's going on, rather than one person you can never get hold of.",
    ],
  },
  "roof-repair-cost": {
    heading: "Who works out your price",
    body: [
      "Quotes here usually have two people behind them. Roof Repairs Croydon is run by brothers John and Mark, and they often go through a price together, line by line, before you see it.",
      "Because they think so alike, those conversations are quick rather than painful. It's part of why they reckon they're twice as good as a typical roofing firm, which you're welcome to take with a pinch of salt. What you get is a figure both brothers stand behind, and two people who can explain it.",
    ],
  },
  contact: {
    heading: "Who you'll be dealing with",
    body: [
      "Send the form or ring the number above and you're getting in touch with a family business. Roof Repairs Croydon is run by John and Mark, two brothers who have always worked together and still like it that way.",
      "Both of them know each job properly, so you won't be passed from pillar to post. If one can't take your call, you'll usually get the other. Customers often tell us that makes a refreshing change.",
    ],
  },

  // ---------- Location pages ----------
  "south-croydon": {
    heading: "Brothers based in South Croydon",
    body: [
      "This is home ground. Roof Repairs Croydon is based in South Croydon and run by two brothers, John and Mark. It's a family business, and the pair have always worked together without falling out, which they're quietly proud of.",
      "For a tall villa near Croham Road or a flat in a converted house off the Brighton Road, you'd have both of them across the details. Whichever brother you speak to, he'll know where things stand.",
    ],
  },
  purley: {
    heading: "John, Mark and a Purley roof",
    body: [
      "Webb Estate roofs, with their clay tiles, catslides and swept valleys, are the kind where it helps to have more than one head on the price. Roof Repairs Croydon is a family firm run by brothers John and Mark, and they often quote jobs together.",
      "They think alike and want the same things, so a complicated roof doesn't turn into an argument between them. If you're in Purley and one brother is busy, the other will normally pick up.",
    ],
  },
  sanderstead: {
    heading: "A family firm for Sanderstead",
    body: [
      "Sanderstead sits about as high as the borough goes, and wind at the eaves and hips is the usual story up there. Ring about one of those roofs and you're dealing with a family business run by two brothers, John and Mark.",
      "They manage the team between them and often run jobs together. Customers often say that's refreshing, and the brothers would add that it makes them twice as good as a typical roofing firm. They might be biased.",
    ],
  },
  selsdon: {
    heading: "Selsdon, and the family behind the firm",
    body: [
      "Leaf litter off Selsdon Wood is the most common reason a gutter round here gives up by November. Whoever you ring about it, you're reaching a family firm: Roof Repairs Croydon belongs to brothers John and Mark, who run it side by side and have never fallen out over it.",
      "A 1930s semi on the Selsdon Park roads or a shallow roof in Forestdale, they'd usually work out the price together. With two people who both know the job, whichever one you reach is enough.",
    ],
  },
  coulsdon: {
    heading: "Coulsdon, and who you'd talk to",
    body: [
      "Coulsdon's 1930s houses often let water in at the bay roof or porch canopy before the main roof gives any trouble. The people you'd talk to about that are John and Mark, brothers who run Roof Repairs Croydon as a family business.",
      "Their thinking is so similar that decisions between them happen without much discussion, which keeps things moving. If one of them doesn't answer, you'll most likely get the other, and he'll know your job just as well.",
    ],
  },
  kenley: {
    heading: "Kenley roofs and a two-brother business",
    body: [
      "Kenley is high on the Downs and wet and frosty by south London standards, and lots of houses there have roofs made complicated by extensions up the slope. Roof Repairs Croydon is run by brothers John and Mark, who often price jobs between them.",
      "A complicated roof is where that pays off. Two people who think alike go through the figures, agree, and either can explain them afterwards. They like to say it makes them twice as good as a normal roofing firm, only slightly tongue in cheek.",
    ],
  },
  addiscombe: {
    heading: "Addiscombe, from a family firm",
    body: [
      "Plenty of Addiscombe houses are Victorian terraces under Welsh slate, and a fair few are split into flats with several owners to keep in the loop. Roof Repairs Croydon is run by John and Mark, two brothers who run jobs together.",
      "On a shared roof that's handy, because two people at the firm know the details, not one. Whoever rings first, you or the flat upstairs, will usually reach one brother or the other.",
    ],
  },
  shirley: {
    heading: "A brothers' business for Shirley homes",
    body: [
      "In Shirley a pitched tile roof often comes with a flat-roofed extension or garage on the back, which is really two jobs on one house. Roof Repairs Croydon is a family business run by brothers John and Mark, and the two of them often put a quote together side by side.",
      "They've always got on, which helps when two roofs need one sensible plan. Customers tell us it's refreshing to have two contacts who both know the job, so you're rarely left waiting on one person.",
    ],
  },
  "thornton-heath": {
    heading: "Thornton Heath, and the two brothers behind the firm",
    body: [
      "Long Victorian terraces, and rear additions under felt that has been patched over and over. Call about one of those in Thornton Heath and you're dealing with Roof Repairs Croydon, a family business run by John and Mark, two brothers who have never fallen out over work.",
      "They often go through the numbers together, so a patchwork back roof gets one straight price instead of two different opinions. Can't reach John? Mark will usually answer, and he'll know the job as well as his brother does.",
    ],
  },
  norbury: {
    heading: "Norbury and a family-run roofing firm",
    body: [
      "Norbury has an SW16 postcode but falls under Croydon, and so does the family firm that covers it. Roof Repairs Croydon is run by brothers John and Mark.",
      "With an older main slope and a newer flat roof at the back on many Norbury houses, there can be a fair bit to talk through. Both brothers will know your job, because quoting, running jobs and managing the team are things they do together.",
    ],
  },
  "south-norwood": {
    heading: "South Norwood, shared gutters and two brothers",
    body: [
      "On South Norwood's railway terraces a gutter is often shared between two houses, so a repair can mean keeping next door in the picture. Roof Repairs Croydon is a family firm, and the two people running it, John and Mark, are brothers who've always worked well together.",
      "Two neighbours, two brothers. It works out quite neatly. Either brother can talk you, or the people next door, through what's needed, since both know each job in full.",
    ],
  },
  "new-addington": {
    heading: "A family firm for 'Little Siberia'",
    body: [
      "New Addington runs colder than the rest of Croydon, and its shallow-pitched concrete tile roofs feel every one of those frosts. Roof Repairs Croydon is a family business run by John and Mark, two brothers who quote, crunch the numbers and run jobs together.",
      "On an estate where it's worth checking who owns which bit of roof first, it helps to have two contacts who both know where things are up to. Lose track of one brother and you'll usually find the other.",
    ],
  },
  wallington: {
    heading: "Wallington and the family behind Roof Repairs Croydon",
    body: [
      "Wallington is in Sutton, not Croydon, but that doesn't change who you'd be dealing with. Roof Repairs Croydon is run by John and Mark, brothers who have always worked together and get on well, which isn't a given in a family business.",
      "Gutters hung too flat to drain are a common Wallington culprit, and either brother can talk you through one. The two of them share the quoting and the running of each job, so you've got a choice of who to ring.",
    ],
  },
  caterham: {
    heading: "Caterham, and a Croydon family firm",
    body: [
      "Caterham shares the CR postcode but answers to Tandridge, and the town splits between the valley floor and the hill above it. The firm you'd be calling is run by two brothers, John and Mark, who share everything from quoting to managing the team.",
      "Steep sites up on the hill can make for awkward roof shapes, and that's when two people who think alike going through the numbers earns its keep. They'd like to think it makes them twice as good as your average roofer. Customers often just call it refreshing.",
    ],
  },
  warlingham: {
    heading: "Warlingham, and how John and Mark work",
    body: [
      "Out in Warlingham the houses can be big and the roofs complicated, with open fields letting wind-driven rain find its way under laps. Get in touch and you're talking to a family business run by brothers John and Mark.",
      "They've always worked together without falling out, and they trust each other enough that decisions come easily. On a bigger roof you've also got two people who know it properly instead of one.",
    ],
  },
  "west-wickham": {
    heading: "Two brothers and West Wickham's tile-hung houses",
    body: [
      "Many West Wickham houses have tile-hung upper walls that want checking whenever the roof does. Roof Repairs Croydon is a family business, and the brothers who run it, John and Mark, often price a job together.",
      "They think in much the same way and aim for the same things, so you get one clear answer rather than two. And because both know the job, whichever brother you reach can tell you how it's going.",
    ],
  },
};

/** Throws, failing the build, if a page has no Real Work copy. */
export function getRealWork(key: string): RealWorkCopy {
  const copy = realWork[key];
  if (!copy) {
    throw new Error(`[realWork] No Real Work copy for page "${key}". Add an entry to src/data/realWork.ts.`);
  }
  return copy;
}
