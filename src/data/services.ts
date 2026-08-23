// Every service page is driven from this file through ServicePage.astro.
//
// House style for this site, which is deliberately not the style used on the
// other roofing sites in this portfolio: plain, second person, diagnostic.
// Short sentences. Explain the cause before the cure. No sales adjectives.
//
// The local detail is Croydon-specific and checked: the borough runs from
// London Clay at Thornton Heath up onto North Downs chalk at Kenley and
// Coulsdon, roughly 400 feet of height difference inside one authority, and the
// CR postcodes cross four separate planning authorities.

export interface ServiceData {
  slug: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h2: string;
  h3: string;
  heroPublicId: string;
  heroAlt: string;
  intro: string;
  /** Pull-quote framed as our own experience, never as external research. */
  insight: string;
  /** Symptom-to-cause table. The diagnostic spine of every service page. */
  symptoms: { sign: string; cause: string }[];
  benefits: { title: string; text: string }[];
  /** Ties the service to Croydon's north/south split or to named areas. */
  localAngle: { h: string; p: string; publicId: string; alt: string };
  whatToLook: { h: string; p: string }[];
  comparison: {
    header: string;
    intro: string;
    proLabel: string;
    altLabel: string;
    rows: { label: string; pro: string; alt: string }[];
  };
  teaser: { h: string; p: string; publicId: string; alt: string; ctaText: string; ctaHref: string };
  costText: string;
  faqs: { question: string; answer: string }[];
  related?: { href: string; label: string }[];
}

const P = "roof-repairs-croydon/site";

