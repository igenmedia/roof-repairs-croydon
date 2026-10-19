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

  // ---------- Service x town sub-pages (flat roofs, chimneys) ----------
  "flat-roof-repairs-south-croydon": {
    heading: "Two brothers and the flat roof behind the villa",
    body: [
      "John and Mark run Roof Repairs Croydon, and they're brothers. It's a family firm based here in South Croydon, and the pair have always worked together without falling out. They reckon they do their best work side by side, and a flat roof over a back addition is no different.",
      "Before a price goes out, they'll often go over the figures together. That leaves you with two people who both know what's happening on your extension. If John's up a ladder when you ring, Mark will usually answer, and you won't have to start the story again.",
    ],
  },
  "chimney-repairs-south-croydon": {
    heading: "The family firm behind your chimney quote",
    body: [
      "Roof Repairs Croydon is a family business on its own patch in South Croydon, run by brothers John and Mark. They quote together, run jobs together and manage the team together, which suits a tall villa stack where there is a fair bit to weigh up.",
      "They trust each other, so a decision about your chimney isn't left waiting for a meeting. Customers often say dealing with them is refreshing. The brothers put it their own way: they like to think working as a pair makes them twice as good as a typical roofing firm.",
    ],
  },
  "flat-roof-repairs-purley": {
    heading: "Who you'd deal with about a Purley flat roof",
    body: [
      "A lead dormer top and a felt garage roof get the same two people. Roof Repairs Croydon is family-run, and the brothers at the top, John and Mark, have always got on well enough to share the whole business between them.",
      "They often go through the numbers on a job together, so the price for your flat roof has been thought about twice over. Afterwards both of them know the detail of it. If one brother is out of reach, you'll usually find the other ready to answer.",
    ],
  },
  "chimney-repairs-purley": {
    heading: "John, Mark and a careful look at your stack",
    body: [
      "A chimney on an older clay tile roof rewards a second opinion, and this firm has one built in. Roof Repairs Croydon is run by two brothers, John and Mark, who often price a job side by side and then run it together.",
      "Their thinking runs along the same lines, so they rarely need long to agree on what a chimney needs. It's a refreshing experience, customers often say: two points of contact, both of whom know your stack, and if one can't pick up, the other usually will.",
    ],
  },
  "flat-roof-repairs-sanderstead": {
    heading: "Who prices your flat roof up the hill",
    body: [
      "A flat roof on an exposed Sanderstead house lives or dies by its edge details, and it helps when two people have checked the plan. The firm is family-run, and the two people checking yours are brothers, John and Mark. They often sit down and work out a price side by side.",
      "Between them they also run the jobs and the team, so either brother can tell you how your roof is going. If John can't answer, Mark usually will. Customers say that's a refreshing way to deal with a roofer.",
    ],
  },
  "chimney-repairs-sanderstead": {
    heading: "Brothers on the job, not just on the phone",
    body: [
      "Chimney work on high, windy ground shouldn't come down to guesswork. At Roof Repairs Croydon it usually comes down to two brothers, John and Mark, who go through the figures together before any quote leaves the family firm.",
      "They've always worked as a pair and never fallen out. Because they trust one another, nobody sits waiting on a second opinion. Their own view, given with a grin, is that it makes them twice the roofers a typical firm manages. You can make your own mind up about that.",
    ],
  },
  "flat-roof-repairs-selsdon": {
    heading: "A family firm for flat and low roofs",
    body: [
      "Whether it's a Forestdale garage or an extension behind a semi on Selsdon Park Road, the people behind the quote don't change: John and Mark, the brothers whose family business this is.",
      "Jobs are often run by both of them, and they share the running of the team. You get two contacts who each know where your roof is up to, so a missed call to one usually means a quick answer from the other.",
    ],
  },
  "chimney-repairs-selsdon": {
    heading: "The two brothers who'll look at your chimney",
    body: [
      "Roof Repairs Croydon is family-run. Brothers John and Mark own it, and they reckon they've always done their best work as a pair, which is handy, because they've never had the falling-out people expect from brothers in business.",
      "On a chimney under Selsdon's trees, that means one of them is rarely working it out alone. They quote and decide together without fuss, and customers often say the whole thing feels refreshing compared with the usual roofer.",
    ],
  },
  "flat-roof-repairs-coulsdon": {
    heading: "Who looks at your flat roof",
    body: [
      "A Coulsdon extension or garage roof is usually a small job, and it is still priced by the people who own the firm. Roof Repairs Croydon is a family business run by John and Mark, who are brothers and have always worked side by side.",
      "They often sit down with the numbers together before a quote goes out. Afterwards you have two names to ring, and whichever brother answers will know where your roof is up to.",
    ],
  },
  "chimney-repairs-coulsdon": {
    heading: "Brothers, not a call centre",
    body: [
      "Chimney work on a pair of semis can mean talking to the people next door as well as you. It helps that this firm has two people at the top who both know each job. John and Mark run Roof Repairs Croydon together, and the business is family through and through.",
      "They trust each other's judgement, so a decision about your stack does not sit waiting for a meeting. Customers often say dealing with the two of them is refreshing.",
    ],
  },
  "flat-roof-repairs-kenley": {
    heading: "Two brothers, one plan for a tricky roof",
    body: [
      "A Kenley flat roof squeezed between two other roof levels is the sort of job where a second opinion is useful before the price is fixed. At Roof Repairs Croydon, the second opinion is built in. The firm is run by brothers John and Mark, who tend to work quotes out together.",
      "They think along the same lines, so it is a quick conversation rather than an argument. They say, with a grin, that it makes them twice as good as an ordinary roofing firm.",
    ],
  },
  "chimney-repairs-kenley": {
    heading: "A family firm behind the scaffold",
    body: [
      "Roof Repairs Croydon is owned and run by two brothers, John and Mark. They have never fallen out over the business, and they will tell you they do their best work as a pair.",
      "On a chimney that needs scaffold, that means the job is planned, priced and run by people who share the same aims. If you cannot get hold of one of them while the work is on, the other usually picks up and knows the detail.",
    ],
  },
  "flat-roof-repairs-addiscombe": {
    heading: "Two people who both know your back roof",
    body: [
      "A flat roof tucked behind an Addiscombe terrace is easy to lose track of, especially when several owners have a say. The family behind Roof Repairs Croydon is two brothers, John and Mark, and on a job like this they usually work out the price together.",
      "That gives you two points of contact, and both of them know where things stand. Ring while one of them is busy on a roof and the other can usually pick up the thread. Customers tell them it makes a refreshing change.",
    ],
  },
  "chimney-repairs-addiscombe": {
    heading: "Brothers who trust each other's call",
    body: [
      "Chimney work in a conservation area needs decisions made carefully and without fuss. John and Mark, the brothers behind Roof Repairs Croydon, have always worked together and have never fallen out over it. They trust each other's judgement, so those decisions come easily between them.",
      "They run jobs and manage the team as a pair, so there is no handover where details go missing. They like to think the pairing makes them about twice the firm a typical roofer is. You can judge that one for yourself.",
    ],
  },
  "flat-roof-repairs-shirley": {
    heading: "Same job, two brothers on it",
    body: [
      "An extension roof under trees is a fairly ordinary repair, and it still gets the attention of the people who own the business. Roof Repairs Croydon is family-run. The two brothers in charge, John and Mark, often sit down with the numbers on a quote together.",
      "Once the work is booked you have two people to call, not one. Both keep up with how your roof is getting on, so if one doesn't pick up, the other usually will. People often tell them that's refreshing.",
    ],
  },
  "chimney-repairs-shirley": {
    heading: "Who you'll be dealing with",
    body: [
      "John and Mark are brothers, and the family firm they run is Roof Repairs Croydon. They reckon the business runs best with both of them on it. On a shared chimney, where next door may want a say too, it helps that each of them knows the plan.",
      "They price jobs between them, run the work between them and look after the team the same way. Because they trust each other, choices about your stack get made without a meeting. If one brother is busy, the other can usually help.",
    ],
  },
  "flat-roof-repairs-thornton-heath": {
    heading: "Two brothers, one look at your back roof",
    body: [
      "A Thornton Heath back roof with years of patches on it needs somebody to decide, plainly, whether it gets repaired or stripped. At Roof Repairs Croydon the owners make that call. John and Mark are brothers, the business is a family one, and they have always worked together without falling out.",
      "More often than not they go through the figures as a pair before a price reaches you. Once the job is booked you have two people to ring, and both know it. Should John be tied up on a roof, it is usually Mark who answers instead.",
    ],
  },
  "chimney-repairs-thornton-heath": {
    heading: "A shared stack, and two people who share the work",
    body: [
      "A chimney on a party wall belongs to two households, so it helps when the firm doing it is run by two people as well. John and Mark are the brothers behind Roof Repairs Croydon. Quoting, running the work and looking after the team are all things they handle jointly.",
      "Because they trust each other, decisions about your stack happen quickly and without fuss. Their own view, offered with a smile, is that the arrangement makes them twice the roofers a normal firm would be. Customers more often just tell them it was a refreshing way to get a job done.",
    ],
  },
  "flat-roof-repairs-norbury": {
    heading: "Old roof, new roof, two brothers",
    body: [
      "A Norbury house often has two roofs of very different ages, so the person you speak to needs to keep both in mind. John and Mark, the brothers whose family firm this is, both keep track of every job on the books.",
      "They tend to work through a quote together and get to the same answer without much debate. So a question about your flat roof never has to wait for one particular person. Whichever brother picks up can tell you where the job is up to.",
    ],
  },
  "chimney-repairs-norbury": {
    heading: "Who looks after your chimney job",
    body: [
      "Behind any chimney price we send to an SW16 address are two brothers, John and Mark, who own and run Roof Repairs Croydon. Working side by side is how they have always done it, and they reckon it is when they do their best work.",
      "They check the numbers together, then keep an eye on the job together. People often say it is a refreshing change to have two contacts who both know what is happening on their roof. Miss one of them and the other will usually answer.",
    ],
  },
  "flat-roof-repairs-south-norwood": {
    heading: "Two brothers on one terrace roof",
    body: [
      "A flat roof at the back of a South Norwood terrace can mean a chat with the neighbours as well as you. Roof Repairs Croydon is a family firm run by John and Mark, two brothers who have always worked side by side and never fallen out over it.",
      "They often look over a quote together and run the job between them, so either one can answer when you ring. If John is up a ladder, Mark will usually pick up and already know where your extension roof stands.",
    ],
  },
  "chimney-repairs-south-norwood": {
    heading: "Shared stacks, shared thinking",
    body: [
      "A chimney on a party wall has two owners, and this firm has two people at the top as well. John and Mark are brothers who run Roof Repairs Croydon as a family business, and they say they work at their best as a pair.",
      "They trust each other, so a decision on your stack does not get stuck waiting for a second opinion. Customers often describe dealing with them as refreshing. The brothers reckon it makes them twice as good as a usual roofing firm, though they would say that.",
    ],
  },
  "flat-roof-repairs-new-addington": {
    heading: "Plain answers from the people who own the firm",
    body: [
      "On a garage or extension roof up on the plateau, you want to know who you are dealing with. It is John and Mark, brothers who run Roof Repairs Croydon together. Family-run from the start, and they have never had a falling-out over the work.",
      "They often go through the numbers side by side before a price reaches you, and they manage the team together on site. That gives you two contacts who both know your roof, so a missed call to one usually gets answered by the other.",
    ],
  },
  "chimney-repairs-new-addington": {
    heading: "Two names to call about your chimney",
    body: [
      "Before a cold snap is not the time to chase a roofer who never rings back. Roof Repairs Croydon is a family business owned by two brothers, John and Mark, and both of them keep up with every chimney job the firm takes on.",
      "They quote together, run the work together and back each other's calls without fuss. People who use them often say that makes a refreshing change. Whichever brother answers the phone, he will know what is happening with your stack.",
    ],
  },
  "flat-roof-repairs-wallington": {
    heading: "Two brothers and a spirit level",
    body: [
      "Working out why a flat roof keeps holding water is a patient job, and it goes better with two people thinking about it. At Roof Repairs Croydon those two are John and Mark. They are brothers, the firm is their family's, and they have always worked alongside each other without a single falling-out.",
      "Quite often they look at the figures for a re-cover together and settle the price between them. Once the work is booked you can ring either brother about it, and you will not have to explain the puddle twice. People tend to tell us that is a refreshing way to be looked after.",
    ],
  },
  "chimney-repairs-wallington": {
    heading: "Two people who know your stack",
    body: [
      "A chimney shared with the house next door can mean more phone calls than most roof jobs. That is easier when the firm has two people in charge who both follow it. John and Mark own Roof Repairs Croydon, a family concern, and they are brothers who say they do their best work as a team.",
      "Between them they quote the job, keep an eye on the team and see the repair through to the end. If John is up a ladder when you call, Mark will normally answer, and the other way round. They trust each other, so a decision does not wait for both to be in one room.",
    ],
  },
  "flat-roof-repairs-caterham": {
    heading: "Hill or Valley, the same two names",
    body: [
      "A flat roof on a sloping Caterham plot raises awkward questions about access and abutments, and those are better talked through than guessed. Here that conversation happens between John and Mark, brothers, and the family behind Roof Repairs Croydon. They have never fallen out over it.",
      "They tend to go through a quote side by side and agree the numbers before you see them. Both of them keep up with every job, so whoever you reach can answer you. Half in jest, they like to think that makes them twice the roofers a one-boss firm would be.",
    ],
  },
  "chimney-repairs-caterham": {
    heading: "A firm with two people at the top",
    body: [
      "A tall stack with scaffold built up a slope is the sort of job that needs someone keeping track of it from start to finish. At Roof Repairs Croydon there are two such people. The brothers John and Mark own it between them, it has stayed in the family, and both say they work at their best side by side.",
      "They often run a chimney job as a pair and look after the team between them, so the details never rest with one person alone. Customers often say that makes dealing with them refreshing. Miss one brother and the other usually picks up, already knowing where your stack is up to.",
    ],
  },
  "flat-roof-repairs-warlingham": {
    heading: "Two brothers on one flat roof price",
    body: [
      "A big extension roof with edges facing open fields is worth a second pair of eyes before anyone settles on a figure. The firm belongs to John and Mark, two brothers who keep it a family business, and they tend to sit down together over a quote and check the figures between them.",
      "Once the work starts, they run the job and manage the team as a pair. That gives you two people to call, and either one can tell you what is going on with your roof. If one is up a ladder when you ring, you will usually get the other.",
    ],
  },
  "chimney-repairs-warlingham": {
    heading: "John and Mark, and how your chimney gets decided",
    body: [
      "When a house has two or three stacks, choosing which to tackle now is a judgement call. The two brothers who own Roof Repairs Croydon, John and Mark, trust each other's view, so those calls get made quickly rather than going back and forth.",
      "They have always worked together without a falling-out, and they reckon they are at their best as a pair. Customers often tell them that dealing with the pair of them is refreshing. The brothers like to think, with a smile, that having two of them makes the firm twice as good as a typical roofer.",
    ],
  },
  "flat-roof-repairs-west-wickham": {
    heading: "A family firm, two names, one job",
    body: [
      "Flat roof repairs are often small and fiddly, and it helps to know exactly who is responsible. Here that is John and Mark, a pair of brothers running a family firm, who manage the team and see each job through together.",
      "Because both of them know your job, you are rarely left waiting for one person to come back to you. Ring either and you will usually get an answer. Customers often say that working with them is refreshing.",
    ],
  },
  "chimney-repairs-west-wickham": {
    heading: "Who prices your chimney",
    body: [
      "Chimney quotes on a semi can get complicated once next door's half is involved. At Roof Repairs Croydon the figures are usually worked through by both owners, John and Mark, brothers who run the place as a family concern and always have done together.",
      "In all that time there has been no falling-out, and they agree more often than not, so decisions about your stack come easily between them. You also get two people to contact, each up to speed on the job. If one is tied up, try the other, because both will know where things stand.",
    ],
  },
  // ---------- end sub-pages ----------
};

/** Throws, failing the build, if a page has no Real Work copy. */
export function getRealWork(key: string): RealWorkCopy {
  const copy = realWork[key];
  if (!copy) {
    throw new Error(`[realWork] No Real Work copy for page "${key}". Add an entry to src/data/realWork.ts.`);
  }
  return copy;
}