export const services: ServiceData[] = [
  // ---------------------------------------------------------------- leaks --
  {
    slug: "/roof-leak-repairs",
    serviceName: "Roof Leak Repairs",
    metaTitle: "Roof Leak Repairs In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Roof leak repairs in Croydon. We trace the leak to its real entry point before quoting, then fix it properly. Free survey, 10 year guarantee.",
    h1: "Roof Leak Repairs In Croydon",
    h2: "Water is getting in, but can you tell where from?",
    h3: "Leak tracing and permanent repairs to pitched and flat roofs across the CR postcodes",
    heroPublicId: `${P}/slate-roof-rooflight-croydon-leak-repairs`,
    heroAlt: "Slate roof with a rooflight in Croydon, the type of junction that commonly leaks",
    intro:
      "A leak almost never enters the roof directly above the stain on your ceiling. Water lands on a slate, runs under it, drops onto a rafter and then travels along that rafter until something stops it. On a wide hipped roof in Sanderstead that journey can be four or five metres. So the first job is not to fix anything. It is to work out where the water is actually getting in.",
    insight:
      "Two thirds of the time, the water is getting into the roof somewhere other than directly above the damp patch.",
    symptoms: [
      {
        sign: "A stain that only appears when the rain comes from one direction",
        cause:
          "Almost always wind-driven rain getting under a lap or past a flashing on that elevation. Repairs made in dry weather on the wrong side of the roof will not touch it.",
      },
      {
        sign: "A patch that keeps growing slowly, wet or dry",
        cause:
          "That is usually condensation rather than a leak, and it points at blocked ventilation in the loft, not a hole in the roof. Sealing the roof up tighter makes it worse.",
      },
      {
        sign: "Water appearing hours after the rain stops",
        cause:
          "The water is being held somewhere first, typically in sarking felt that has torn and formed a pocket, or in insulation that has become saturated.",
      },
      {
        sign: "Damp down one wall, worst at the top",
        cause:
          "More often guttering or a parapet than the roof covering. On the Victorian terraces around Addiscombe and South Norwood, a shared gutter next door is a common source.",
      },
    ],
    benefits: [
      {
        title: "The survey comes before the price",
        text: "Nobody can price a leak honestly without knowing what is causing it. You get told what has gone wrong first, then what it costs to put right.",
      },
      {
        title: "We go in the loft",
        text: "Half the evidence is on the underside. Daylight through the felt, tide marks on a rafter, a wet purlin - all of it narrows the search down before anyone gets on the roof.",
      },
      {
        title: "Slate, tile, felt and flat",
        text: "Croydon has all of them, often on the same house. A Victorian terrace with a slate front slope and a felt back addition needs someone comfortable with both.",
      },
      {
        title: "You get the diagnosis in writing",
        text: "In language you can repeat to somebody else, with photographs where they make the point better than words do. Get a second opinion on it if you want one.",
      },
      {
        title: "No push toward a new roof",
        text: "A leak is a fault, not a verdict on the whole roof. If the covering has another fifteen years in it, that is what you will be told.",
      },
      {
        title: "Ten year guarantee on the repair",
        text: "Written, handed over on the day. If the same water finds its way back in, putting it right costs you nothing.",
      },
    ],
    localAngle: {
      h: "The same leak behaves differently at each end of the borough",
      p: "Croydon covers about four hundred feet of height between Thornton Heath and the ridge at Kenley, and the roofs at the two ends have almost nothing in common. In the north it is dense Victorian and Edwardian terraces, slate front slopes, parapets and shared gutters, and the leaks are usually about age and about what the neighbours have or have not done. In the south it is interwar semis and detached houses on the chalk, tile rather than slate, hipped rather than gabled, and up there the leaks are usually about exposure - wind lifting a course, rain driven under a lap on the weather side. Same trade, different starting assumptions.",
      publicId: `${P}/croydon-terraced-housing-rooftops`,
      alt: "Rows of terraced housing rooftops in the north of the Croydon borough",
    },
    whatToLook: [
      {
        h: "Do they go inside?",
        p: "A roofer who only looks from the outside is guessing. The loft tells you where the water has been travelling, which is the only way to work backwards to where it came in.",
      },
      {
        h: "Can they explain the cause?",
        p: "If the answer to what caused it is a shrug and a price, that is a patch, not a repair. Patches come back. Ask what the mechanism was and see whether the explanation holds together.",
      },
      {
        h: "Will the repair match?",
        p: "Croydon has a great deal of natural slate on Victorian stock and a great deal of specific concrete tile profiles on interwar stock. A repair in the wrong material is visible from the pavement and can void what is left of an insurance position.",
      },
    ],
    comparison: {
      header: "Repair The Leak Or Replace The Roof?",
      intro:
        "This is the question most people are really asking when they ring. It is worth being honest about where the line sits.",
      proLabel: "Targeted repair",
      altLabel: "Full replacement",
      rows: [
        {
          label: "When it is the right call",
          pro: "The covering is sound and one detail has failed - a flashing, a valley, a slipped course, a cracked verge.",
          alt: "The fixings have gone across the whole slope, or you are repairing the same roof for the third or fourth time.",
        },
        {
          label: "Typical spend",
          pro: "Hundreds rather than thousands on most Croydon houses.",
          alt: "Thousands, and scaffold is a meaningful part of it on a three storey frontage.",
        },
        {
          label: "Time on site",
          pro: "Usually a day, sometimes two if access needs building.",
          alt: "Most terraced and semi-detached roofs run to about a week.",
        },
        {
          label: "Disruption",
          pro: "Almost none inside the house.",
          alt: "Noise, dust in the loft, skip on the road, and a permit for it in most of the borough.",
        },
        {
          label: "Planning",
          pro: "Like-for-like repair needs nothing, anywhere in Croydon.",
          alt: "Nothing normally, but inside the Chatsworth Road Article 4 area any roof alteration needs permission first.",
        },
        {
          label: "What you are left with",
          pro: "A sound roof with one fault removed, and a guarantee on that work.",
          alt: "A roof that starts its life again, with the felt, battens and ventilation brought up to current standards.",
        },
      ],
    },
    teaser: {
      h: "Not sure what you are looking at?",
      p: "There is a plain-English guide to the faults that turn up most often on Croydon roofs, what each one looks like from the ground, and roughly how urgent it is. Worth five minutes before you ring anybody, including us.",
      publicId: `${P}/damp-stained-ceiling-and-wall-roof-leak-croydon`,
      alt: "Damp staining on a ceiling and wall caused by a roof leak in a Croydon house",
      ctaText: "Read the roof problems guide",
      ctaHref: "/common-roof-problems",
    },
    costText:
      "Most leak repairs in Croydon land somewhere between a couple of hundred pounds and the low four figures. What moves it is almost never the repair itself - it is how hard the roof is to stand on safely. A single slipped slate reachable from a ladder is a small job. The same slate on a three storey Victorian frontage on the Brighton Road needs scaffold, and the scaffold costs more than the slate.",
    faqs: [
      {
        question: "Can you find a leak without it raining?",
        answer:
          "Usually, yes. Water leaves evidence - staining on rafters, rust runs on nails, tide marks on felt, salt bloom on brick. Between that and the pattern of the damage inside, most leaks can be traced on a dry day. Where it genuinely is not clear, we can water-test the suspect area with a hose rather than guess.",
      },
      {
        question: "Why did my last repair not fix it?",
        answer:
          "The most common reason is that the repair was made above the stain rather than at the entry point. Water travels along rafters and battens before it drops, so the wet patch on the ceiling and the hole in the roof are frequently a long way apart. The second most common reason is that it was never a leak at all - it was condensation, which no amount of sealing will cure.",
      },
      {
        question: "Do I need scaffold for a leak repair?",
        answer:
          "Not always. On a two storey semi in Shirley or Selsdon a ladder or a tower is often enough and safe. On the taller Victorian frontages in South Croydon and along the Brighton Road, or anything with a steep pitch, scaffold is the honest answer. It will be quoted as a separate line so you can see exactly what you are paying to reach the work rather than to do it.",
      },
      {
        question: "Is a leak covered by my house insurance?",
        answer:
          "Sudden damage from a storm normally is. Gradual deterioration and lack of maintenance normally are not, and that is the distinction most insurers apply. A written diagnosis that sets out what failed and when is what makes the difference to a claim, which is one reason we put it in writing whether you are claiming or not.",
      },
      {
        question: "How quickly can somebody come out?",
        answer:
          "For an active leak with water coming into the house, same day wherever we can. For a stain that has been there a while and is not getting worse, usually within a few days. Either way the survey is free and there is no obligation at the end of it.",
      },
      {
        question: "Will you repair a roof somebody else has worked on?",
        answer:
          "Yes, and it is a large part of what we do. You will be told plainly what the previous work did and did not achieve, without any commentary on whoever carried it out. Occasionally the earlier repair was correct and simply addressed a different fault to the one you still have.",
      },
    ],
    related: [
      { href: "/emergency-roof-repairs", label: "Emergency roof repairs" },
      { href: "/flat-roof-repairs", label: "Flat roof repairs" },
      { href: "/chimney-repairs", label: "Chimney repairs" },
    ],
  },

  // ------------------------------------------------------------ emergency --
  {
    slug: "/emergency-roof-repairs",
    serviceName: "Emergency Roof Repairs",
    metaTitle: "Emergency Roof Repairs In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Emergency roof repairs in Croydon. Same day make-safe for active leaks and storm damage, then a permanent repair once the weather allows. No call-out fee.",
    h1: "Emergency Roof Repairs In Croydon",
    h2: "Water coming in right now and it cannot wait?",
    h3: "Same day make-safe across Croydon, then a proper repair once the roof is dry enough to do it",
    heroPublicId: `${P}/daylight-through-roof-timbers-emergency-repair-croydon`,
    heroAlt: "Daylight showing through roof timbers in a Croydon loft, requiring an emergency repair",
    intro:
      "An emergency call-out has one job: stop water entering the building. That is not the same as fixing the roof, and anyone who tells you both can be done properly in the middle of a wet January evening is overselling it. Make it safe first, get it dry, then do the repair correctly in daylight with the right materials.",
    insight:
      "One emergency call-out in five ends with a gutter cleared and nothing else. That is exactly why nobody is charged for the visit.",
    symptoms: [
      {
        sign: "Water running down an internal wall during heavy rain",
        cause:
          "Usually an overflowing or split gutter rather than the roof covering. Fastest of all the emergencies to stop, and the cheapest.",
      },
      {
        sign: "A ceiling bulging or sagging",
        cause:
          "Water pooling above the plasterboard. This one is genuinely urgent - a saturated ceiling can come down as a single sheet. Move what is underneath before you do anything else.",
      },
      {
        sign: "Daylight visible in the loft after wind",
        cause:
          "Tiles or slates displaced, and the felt below torn. It will get rapidly worse in the next spell of wind, because the exposed edge gives the wind something to lift.",
      },
      {
        sign: "Debris in the garden after a storm",
        cause:
          "Something has left the roof. Even if nothing is coming in yet, the gap it left will be the entry point next time it rains hard.",
      },
    ],
    benefits: [
      {
        title: "Make safe first, price second",
        text: "The immediate job is stopping the water. Conversations about a permanent repair happen afterwards, when you can think straight and read a quote properly.",
      },
      {
        title: "No emergency premium",
        text: "The rate is the rate. Turning up on a Sunday because your ceiling is coming down does not change what a slate costs to fix.",
      },
      {
        title: "Nothing charged for looking",
        text: "If we come out and it is a blocked gutter, or it is nothing at all, you are not billed for finding that out.",
      },
      {
        title: "Temporary work that actually holds",
        text: "Properly weighted and fixed sheeting, not a tarpaulin with a brick on it that has gone by Tuesday.",
      },
      {
        title: "Photographs for your insurer",
        text: "Taken at the time, before anything is disturbed, because that is the evidence a claim stands or falls on.",
      },
      {
        title: "We come back and finish it",
        text: "The make-safe is stage one of a job, not the job. The permanent repair is booked before we leave.",
      },
    ],
    localAngle: {
      h: "Why the south of the borough gets more of these calls",
      p: "The exposed ground above Croydon takes a harder time of it than the low ground does. Kenley Airfield's Met Office long-term average is around 847mm of rain a year across roughly 130 rain days, along with about 35 nights of air frost, and the ridge at Sanderstead and Warlingham sits in the same band. New Addington has been called Little Siberia since it was built in the 1930s, and the nickname is honest - it genuinely runs colder than the rest of the borough, which means more freeze-thaw cycles working on mortar every winter. When a gale comes through, the first calls come from up there.",
      publicId: `${P}/storm-damaged-roof-missing-tiles-croydon`,
      alt: "Storm damaged roof with missing tiles exposing the battens beneath, Croydon",
    },
    whatToLook: [
      {
        h: "Do they charge to attend?",
        p: "A call-out fee creates a bad incentive: having driven out and charged you, there is pressure to find work. Free attendance means the person on your roof has no reason to invent a problem.",
      },
      {
        h: "Is the temporary fix actually temporary?",
        p: "Sheeting is a legitimate stage one. Sheeting still on the roof six weeks later is a failure. Ask when the permanent repair is booked for, and get the date before they leave.",
      },
      {
        h: "Are they photographing anything?",
        p: "If you might claim, the state of the roof before it was touched is the whole case. A firm that does this regularly will photograph as a matter of course without being asked.",
      },
    ],
    comparison: {
      header: "Make-Safe Versus A Permanent Repair",
      intro:
        "These are two different pieces of work and it helps to be clear which one is happening on the day.",
      proLabel: "Emergency make-safe",
      altLabel: "Permanent repair",
      rows: [
        {
          label: "What it is for",
          pro: "Stopping water entering the building today.",
          alt: "Removing the fault so it does not happen again.",
        },
        {
          label: "When it happens",
          pro: "Same day where we possibly can, in whatever weather.",
          alt: "Booked for a dry day, because mortar and adhesives will not cure in the wet.",
        },
        {
          label: "How long it lasts",
          pro: "Weeks. It is a holding measure and should be treated as one.",
          alt: "Years, and it carries the ten year workmanship guarantee.",
        },
        {
          label: "Materials",
          pro: "Sheeting, temporary fixings, sometimes a mechanical clamp on a split gutter.",
          alt: "Matched covering, code 4 lead where lead belongs, mortar suited to the brick.",
        },
        {
          label: "Access",
          pro: "Ladder or tower, whatever gets somebody up there safely and quickly.",
          alt: "Whatever the job actually needs, which on the taller frontages means scaffold.",
        },
        {
          label: "Cost",
          pro: "Charged for the work done, with nothing added for the hour or the day.",
          alt: "Quoted in writing before it starts, itemised, with access priced separately.",
        },
      ],
    },
    teaser: {
      h: "What to do before anybody arrives",
      p: "Move what you can out from underneath, and put a container down. If the ceiling is bulging, do not stand under it - a saturated plasterboard ceiling can drop all at once. If you can do it safely from a landing, put a small hole in the lowest point of the bulge to let the water out in a controlled way. Do not go into the loft with a torch and start pulling at wet insulation, and do not get on the roof yourself in wind.",
      publicId: `${P}/rain-running-off-roof-edge-croydon`,
      alt: "Heavy rain running off the edge of a roof at night in Croydon",
      ctaText: "See what a repair costs",
      ctaHref: "/roof-repair-cost",
    },
    costText:
      "Attendance is free and the work is charged for what it actually takes. A gutter cleared is a small bill. Sheeting a stripped slope on a windy evening takes two people and costs more. What you will never see is a different price for the same work because of the hour it happened at.",
    faqs: [
      {
        question: "Do you charge extra for evenings or weekends?",
        answer:
          "No. The work is priced on what it takes, not on when you needed it. There is no call-out fee either, so if somebody comes out and the answer is that nothing needs doing tonight, that visit costs you nothing.",
      },
      {
        question: "How fast can you get to me?",
        answer:
          "We are based in South Croydon, so most of the borough is fifteen minutes away and the outer parts of the patch - Caterham, Warlingham, West Wickham, Wallington - are not much further. For water actively coming into a house we will get to you the same day wherever it is possible to do so safely.",
      },
      {
        question: "Will you go on a roof in a storm?",
        answer:
          "Not during it. Nobody responsible will, and anybody who says they will should worry you. What can usually be done during a storm is stopping the damage getting worse from inside, and containing the water. Work on the roof itself starts when the wind has dropped enough to be safe.",
      },
      {
        question: "Should I claim on my insurance?",
        answer:
          "It depends on your excess and on what caused it. Storm damage is normally covered, wear and tear normally is not. Below about a thousand pounds it is often not worth the claim once the excess and the effect on your premium are taken into account. You will get the photographs and a written report either way, and you can decide with the numbers in front of you.",
      },
      {
        question: "Can you just do the temporary fix and leave it there?",
        answer:
          "You can decide that, but it is a bad idea and we will say so. Sheeting is designed to hold for weeks, not seasons. It flogs itself to pieces in wind, the fixings work loose, and you end up with two problems instead of one.",
      },
      {
        question: "My ceiling has come down. Do you do that as well?",
        answer:
          "We stop the water and make the roof safe. Plastering and redecoration are somebody else's trade and we will not pretend otherwise, though we are happy to say what needs doing and in what order so the ceiling is not made good before the roof is.",
      },
    ],
    related: [
      { href: "/storm-damage-repairs", label: "Storm damage repairs" },
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/guttering", label: "Guttering" },
    ],
  },

  // ---------------------------------------------------------------- storm --
  {
    slug: "/storm-damage-repairs",
    serviceName: "Storm Damage Repairs",
    metaTitle: "Storm Damage Roof Repairs In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Storm damage roof repairs in Croydon. Same day make-safe, full photographic report for your insurer, and a permanent repair with a 10 year guarantee.",
    h1: "Storm Damage Roof Repairs In Croydon",
    h2: "Has the wind taken something off your roof?",
    h3: "Make-safe, insurance documentation and permanent repairs after wind and storm damage in Croydon",
    heroPublicId: `${P}/storm-damaged-roof-missing-tiles-croydon`,
    heroAlt: "Roof with storm damage in Croydon, tiles gone and battens exposed to the weather",
    intro:
      "Wind does not usually take a roof apart from the top down. It finds an edge - a loose verge tile, a lifted ridge, a gap where a slate had already slipped - and works underneath it. That is why the damage after a gale so often starts at a corner or along a hip, and why a roof that survived twenty winters can lose a whole course in one night.",
    insight:
      "After a named storm, the calls we get from the ridge at Sanderstead, Warlingham and New Addington run several times ahead of the calls from the low ground in the north of the borough.",
    symptoms: [
      {
        sign: "Tiles or slates in the garden",
        cause:
          "The obvious one. What matters more is the gap they left, because that edge is now what the next gale will pull at.",
      },
      {
        sign: "Ridge or hip tiles visibly out of line",
        cause:
          "Mortar bedding has failed. On the interwar stock across Shirley, Selsdon and Coulsdon this is the single most common storm failure, and it is usually age rather than the storm itself.",
      },
      {
        sign: "Lead flashing lifted or rolled back",
        cause:
          "Wind has got under an unwedged edge. Common where a previous repair used mortar instead of lead wedges to hold the flashing into the joint.",
      },
      {
        sign: "A branch down across the roof",
        cause:
          "Croydon Council looks after around 33,000 street trees and there is heavy private planting across Shirley, Selsdon and Purley. Impact damage tends to break battens as well as covering, so it needs looking at from inside too.",
      },
    ],
    benefits: [
      {
        title: "Documented before it is touched",
        text: "Photographs of the damage in the state the storm left it. That is what an insurer wants and it cannot be recreated afterwards.",
      },
      {
        title: "A report that names the cause",
        text: "Insurers distinguish sharply between storm damage and gradual wear. A written report that sets out which one this was is what makes a claim straightforward.",
      },
      {
        title: "Made safe the same day",
        text: "Sheeted and secured so the next band of rain does not turn a roofing job into a plastering job as well.",
      },
      {
        title: "The whole roof checked, not just the hole",
        text: "Wind that lifted one course has usually loosened others nearby. Fixing only what is visibly missing is how people end up ringing again after the next gale.",
      },
      {
        title: "Matched materials",
        text: "Concrete tile profiles from the interwar decades are still obtainable, and reclaimed slate is available for the Victorian stock. A patch in the wrong material is permanent and obvious.",
      },
      {
        title: "Guaranteed for ten years",
        text: "In writing, handed over on completion, covering the work carried out.",
      },
    ],
    localAngle: {
      h: "Croydon has form for this",
      p: "The Great Storm of October 1987 went straight over south London, and Croydon lost a great deal of its finest woodland to it - Purley Beeches and Heathfield among them. Anybody who was here remembers it. What matters for a roof now is the pattern it demonstrated: the damage concentrated on the high, exposed ground in the south of the borough and along the tree-lined roads, and it started at edges and corners rather than in the middle of slopes. Nothing since has changed that. The roofs that lose tiles in a February gale are still the ones on the ridge, and still the ones with a loose verge nobody had noticed.",
      publicId: `${P}/hillside-housing-rooftops-croydon`,
      alt: "Housing on rising ground in the Croydon area, the exposed stock most affected by storms",
    },
    whatToLook: [
      {
        h: "Are they writing anything down?",
        p: "A verbal assurance that it was storm damage is worth nothing to a loss adjuster. You want dated photographs and a written description of the mechanism of failure.",
      },
      {
        h: "Are they looking beyond the gap?",
        p: "The tiles that came off are the ones you can see. The ones that were lifted and dropped back are the ones that go next. A proper storm inspection covers the whole slope and the ridge line.",
      },
      {
        h: "Are they pressuring you toward a claim?",
        p: "Plenty of storm-chasing outfits appear in a borough after a named storm and push everyone toward a full replacement on insurance. Be wary. Much storm damage is a half day's work.",
      },
    ],
    comparison: {
      header: "Storm Damage Or Wear And Tear?",
      intro:
        "This distinction decides whether your insurer pays, so it is worth understanding before you pick up the phone to them.",
      proLabel: "Reads as storm damage",
      altLabel: "Reads as wear and tear",
      rows: [
        {
          label: "Timing",
          pro: "Appeared during or immediately after recorded high winds.",
          alt: "Developed gradually over months or seasons.",
        },
        {
          label: "What the break looks like",
          pro: "Fresh, clean fractures. Bright, unweathered edges where material has snapped.",
          alt: "Weathered, dirty, mossed edges showing the break has been open a long time.",
        },
        {
          label: "Pattern on the roof",
          pro: "Concentrated at an edge, a corner, a verge or a hip where wind could get under.",
          alt: "Scattered across the slope, or a whole slope failing evenly.",
        },
        {
          label: "Condition of the fixings",
          pro: "Nails intact but pulled, or battens split by force.",
          alt: "Nails corroded through, battens soft. Classic nail fatigue on older slate.",
        },
        {
          label: "Usual insurer position",
          pro: "Covered, subject to your excess.",
          alt: "Not covered. Treated as maintenance.",
        },
        {
          label: "What we give you",
          pro: "Photographs, a written report and, where it helps, the local wind data for the date.",
          alt: "The same honest assessment, and a price to put it right without a claim.",
        },
      ],
    },
    teaser: {
      h: "Do not get on the roof to look",
      p: "More people are hurt inspecting storm damage than are hurt by it. A roof that has just lost tiles has loose material on it, the surface is wet, and the wind that caused the problem has not usually finished. Photograph what you can see from the ground and from an upstairs window, look for daylight from inside the loft, and leave the rest. Attendance is free, so there is nothing to be gained by climbing up first.",
      publicId: `${P}/scaffold-on-brick-mansion-block-croydon`,
      alt: "Scaffold erected against a brick mansion block in Croydon for safe access to the roof",
      ctaText: "See what a repair costs",
      ctaHref: "/roof-repair-cost",
    },
    costText:
      "Storm work splits into the make-safe and the repair. Refixing a handful of displaced tiles is usually a few hundred pounds. Rebedding a full ridge line runs higher because it is a day's work and the mortar has to be right. Where a claim is involved we will price the work properly and give you the documentation, and we will not inflate a quote because an insurer rather than you is paying it.",
    faqs: [
      {
        question: "How windy does it have to have been to count as a storm?",
        answer:
          "Many policies use gusts of 47mph or above as the threshold, though the wording varies and some now avoid a fixed figure. What matters more in practice is that the damage is consistent with wind rather than with age. We will tell you honestly which of the two your roof looks like, because a claim built on the wrong story tends to fail at the survey stage.",
      },
      {
        question: "Will you deal with my insurance company?",
        answer:
          "We will give you everything the insurer needs - dated photographs, a written report describing what failed and why, and an itemised quote. We are not loss assessors and will not represent you in the claim itself, which is a separate regulated business and not one to pretend at.",
      },
      {
        question: "A tree came down on my roof. Who pays?",
        answer:
          "If it is your tree, your buildings insurance normally handles it. If it was a street tree, that is a matter for Croydon Council, or for Sutton, Tandridge or Bromley depending on which side of the boundary you are on. Either way the roof needs making safe first and the argument about who pays can follow.",
      },
      {
        question: "Some tiles slipped but nothing is leaking. Is it urgent?",
        answer:
          "More urgent than it feels. A displaced tile exposes the felt below to sunlight and to wind, and it gives the next gale an edge to lift. Left through a winter, a job that was one tile becomes a job that is a slope. It is rarely expensive to deal with straight away.",
      },
      {
        question: "Can you match tiles on a 1930s house?",
        answer:
          "Usually. The concrete tile profiles used across the interwar estates in Shirley, Selsdon, Sanderstead and Coulsdon are largely still made or still obtainable reclaimed. Where an exact match genuinely does not exist any more, the honest options are to take matching tiles from a less visible slope and put the new ones there instead, or to accept a small visible difference. You get told which situation you are in.",
      },
      {
        question: "How long after a storm should I get it looked at?",
        answer:
          "Straight away for anything letting water in. Within a few weeks for anything else, and certainly before the next spell of wind. Most policies also require you to take reasonable steps to prevent further damage, so leaving an open roof through a wet month can itself weaken a claim.",
      },
    ],
    related: [
      { href: "/emergency-roof-repairs", label: "Emergency roof repairs" },
      { href: "/chimney-repairs", label: "Chimney repairs" },
      { href: "/roof-replacement", label: "Roof replacement" },
    ],
  },

  // ------------------------------------------------------------ flat roof --
  {
    slug: "/flat-roof-repairs",
    serviceName: "Flat Roof Repairs",
    metaTitle: "Flat Roof Repairs In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Flat roof repairs in Croydon. Felt, EPDM, GRP and asphalt on extensions, dormers and garages. Falls corrected properly. Free survey, 10 year guarantee.",
    h1: "Flat Roof Repairs In Croydon",
    h2: "Is there water sitting on your extension roof?",
    h3: "Felt, rubber, fibreglass and asphalt repairs to extensions, dormers, garages and porches across Croydon",
    heroPublicId: `${P}/flat-roof-extension-rear-of-semi-croydon`,
    heroAlt: "Flat roofed rear extension on a semi-detached house in Croydon",
    intro:
      "Most flat roofs in Croydon do not fail because the covering was bad. They fail because the deck underneath them was never laid to enough of a fall, so water sits on the surface instead of running off it. A puddle that is still there two days after the rain is the fault. The split in the felt is only the symptom.",
    insight:
      "Standing water, not the covering, is what has usually finished a flat roof by the time somebody rings us about a split in it.",
    symptoms: [
      {
        sign: "A puddle that never dries out",
        cause:
          "Insufficient fall, or a deck that has sagged between joists. Recovering the roof without correcting this simply resets the clock on the same failure.",
      },
      {
        sign: "Blistering and bubbling across the surface",
        cause:
          "Moisture trapped between layers, expanding in the sun. Common on older felt that has been overlaid rather than stripped.",
      },
      {
        sign: "Splits along a straight line",
        cause:
          "Movement in the deck below, usually at a board joint. It will reopen through any patch put over the top of it unless the movement is dealt with.",
      },
      {
        sign: "Water coming in at the wall, not the middle",
        cause:
          "The upstand or the flashing where the flat roof meets the house. This is where the majority of flat roof leaks actually originate, and it is the detail most patch repairs ignore.",
      },
    ],
    benefits: [
      {
        title: "We look at the falls first",
        text: "Before anything about materials is discussed. If water is standing, that is the conversation, because no covering survives being permanently submerged.",
      },
      {
        title: "Four systems, honestly compared",
        text: "Felt, EPDM rubber, GRP fibreglass and asphalt all have a place. You get told which suits your roof and your budget rather than whichever one we happen to prefer.",
      },
      {
        title: "Upstands and flashings done properly",
        text: "Where the flat roof meets the wall is where most of them leak. Dressed correctly into the brickwork, not smeared over with mastic.",
      },
      {
        title: "The deck gets checked",
        text: "Soft or rotten boards are replaced before anything goes over them. Laying a new covering onto a wet deck traps the problem underneath it.",
      },
      {
        title: "Repair where repair is right",
        text: "A sound felt roof with one split does not need stripping. You will be told when a repair is the sensible answer and when it is throwing money at a roof that is finished.",
      },
      {
        title: "Ten year guarantee",
        text: "On the workmanship, with the manufacturer's own cover on the membrane on top of it.",
      },
    ],
    localAngle: {
      h: "Croydon has an unusual number of flat roofs",
      p: "Two things put more flat roofs per street here than in most of outer London. The first is the rear extension: the interwar semis across Shirley, Selsdon, Sanderstead and Coulsdon have been extended at the back on a very large scale, and almost all of those extensions are flat. The second is the estate building of the 1960s and 1970s, most visibly at Forestdale on the edge of Selsdon, where flat and very shallow pitched roofs were the design language rather than an afterthought. On the Victorian terraces further north, the back addition is frequently flat as well. It adds up to a lot of houses whose weak point is a roof nobody can see from the street.",
      publicId: `${P}/completed-rear-extension-flat-roof-croydon`,
      alt: "Completed flat roofed rear extension on a Croydon house",
    },
    whatToLook: [
      {
        h: "Do they mention the falls?",
        p: "Anyone who quotes to recover a flat roof without going up and checking where the water sits is quoting for a covering, not a solution. Ask where the water currently goes and what will change.",
      },
      {
        h: "What are they doing at the edges?",
        p: "Drip trims, upstands and the junction with the house wall are where flat roofs actually fail. A quote that details the middle and is vague about the perimeter is the wrong way round.",
      },
      {
        h: "Is the deck included?",
        p: "A quote that assumes the boards are sound, with a vague note about extra charges if they are not, can double on the day. Better to have the deck inspected and any replacement priced before you agree to anything.",
      },
    ],
    comparison: {
      header: "Which Flat Roof System?",
      intro:
        "There is no single best answer. It depends on the size of the roof, whether anyone walks on it, and how long you intend to be in the house.",
      proLabel: "EPDM rubber",
      altLabel: "Torch-on felt",
      rows: [
        {
          label: "Typical life",
          pro: "Commonly quoted at 30 years or more, and it is a single sheet with no seams on a domestic extension.",
          alt: "Around 20 years for a good three layer system, less for cheaper two layer work.",
        },
        {
          label: "Seams",
          pro: "Usually none on an extension-sized roof, which removes the most common point of failure.",
          alt: "Lapped and torched joints throughout. Done well they last; done badly they are the first thing to go.",
        },
        {
          label: "Cost",
          pro: "Higher up front.",
          alt: "The cheapest of the four systems to install.",
        },
        {
          label: "Complicated shapes",
          pro: "Harder. Lots of upstands, pipes and corners mean lots of cutting and bonding.",
          alt: "Easier to work around awkward details and small areas.",
        },
        {
          label: "Foot traffic",
          pro: "Tolerates occasional access. Not a balcony surface without a walkway laid over it.",
          alt: "Similar, and easier to patch locally if something does get damaged.",
        },
        {
          label: "Naked flame on site",
          pro: "None. Cold applied, which matters on a timber deck against an old house.",
          alt: "Gas torch used on the deck, with the fire precautions that implies.",
        },
      ],
    },
    teaser: {
      h: "GRP and asphalt, for completeness",
      p: "Fibreglass gives a hard, seamless, walkable finish and suits balconies and small complicated roofs, but it is unforgiving of movement in the deck below and needs the timber to be properly dry when it is laid. Mastic asphalt is the traditional answer, extremely long lived and still the right call on some of the older flat roofs in the north of the borough, but it is a specialist trade and priced accordingly. Both get mentioned when they are genuinely the better option for your roof.",
      publicId: `${P}/flat-roof-detail-brick-upstand-croydon`,
      alt: "Flat roof detail where the covering meets a brick upstand, a common leak point in Croydon",
      ctaText: "See what a repair costs",
      ctaHref: "/roof-repair-cost",
    },
    costText:
      "A localised repair to a sound flat roof is usually a few hundred pounds. Recovering a typical single storey rear extension in Croydon runs into the low thousands, with the covering system, the size and the state of the deck driving most of the difference. Where the falls need building up before the new covering goes down, that is priced as its own line so you can see what you are paying to correct the original mistake.",
    faqs: [
      {
        question: "How long should a flat roof last?",
        answer:
          "A three layer felt system laid properly gives around twenty years. EPDM rubber is commonly quoted at thirty or more. GRP sits somewhere between the two and depends heavily on how dry the deck was when it went on. In every case the falls matter more than the material - a well laid roof holding a permanent puddle will not reach any of those figures.",
      },
      {
        question: "Can you just patch it?",
        answer:
          "Sometimes, and where it is right we will. A single split in an otherwise sound felt roof is a legitimate repair. What we will not do is patch a roof that is blistered across its whole surface, or one holding standing water, because that is spending money to buy a few months.",
      },
      {
        question: "Do I need planning permission for a new flat roof?",
        answer:
          "For like-for-like recovering, no, anywhere in the borough. The exception worth knowing is the Chatsworth Road conservation area in Addiscombe, where an Article 4 direction has removed permitted development rights for all alterations to the roof of a dwelling house since January 2016. If you are in Caterham or Warlingham you are in Tandridge rather than Croydon, and if you are in Wallington you are in Sutton, so check with the right authority.",
      },
      {
        question: "Why does my extension roof leak at the house wall?",
        answer:
          "Because that junction is the hardest part of a flat roof to get right and the easiest to bodge. The covering should turn up the wall to form an upstand, and that upstand should be covered by a flashing properly chased into the brickwork. A great many are finished with a bead of mastic instead, which lasts about two years.",
      },
      {
        question: "Can a flat roof be insulated at the same time?",
        answer:
          "Yes, and if the covering is coming off anyway it is the moment to do it. Insulating above the deck as a warm roof avoids the condensation problems that come from insulating between the joists in a shallow space. It adds to the cost and it changes the height of the finished roof, so it needs deciding before the job starts rather than during it.",
      },
      {
        question: "Is there any way to fix standing water without recovering the whole thing?",
        answer:
          "Occasionally. Tapered insulation can be laid over an existing deck to create a fall, which is less disruptive than rebuilding the structure below. It is not cheap and it raises the roof level, so it does not suit every situation, but where the deck is otherwise sound it can be the sensible answer.",
      },
    ],
    related: [
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/guttering", label: "Guttering" },
      { href: "/roof-replacement", label: "Roof replacement" },
    ],
  },

  // -------------------------------------------------------------- chimney --
  {
    slug: "/chimney-repairs",
    serviceName: "Chimney Repairs",
    metaTitle: "Chimney Repairs In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Chimney repairs in Croydon. Repointing, flaunching, lead flashings, rebuilds and removals on Victorian and interwar stacks. Free survey, 10 year guarantee.",
    h1: "Chimney Repairs In Croydon",
    h2: "Is the damp in your bedroom coming from the stack?",
    h3: "Repointing, flaunching, flashings, rebuilds and removals on Croydon chimneys",
    heroPublicId: `${P}/brick-chimney-pots-slate-roof-croydon`,
    heroAlt: "Brick chimney stack with pots on a slate roof in Croydon",
    intro:
      "A chimney is the most exposed masonry on your house. It stands proud of the roof on all four sides, it has no roof of its own beyond a thin bed of mortar at the top, and it is full of holes by design. When damp appears in an upstairs room near a chimney breast, the stack is the first thing to look at and the last thing most people think of.",
    insight:
      "Full rebuilds are the minority. Most of the stacks we are asked to condemn can be repointed and reflashed for a fraction of the money.",
    symptoms: [
      {
        sign: "Damp patch on a chimney breast in an upstairs room",
        cause:
          "Water entering the stack and travelling down inside it. Usually failed flaunching at the top or open joints in the pointing, not the flashing where it meets the roof.",
      },
      {
        sign: "White powdery deposit on the brickwork",
        cause:
          "Salts being carried out of the brick by water passing through it. The stack is saturated and has been for some time.",
      },
      {
        sign: "Mortar visibly missing between bricks",
        cause:
          "Frost has done it. The exposed south of the borough gets around 35 nights of air frost a year, and every one of them works on wet mortar.",
      },
      {
        sign: "Dark staining spreading from where the stack meets the roof",
        cause:
          "The flashing. Often a previous repair where mortar or mastic was used in place of properly dressed and wedged lead.",
      },
    ],
    benefits: [
      {
        title: "Repair is the default position",
        text: "A stack that looks alarming from the ground is frequently sound below the top metre. We work out how far down the damage actually goes before recommending anything drastic.",
      },
      {
        title: "Lead, not mortar",
        text: "Flashings get done in code 4 lead, dressed and wedged into the joint. Mortar fillets crack within a couple of winters and they are the commonest bad repair we find on Croydon stacks.",
      },
      {
        title: "Mortar matched to the brick",
        text: "Victorian London stock brick is soft and wants a lime-rich mix. Pointing it in hard modern cement traps water in the brick and spalls the faces off it.",
      },
      {
        title: "The top gets dealt with",
        text: "Flaunching - the mortar bed the pots sit in - is where most stacks let water in. It is also the bit nobody photographs and nobody quotes for.",
      },
      {
        title: "Removal done properly",
        text: "If a stack is redundant and coming down, that means capping the flue, making the roof good with matched covering and dealing with the breast inside, not just knocking the top off.",
      },
      {
        title: "Ten year guarantee",
        text: "Written and handed over, covering the work carried out on the stack.",
      },
    ],
    localAngle: {
      h: "Two very different sorts of chimney in one borough",
      p: "In the north of Croydon the stacks are Victorian and Edwardian: tall, slim, London stock brick, often shared with next door and often carrying four or more pots. They are soft, they have usually been pointed at least once in hard cement by somebody who did not know better, and the party stacks come with the complication that half of the thing belongs to your neighbour. Up the hill in Sanderstead, Selsdon, Purley and Coulsdon the stacks are interwar: squatter, in harder brick, less decorative, and generally in better condition, but sitting on more exposed roofs and taking more frost. The two need different mortar and a different order of work.",
      publicId: `${P}/croydon-rooftops-chimney-stacks-skyline`,
      alt: "Croydon rooftops with Victorian chimney stacks against a grey sky",
    },
    whatToLook: [
      {
        h: "Are they quoting to rebuild without going up?",
        p: "You cannot tell a stack's condition from the pavement. Bricks that look ruined through binoculars are often only surface-spalled. Insist somebody has actually been up and seen it before a rebuild is priced.",
      },
      {
        h: "What mortar are they proposing?",
        p: "On a Victorian stack the answer should involve lime. If the quote says cement and nothing else, the brick faces will start coming off within a few winters and you will have paid for the privilege.",
      },
      {
        h: "Is the flaunching in the price?",
        p: "It is the mortar bed the pots sit in, at the very top, and it is the single most common entry point. It is also easy to leave out of a quote and expensive to come back for once the scaffold has gone.",
      },
    ],
    comparison: {
      header: "Repoint, Rebuild Or Remove?",
      intro: "Three genuinely different jobs, and the right one depends on how far the damage goes.",
      proLabel: "Repoint and reflash",
      altLabel: "Rebuild the stack",
      rows: [
        {
          label: "When it applies",
            pro: "Brickwork sound, joints open, flaunching cracked, flashing tired.",
          alt: "Bricks spalled through rather than on the surface, or the stack leaning or moving.",
        },
        {
          label: "How much comes down",
          pro: "Nothing. Joints are raked out and refilled, pots rebedded, new lead dressed in.",
          alt: "Down to a sound course, often below roof level, then rebuilt in matching brick.",
        },
        {
          label: "Cost",
          pro: "The lower of the two by a wide margin, with access usually the biggest single line.",
          alt: "Several times a repoint, and scaffold is unavoidable.",
        },
        {
          label: "Time",
          pro: "A day or two on most stacks.",
          alt: "Several days, plus curing time before the flashings go back.",
        },
        {
          label: "Party stacks",
          pro: "Straightforward. Repointing your half affects nobody else.",
          alt: "Needs a conversation with your neighbour, and normally a Party Wall notice.",
        },
        {
          label: "Lifespan afterwards",
          pro: "Decades, provided the mortar suits the brick.",
          alt: "Effectively a new stack.",
        },
      ],
    },
    teaser: {
      h: "Taking a chimney out altogether",
      p: "Plenty of Croydon stacks now serve nothing at all. Removing one is a reasonable decision and it takes a permanent maintenance liability off your roof, but it needs doing thoroughly. Any remaining flue has to be capped and ventilated so the breast does not sweat, the roof has to be closed up in covering that matches what is already there, and if the breast is coming out inside the house then whatever the stack was helping to support has to be dealt with first. On a party stack you can only remove your own half, which is a structural conversation rather than a roofing one.",
      publicId: `${P}/tall-red-chimney-pots-stone-roof-croydon`,
      alt: "Tall red chimney pots on an older roof in the Croydon area",
      ctaText: "See what a repair costs",
      ctaHref: "/roof-repair-cost",
    },
    costText:
      "Repointing a stack and renewing the flashings is typically a four figure job once access is included, and access is usually the largest part of it. A full rebuild costs several times that. Reflaunching and rebedding pots on their own is cheaper again. If scaffold is going up for other work, doing the chimney at the same time saves a meaningful amount, which is worth thinking about if the stack is borderline.",
    faqs: [
      {
        question: "Do I need to do anything if the chimney is not used?",
        answer:
          "Yes. An unused stack still gets rained on and still lets water into the house. If anything it does worse, because there is no warm flue drying it out from the inside. Redundant stacks are among the wettest we see. Either maintain it or take it down, but leaving it alone is the option that causes damage.",
      },
      {
        question: "The stack is shared with next door. What can I do to it?",
        answer:
          "You can repair and repoint your own side without agreement. Anything structural - taking it down, rebuilding it, cutting into it - engages the Party Wall etc. Act 1996 and needs notice served on your neighbour. It is not usually a problem, but it does need doing before work starts rather than after somebody complains.",
      },
      {
        question: "Why has my chimney been repointed and still leaks?",
        answer:
          "Two usual reasons. Either the flaunching at the top was not renewed, so water is still going in above the pointing, or the pointing was done in hard cement on soft brick, which drives water into the brick instead of letting it evaporate out of the joint. Both are common and both are fixable.",
      },
      {
        question: "Is a leaning chimney dangerous?",
        answer:
          "It can be, and it is worth getting looked at rather than watched. Some lean is old and stable, caused by sulphate attack from years of burning coal, and has not moved in decades. Some is active. Photographs against a straight edge and a look at the mortar joints will usually tell you which, and that assessment is free.",
      },
      {
        question: "Do you fit chimney cowls?",
        answer:
          "Yes. A capping cowl on a disused flue keeps rain out while letting the flue breathe, which is what stops the breast going damp. On a working flue the cowl needs to suit the appliance, so that is worth getting right rather than fitting whatever is on the van.",
      },
      {
        question: "Will I need planning permission?",
        answer:
          "Repair and repointing, no. Removal is normally permitted development on an ordinary house, but not if you are in a conservation area, and Croydon has 21 of them. Addiscombe's Chatsworth Road area is stricter still, with an Article 4 direction covering all roof alterations. Caterham and Warlingham are Tandridge, Wallington is Sutton, West Wickham is Bromley. Ask the right council.",
      },
    ],
    related: [
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/storm-damage-repairs", label: "Storm damage repairs" },
      { href: "/roof-replacement", label: "Roof replacement" },
    ],
  },

  // ------------------------------------------------------------- guttering --
  {
    slug: "/guttering",
    serviceName: "Guttering",
    metaTitle: "Guttering & Gutter Repairs In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Gutter repairs, replacement and clearing in Croydon. Cast iron and uPVC, downpipes, gullies and shared Victorian gutters. Free survey, 10 year guarantee.",
    h1: "Guttering In Croydon",
    h2: "Is water running down the wall instead of down the pipe?",
    h3: "Clearing, repairs, realignment and full replacement of gutters and downpipes across Croydon",
    heroPublicId: `${P}/rainwater-overflowing-gutter-croydon`,
    heroAlt: "Rainwater overflowing a blocked gutter on a house in Croydon",
    intro:
      "Guttering is the cheapest part of your roof and it causes a disproportionate share of the damage. Water that should be going into a gully ends up going down the wall instead, and it does it quietly for months. By the time anybody notices, the problem is not the gutter any more - it is the render, the pointing and the inside of the wall.",
    insight:
      "Plenty of the damp problems we get called to are nothing to do with the roof. They are gutters, and the bill lands nowhere near where the homeowner had braced for it.",
    symptoms: [
      {
        sign: "A vertical green or black stripe down the wall",
        cause:
          "Water has been overflowing at that point for a long time. Algae marks the route. The gutter above it is either blocked, split or dropped.",
      },
      {
        sign: "Water sheeting over the front edge in heavy rain",
        cause:
          "Blockage, or a gutter that has lost its fall. Very common under the tree cover in Shirley, Selsdon and West Wickham from October onwards.",
      },
      {
        sign: "Dripping from the joints between lengths",
        cause:
          "Failed seals on uPVC, or corroded joints on cast iron. Cheap to fix and it does not improve on its own.",
      },
      {
        sign: "A damp patch at the base of an outside wall",
        cause:
          "The downpipe is discharging onto the ground or into a blocked gully rather than into the drain. This one soaks the wall from the bottom up.",
      },
    ],
    benefits: [
      {
        title: "Cleared, then actually checked",
        text: "Anyone can scoop leaves out. The point of the visit is to find out why it filled up and whether the fall is still right, which is what stops it happening every year.",
      },
      {
        title: "Cast iron kept where it should be",
        text: "On the Victorian stock in Addiscombe, South Norwood and the older parts of South Croydon, original cast iron is often worth repairing rather than ripping off. It also looks right, which matters in a conservation area.",
      },
      {
        title: "Brackets and falls reset",
        text: "Most overflowing gutters are not blocked. They have dropped, and the water pools instead of running. Resetting the fall is a proper fix and it is not expensive.",
      },
      {
        title: "Downpipes traced to the drain",
        text: "There is no point clearing a gutter if the gully at the bottom is silted up and the water backs up again in the next downpour.",
      },
      {
        title: "Shared gutters handled sensibly",
        text: "Terraces in the north of the borough often run one gutter across several houses. We will tell you plainly which part is yours and what needs a word with the neighbours.",
      },
      {
        title: "Ten year guarantee on installed work",
        text: "On replacement and repair work. Clearing is maintenance and is priced as such.",
      },
    ],
    localAngle: {
      h: "Croydon's trees are the reason your gutters fill",
      p: "The council looks after somewhere around 33,000 street trees, and that is before the private planting in the residential roads. Shirley and Selsdon run up into serious tree cover on the Addington Hills and around Selsdon Wood, West Wickham has mature planting through most of its interwar roads, and Purley and Sanderstead are wooded on the slopes. From late October the gutters on those roads fill with leaf litter faster than anywhere in the borough. Further north, in Thornton Heath and Norbury, it is less leaf and more grit and moss washed off older roof coverings, but the effect on a shallow-falling gutter is the same.",
      publicId: `${P}/moss-growing-in-roof-gutter-croydon`,
      alt: "Moss and debris building up inside a roof gutter in Croydon",
    },
    whatToLook: [
      {
        h: "Do they check the fall?",
        p: "A gutter has to drop steadily towards the outlet. Brackets sag over time and the water then sits in the middle. If nobody puts a level on it, nobody has diagnosed anything.",
      },
      {
        h: "Will they follow it to the drain?",
        p: "The gully at the bottom of the downpipe silts up. A cleared gutter feeding a blocked gully still floods, and you will be told the gutter was done.",
      },
      {
        h: "Are they pushing full replacement?",
        p: "Plenty of guttering only needs new brackets, new seals or a single replacement length. Wholesale replacement of a sound run is an easy sale and often unnecessary.",
      },
    ],
    comparison: {
      header: "Cast Iron Or uPVC?",
      intro:
        "Relevant on the older stock in the north of the borough, and in the conservation areas, where the choice is not purely practical.",
      proLabel: "Cast iron",
      altLabel: "uPVC",
      rows: [
        {
          label: "Life expectancy",
          pro: "A century or more if it is kept painted.",
          alt: "Typically 20 to 30 years before it goes brittle and the seals give up.",
        },
        {
          label: "Maintenance",
          pro: "Needs repainting periodically. Neglect it and it rusts through at the joints.",
          alt: "Essentially none beyond clearing it out.",
        },
        {
          label: "Cost",
          pro: "Several times uPVC, both for the material and for the labour to hang it.",
          alt: "The cheapest option by a distance.",
        },
        {
          label: "Appearance on period houses",
          pro: "Correct. The deep half-round profile is part of what a Victorian elevation looks like.",
          alt: "Noticeably wrong at close range, and increasingly obvious as the plastic ages.",
        },
        {
          label: "Conservation areas",
          pro: "Generally what the council will expect on a front elevation.",
          alt: "May be resisted where it is visible from the street.",
        },
        {
          label: "Repairability",
          pro: "Individual lengths and joints can be replaced without touching the rest.",
          alt: "Sections clip out easily, though matching an older profile can be awkward.",
        },
      ],
    },
    teaser: {
      h: "Clearing is worth doing before winter, not after",
      p: "The cheapest gutter job is the one booked in November. The expensive one is the same gutter in February, after three months of water down the wall, when the pointing has gone soft and the plaster inside has started to bloom. There is nothing clever about it - it is simply the maintenance job with the best return of anything on a house, and the one most consistently skipped.",
      publicId: `${P}/water-pouring-off-blocked-gutter-croydon`,
      alt: "Water pouring off the edge of a roof past a blocked gutter in Croydon",
      ctaText: "See what a repair costs",
      ctaHref: "/roof-repair-cost",
    },
    costText:
      "Clearing and checking gutters on a typical Croydon semi is cheap. Repairs - brackets, resetting a fall, a replacement length - sit in the low hundreds. Full uPVC replacement on a two storey house runs from the high hundreds into the low thousands. Cast iron is a different order of cost and gets quoted on its own.",
    faqs: [
      {
        question: "How often should gutters be cleared?",
        answer:
          "Once a year for most houses, in late autumn once the leaves are down. On the heavily wooded roads in Shirley, Selsdon, Purley and West Wickham, twice a year is more realistic - one clear in late autumn and one in spring after the blossom and seed drop.",
      },
      {
        question: "My gutter overflows but it is not blocked. Why?",
        answer:
          "Almost certainly the fall. Brackets sag over the years and the gutter ends up level or running slightly the wrong way, so water sits in it and the next heavy shower has nowhere to go. Resetting the brackets to a proper fall fixes it and costs far less than replacement.",
      },
      {
        question: "Can you repair cast iron or does it all have to come off?",
        answer:
          "Usually repairable. Individual lengths can be swapped, joints can be remade, and rust can be treated and the run repainted. Replacing an entire cast iron system when three joints have failed is an expensive answer to a cheap problem, and on a period house in a conservation area it is often the wrong one aesthetically as well.",
      },
      {
        question: "Do you fit gutter guards?",
        answer:
          "We will if you want them, with a caveat. Under heavy tree cover, mesh guards trap leaf litter on top and can turn an annual clear into a more awkward one. They work well against birds and against the occasional twig. They are not a substitute for ever looking at the gutter again.",
      },
      {
        question: "Who is responsible for a gutter shared with next door?",
        answer:
          "On the terraces in the north of the borough this comes up constantly. Broadly, each owner is responsible for the length over their own property, but water does not respect that and a blockage two doors along will flood your wall. In practice the useful thing is to establish where the problem physically is, which is what the survey does, and then have an informed conversation with the neighbour.",
      },
      {
        question: "Is guttering work covered by the guarantee?",
        answer:
          "Installed work is - new runs, replacement lengths, downpipes, brackets and repairs all carry the ten year workmanship guarantee. Clearing is maintenance rather than installation, so it is not guaranteed against filling up again, for what should be obvious reasons.",
      },
    ],
    related: [
      { href: "/fascias-and-soffits", label: "Fascias and soffits" },
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/flat-roof-repairs", label: "Flat roof repairs" },
    ],
  },

  // ------------------------------------------------------ fascias/soffits --
  {
    slug: "/fascias-and-soffits",
    serviceName: "Fascias & Soffits",
    metaTitle: "Fascias & Soffits In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Fascia and soffit repairs and replacement in Croydon. Rotten timber, failed uPVC and blocked roof ventilation put right. Free survey, 10 year guarantee.",
    h1: "Fascias & Soffits In Croydon",
    h2: "Has the timber along your roof edge started to go?",
    h3: "Repair and replacement of fascias, soffits, bargeboards and roofline ventilation across Croydon",
    heroPublicId: `${P}/terrace-dormers-fascias-and-soffits-croydon`,
    heroAlt: "Terrace with dormer windows showing the fascia and soffit line, Croydon",
    intro:
      "The fascia is the board your gutter is screwed to. The soffit is the flat underside between it and the wall. They are unglamorous, they are the last thing anyone thinks about, and when they fail two things happen at once: the gutter loses what it is fixed to, and the ventilation path into your loft closes up. The second is the one that causes the expensive damage.",
    insight:
      "Rotten fascia timber is hardly ever the original problem. Something above it has been wetting it for years, and that something is almost always the gutter.",
    symptoms: [
      {
        sign: "Paint flaking and timber soft to a screwdriver",
        cause:
          "Wet rot, fed by water coming over the back of the gutter. The gutter needs sorting at the same time or the new board goes the same way.",
      },
      {
        sign: "Gutter sagging or pulling away from the wall",
        cause:
          "The fascia behind it has softened and the bracket screws no longer have anything to hold. Refixing the gutter alone will not last.",
      },
      {
        sign: "Condensation or black mould in the loft",
        cause:
          "Ventilation at the eaves has been blocked, very often by uPVC soffits fitted over the old timber without vents. Air has to get in at the eaves and out at the ridge.",
      },
      {
        sign: "Birds getting into the roof space",
        cause:
          "A gap has opened between the soffit and the wall, or a board has come loose. Straightforward to close, and much easier before nesting season than during it.",
      },
    ],
    benefits: [
      {
        title: "Ventilation is part of the job",
        text: "Vented soffits or over-fascia vents go in as standard. Sealing the eaves up tight is how you get condensation in the loft, and it is a very common mistake.",
      },
      {
        title: "We look at why it rotted",
        text: "Timber does not fail on its own. Something has been wetting it, usually the gutter above. Replacing the board without fixing the cause buys a few years at best.",
      },
      {
        title: "Repair where repair works",
        text: "One rotten section on an otherwise sound run does not justify replacing the whole roofline. That is a common upsell and we will tell you when it is one.",
      },
      {
        title: "Timber where timber is right",
        text: "On period properties and in Croydon's conservation areas, painted timber is often the correct answer and sometimes the required one. It is offered, not just tolerated.",
      },
      {
        title: "Capping over rot is not on offer",
        text: "Cladding uPVC over soft timber hides the problem and traps the moisture against it. If the board has gone, it comes off.",
      },
      {
        title: "Ten year guarantee",
        text: "Written, on the installed work, with the manufacturer's own cover on the boards themselves.",
      },
    ],
    localAngle: {
      h: "Deep overhangs and what they do",
      p: "The interwar semis that dominate Sanderstead, Shirley, Selsdon, Coulsdon and much of Purley were built with generous eaves overhangs and long, deep fascia and soffit runs. That was good building - it throws water clear of the wall - but it means there is a great deal of roofline timber per house, most of it now well past ninety years old, and much of it sitting behind a gutter that has been overflowing quietly for a decade. Further north the Victorian terraces are a different problem: many have no soffit at all, or a parapet instead, and there the question is usually about how the eaves are ventilated rather than what is rotting.",
      publicId: `${P}/dormer-window-on-tiled-roof-croydon`,
      alt: "Dormer window on a tiled roof in Croydon showing the roofline detail",
    },
    whatToLook: [
      {
        h: "Are they fitting vents?",
        p: "Ask directly whether the new soffit is vented and what the airflow path into the loft will be. If the answer is vague, you are being sold boards rather than a roofline.",
      },
      {
        h: "Is the gutter being dealt with too?",
        p: "Rotten fascia and a failing gutter go together almost every time. Replacing one and leaving the other is doing half a job at full price.",
      },
      {
        h: "Capping or replacing?",
        p: "Some firms clad over existing timber because it is quick. That is acceptable only if the timber underneath is genuinely sound and dry. Ask which one is being proposed and why.",
      },
    ],
    comparison: {
      header: "uPVC Or Painted Timber?",
      intro: "Both are legitimate. Which is right depends on the house and where it is.",
      proLabel: "uPVC",
      altLabel: "Painted timber",
      rows: [
        {
          label: "Maintenance",
          pro: "Wash it occasionally. That is the whole list.",
          alt: "Repainting every five years or so, and it needs doing before the paint film breaks.",
        },
        {
          label: "Life expectancy",
          pro: "Commonly 20 years or more before it discolours or goes brittle.",
          alt: "Indefinite if it is kept painted. Neglected, it rots within a decade.",
        },
        {
          label: "Cost",
          pro: "Lower installed cost, and no ongoing decoration.",
          alt: "Higher over time once repainting is counted in.",
        },
        {
          label: "Period properties",
          pro: "Passable on interwar and later stock. Visibly wrong on Victorian detail.",
          alt: "Correct, and takes moulded profiles that plastic cannot reproduce.",
        },
        {
          label: "Conservation areas",
          pro: "May be resisted on elevations visible from the street.",
          alt: "The safe choice, and what will normally be expected.",
        },
        {
          label: "Ventilation",
          pro: "Vented profiles are readily available. They just have to actually be specified.",
          alt: "Vents can be cut in or over-fascia vents used. Same requirement either way.",
        },
      ],
    },
    teaser: {
      h: "The loft is where you find out",
      p: "If you want to know whether your roofline is doing its job, go into the loft on a cold morning and look at the underside of the felt and at the nails coming through. Beads of water, black spotting on the timber or damp insulation at the edges all point at eaves ventilation that has been closed up rather than at a leak. It is a very common condition in houses that had uPVC roofline fitted cheaply in the 1990s and 2000s, and it is straightforward to correct.",
      publicId: `${P}/loft-roof-timbers-survey-croydon`,
      alt: "Roof timbers seen from inside a Croydon loft during a survey",
      ctaText: "Read the roof problems guide",
      ctaHref: "/common-roof-problems",
    },
    costText:
      "Replacing one rotten section is a few hundred pounds. A full uPVC roofline on a two storey semi, including fascias, soffits, bargeboards and new guttering, generally sits in the low thousands, with access the main variable. Timber costs more and needs decorating. Where scaffold is going up anyway for other roof work, adding the roofline to that visit removes a large part of the cost of doing it later.",
    faqs: [
      {
        question: "Do fascias and soffits really need replacing, or is it a sales job?",
        answer:
          "It is genuinely necessary when the timber is soft, when the gutter has nothing solid to fix to, or when the eaves ventilation has been blocked. It is a sales job when a sound painted run is condemned wholesale because two feet of it have gone. Press a screwdriver into the board - if it goes in, it is rotten, and if it does not, ask why the whole run needs replacing.",
      },
      {
        question: "Why does my loft get condensation since the new soffits went on?",
        answer:
          "Because the new soffits almost certainly are not vented, or the old ventilation gap was covered over when they were fitted. A loft needs air moving through it. Seal the eaves and the moisture that rises out of the house has nowhere to go, so it condenses on the cold underside of the roof. Adding vents corrects it without redoing the whole roofline.",
      },
      {
        question: "Can you just clad over the old boards and leave them in place?",
        answer:
          "Only where the timber underneath is genuinely sound and dry, and we will tell you honestly whether it is. Capping over rot traps moisture against it and the decay carries on out of sight. If the boards have gone, they come off.",
      },
      {
        question: "Am I allowed uPVC in a conservation area?",
        answer:
          "It varies by area and by how visible the elevation is. Croydon has 21 conservation areas, and the Chatsworth Road area in Addiscombe additionally has an Article 4 direction that has removed a range of permitted development rights since January 2016. Caterham and Warlingham come under Tandridge, Wallington under Sutton and West Wickham under Bromley. Check with the right authority before ordering anything.",
      },
      {
        question: "Is it worth doing the gutters while somebody is up there anyway?",
        answer:
          "Nearly always, and it usually costs very little extra once someone is already up there. The gutter has to come off to replace a fascia anyway, and refitting a tired gutter onto a new board is a false economy of the most obvious kind.",
      },
      {
        question: "What is a bargeboard and do I need one?",
        answer:
          "It is the sloping board on a gable end, running up the verge of the roof rather than along the eaves. It does the same job as a fascia - it closes off and protects the roof timbers at the edge - and it rots for the same reasons. If your house has a gable, it has bargeboards, and they are worth checking whenever the fascias are.",
      },
    ],
    related: [
      { href: "/guttering", label: "Guttering" },
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/roof-replacement", label: "Roof replacement" },
    ],
  },

  // ---------------------------------------------------------- replacement --
  {
    slug: "/roof-replacement",
    serviceName: "Roof Replacement",
    metaTitle: "Roof Replacement In Croydon | Roof Repairs Croydon",
    metaDescription:
      "Roof replacement in Croydon. Full strip and re-cover in matched slate or tile, with new felt, battens and ventilation. Free survey, 10 year guarantee.",
    h1: "Roof Replacement In Croydon",
    h2: "Has your roof genuinely reached the end, or is it being sold to you?",
    h3: "Full strip and re-cover on Victorian, interwar and postwar roofs across Croydon",
    heroPublicId: `${P}/new-concrete-roof-tiles-croydon-replacement`,
    heroAlt: "New concrete roof tiles laid on a replacement roof in Croydon",
    intro:
      "This is the largest thing most people ever spend on the outside of their house, and it is the job with the widest gap between what is necessary and what is sold. So the starting position here is scepticism. A roof needs replacing when the fixings have failed across the whole slope, when the timber below has gone, or when you have already paid for the same repair three times. Not because it looks tired from the pavement.",
    insight:
      "For every roof we survey that genuinely needs replacing, several more turn out to have a decade or more left in them and to need a day's work instead.",
    symptoms: [
      {
        sign: "Slates sliding off with no wind and no obvious damage",
        cause:
          "Nail sickness. The fixings have corroded through across the roof, and every slate on it is now held by friction. This is the clearest genuine case for replacement and it is common on the Victorian stock in Addiscombe, South Norwood and Thornton Heath.",
      },
      {
        sign: "Widespread spalling and lamination on tiles",
        cause:
          "Frost has got into the material itself over decades. Individual replacements will not stop it because the whole batch is at the same stage.",
      },
      {
        sign: "Sagging visible along the ridge or between rafters",
        cause:
          "Structural, not covering. It needs looking at properly before anything else is decided, and it may be a timber job rather than a roofing one.",
      },
      {
        sign: "Repairs in three or four different places over a few years",
        cause:
          "The pattern rather than any single fault. At some point the running total of patches exceeds the cost of doing it once, and it is worth doing the arithmetic honestly.",
      },
    ],
    benefits: [
      {
        title: "You get told when not to",
        text: "The survey is free and there is no obligation, which means there is no cost to us in telling you your roof is fine. Plenty of people are told exactly that.",
      },
      {
        title: "Matched to what is already there",
        text: "Slate for slate on the Victorian terraces, the right profile of concrete tile on the interwar semis. A roof that looks wrong for the street devalues the house.",
      },
      {
        title: "Everything underneath renewed",
        text: "Breathable membrane, new treated battens, new fixings. Re-covering onto old battens is a false economy that is invisible from the ground and obvious in ten years.",
      },
      {
        title: "Ventilation designed in",
        text: "Eaves and ridge ventilation to current standards. A tightly sealed modern covering over an unventilated loft creates condensation problems the old roof never had.",
      },
      {
        title: "Written, itemised and fixed",
        text: "Scaffold, strip and disposal, materials, labour, leadwork and rainwater goods all as separate lines, so you can see what you are buying and compare quotes properly.",
      },
      {
        title: "Ten year workmanship guarantee",
        text: "On top of the manufacturer's cover on the covering itself, which varies by product and gets confirmed for your specific job.",
      },
    ],
    localAngle: {
      h: "Three eras of roof, three different jobs",
      p: "Replacing a roof in Croydon means one of about three jobs depending on where you are. In the north - Thornton Heath, Norbury, South Norwood, Addiscombe - it is Victorian and Edwardian terraces under natural slate, usually with parapets, shared gutters and a back addition with its own small roof, and the honest question is whether to re-slate or to move to a different covering. In the middle and south - Shirley, Selsdon, Sanderstead, Purley, Coulsdon, Kenley - it is interwar semis and detached houses under concrete tile, hipped, with deep eaves, and the work is more straightforward but the roofs are bigger. On the New Addington estate it is long runs of shallow-pitched postwar terraces where the pitch itself limits what coverings are permissible. All three need pricing differently and none of them is the same job.",
      publicId: `${P}/aerial-view-croydon-suburban-rooftops`,
      alt: "Aerial view of suburban rooftops across the Croydon area",
    },
    whatToLook: [
      {
        h: "Did anybody survey it properly?",
        p: "A replacement quoted from the pavement, or from a drone flypast alone, is a quote for a product. Somebody should have been on the roof and in the loft before a number that size is put in front of you.",
      },
      {
        h: "Is the quote itemised?",
        p: "Scaffold, strip and disposal, membrane, battens, covering, leadwork, ridge, ventilation, rainwater goods. If it is one number, you cannot compare it with anything and you cannot tell what has been left out.",
      },
      {
        h: "What is happening to the battens?",
        p: "Re-covering onto existing battens saves the contractor a day and costs you a decade. Ask the question directly and get the answer in writing.",
      },
    ],
    comparison: {
      header: "Natural Slate Or Concrete Tile?",
      intro:
        "The choice that comes up on almost every Croydon replacement, and the honest answer depends more on the house than on the material.",
      proLabel: "Natural slate",
      altLabel: "Concrete tile",
      rows: [
        {
          label: "Life expectancy",
          pro: "80 to 100 years or more for good Welsh slate. Frequently the fixings fail long before the slate does.",
          alt: "Around 50 to 60 years, with surface finish deteriorating earlier than the tile itself.",
        },
        {
          label: "Weight",
          pro: "Lighter. Suits the original roof structure on Victorian houses that were built for it.",
          alt: "Heavier. On an older roof designed for slate, the structure has to be checked before switching.",
        },
        {
          label: "Cost",
          pro: "Significantly more, both material and labour.",
          alt: "The cheaper option, and the reason most interwar roofs were built in it.",
        },
        {
          label: "Appearance",
          pro: "Right on Victorian and Edwardian houses, and expected in the conservation areas.",
          alt: "Right on interwar and postwar stock, where slate would look imported.",
        },
        {
          label: "Shallow pitches",
          pro: "Copes with lower pitches than most tiles, which matters on some back additions.",
          alt: "Each profile has a minimum pitch. On the shallow postwar roofs this genuinely restricts the options.",
        },
        {
          label: "Repairability later",
          pro: "Individual slates replaced easily by anybody competent.",
          alt: "Easy while the profile is still made. Discontinued profiles get awkward.",
        },
      ],
    },
    teaser: {
      h: "Before you agree to anything",
      p: "Get more than one quote, and get them itemised so they can actually be laid side by side. Ask each contractor what they found in the loft, and be suspicious of anyone who did not go up there. Ask what happens to the battens, what membrane is going on, and how the roof will be ventilated. And be wary of a price that is only available today - a roof is not a timeshare, and any figure worth having is still worth having next week.",
      publicId: `${P}/new-roof-timber-structure-croydon`,
      alt: "New timber roof structure during a roof replacement in Croydon",
      ctaText: "See the full cost guide",
      ctaHref: "/roof-repair-cost",
    },
    costText:
      "A full replacement on a Croydon house runs into the thousands and on larger or taller properties well beyond that. Scaffold, the size and complexity of the roof, and the covering chosen account for most of the spread, and a Victorian terrace with a three storey frontage and a back addition costs meaningfully more than a two storey semi with a simple hipped roof. The cost guide sets out what each element contributes so you can sanity check any quote you are given, including ours.",
    faqs: [
      {
        question: "How do I know I actually need a new roof?",
        answer:
          "The strongest single indicator is slates coming off with no weather to explain it, which means the nails have corroded through across the whole slope. After that: widespread frost damage to the tiles themselves, rot in the battens or rafters, and a pattern of repeated repairs in different places. Individual slipped tiles, moss growth and a generally weathered appearance are not, on their own, reasons to replace a roof.",
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "A straightforward two storey semi is usually about a week once the scaffold is up. Terraces with back additions, complicated hips and valleys, or anything three storeys, run longer. Weather moves it, because there is a limit to how much roof anyone should responsibly have open at once.",
      },
      {
        question: "Do I need planning permission?",
        answer:
          "For a like-for-like replacement, normally no. It becomes a planning matter if you are changing the material or the roof shape, if you are in one of Croydon's 21 conservation areas, or if the building is listed. In Addiscombe's Chatsworth Road area the Article 4 direction requires permission for all alterations to the roof of a dwelling house. If you are in Caterham or Warlingham you are under Tandridge, Wallington is Sutton and West Wickham is Bromley, so confirm with the correct council before ordering materials.",
      },
      {
        question: "Do I need building regulations approval?",
        answer:
          "Renewing more than about a quarter of a roof's area is normally notifiable work under Part L, which in practice means most full replacements. It is dealt with either through building control or under a competent person scheme. The practical effect is usually that insulation and ventilation have to be brought up to current standards as part of the job, which is worth knowing at quote stage rather than discovering later.",
      },
      {
        question: "Can I stay in the house while it is done?",
        answer:
          "Yes, and almost everyone does. It is noisy, there will be dust in the loft, and there is scaffold across your windows for the duration. The roof is never left open overnight in a way that would let water in. Cars need moving off the drive and anything precious in the loft should come out first.",
      },
      {
        question: "Will you take the old roof away?",
        answer:
          "Yes, disposal is included and it appears as its own line in the quote. On most Croydon roads that means a skip and a permit from the council to put it on the highway, and that permit cost is in the price rather than added later.",
      },
    ],
    related: [
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/fascias-and-soffits", label: "Fascias and soffits" },
      { href: "/roof-repair-cost", label: "Roof repair cost guide" },
    ],
  },
];

export function getService(slug: string): ServiceData {
  const found = services.find((s) => s.slug === slug);
  if (!found) throw new Error(`No service data for ${slug}`);
  return found;
}
