// Single source of truth for NAP, schema and site-wide figures.
//
// OUTSTANDING - client still to supply:
//   - the registered company name and number for the roofing contractor
//     (see `contractor` below; the footer degrades gracefully until it lands)
//   - the Google Business Profile URL (see `socials`)
//   - genuine customer reviews (see src/components/Reviews.astro)
//
// DELIBERATELY NOT SET: a materials / supplier guarantee length. It varies by
// product, so Guarantee.astro carries a non-numeric manufacturer slot rather
// than a headline figure that would be wrong on most jobs.

export const business = {
  name: "Roof Repairs Croydon",
  shortName: "Roof Repairs Croydon",
  owners: "the Roof Repairs Croydon team",

  domain: "roofrepairscroydon.co.uk",
  url: "https://www.roofrepairscroydon.co.uk",

  // Supplied by client
  phone: "020 4538 1998",
  phoneHref: "tel:+442045381998",
  email: "info@roofrepairscroydon.co.uk",

  // Core service area
  location: "Croydon",
  region: "Greater London",
  country: "GB",
  serviceAreaLabel: "Covering Croydon, the CR postcodes and the north Surrey border",

  // Trading address - footer, contact page and LocalBusiness schema.
  address: {
    street: "Penwortham Road",
    locality: "South Croydon",
    region: "Greater London",
    postcode: "CR2 0QS",
  },

  // Centroid of CR2 0QS, verified against the ONS postcode directory.
  geo: {
    latitude: 51.3434,
    longitude: -0.098,
  },
  serviceRadiusKm: 15,

  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },

  // Figures carried across from the operator's existing roofing work.
  repairsCompleted: "1,000+",
  workmanshipGuaranteeYears: 10,

  // Two separate entities and the site has to be straight about which is which.
  // IGEN MEDIA owns and runs this website and passes enquiries on. The roofing
  // is quoted for and carried out by the contractor named below.
  siteOperator: {
    name: "IGEN MEDIA LTD",
    companyNumber: "14525127",
    address: "Dorset House, 5 Church Street, Wimborne, Dorset, BH21 1JH",
  },

  // TODO(client): fill in once the trading company is confirmed. While `name`
  // is empty the footer and terms page fall back to neutral wording instead of
  // naming a company that has not been verified at Companies House.
  contractor: {
    name: "",
    companyNumber: "",
    address: "",
  },

  services: [
    "Roof Leak Repairs",
    "Emergency Roof Repairs",
    "Storm Damage Repairs",
    "Flat Roof Repairs",
    "Chimney Repairs",
    "Guttering",
    "Fascias & Soffits",
    "Roof Replacement",
  ],

  // Feeds `sameAs` in the RoofingContractor schema and the footer icon row, so
  // the two can never drift apart.
  //
  // URLs are normalised to their canonical form deliberately: no tracking
  // parameters, no sub-tabs, no trailing fragments. Google treats `sameAs`
  // entries as entity identifiers, so `x.com/roofrepaircr?s=11` and
  // `linkedin.com/company/.../about/` are worth less than the clean root URL.
  //
  // STILL MISSING: the Google Business Profile. For a local trade site that one
  // listing does more for rankings than all five of these put together, because
  // it is what drives the Maps pack. Worth chasing before anything else.
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61593944904533" },
    { name: "X", url: "https://x.com/roofrepaircr" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/roof-repairs-croydon/" },
    { name: "YouTube", url: "https://www.youtube.com/@RoofRepairsCroydon-c9x" },
    { name: "Pinterest", url: "https://uk.pinterest.com/RoofRepairsCroydon/" },
  ],

  // Public access key, generated at web3forms.com against
  // info@roofrepairscroydon.co.uk. Not a secret - it ships in the form markup
  // by design, which is why it lives here rather than in an env var.
  web3formsAccessKey: "51cf2c01-fe0d-486e-adc1-dc46d87ec631",

  get sameAs(): string[] {
    return this.socials.map((s) => s.url);
  },
};

// Cloudinary delivery helper. Every image on this site lives under
// roof-repairs-croydon/ so it can never collide with another site on the
// account:
//   roof-repairs-croydon/site/*  - page and section imagery
//   roof-repairs-croydon/blog/*  - blog heroes and in-post images

const IMG_MAP: Record<string, string> = {
  "roof-repairs-croydon/blog/aerial-view-croydon-housing-estate|900": "/images/roof-repairs-croydon-blog-aerial-view-croydon-housing-estate-w900.webp",
  "roof-repairs-croydon/blog/brick-terraced-houses-croydon-street|900": "/images/roof-repairs-croydon-blog-brick-terraced-houses-croydon-street-w900.webp",
  "roof-repairs-croydon/blog/builder-reviewing-plans-croydon|900": "/images/roof-repairs-croydon-blog-builder-reviewing-plans-croydon-w900.webp",
  "roof-repairs-croydon/blog/checking-reviews-on-phone-croydon|900": "/images/roof-repairs-croydon-blog-checking-reviews-on-phone-croydon-w900.webp",
  "roof-repairs-croydon/blog/conservation-area-period-houses-croydon|900": "/images/roof-repairs-croydon-blog-conservation-area-period-houses-croydon-w900.webp",
  "roof-repairs-croydon/blog/household-budget-planning-croydon|900": "/images/roof-repairs-croydon-blog-household-budget-planning-croydon-w900.webp",
  "roof-repairs-croydon/blog/listed-building-brick-detail-croydon|900": "/images/roof-repairs-croydon-blog-listed-building-brick-detail-croydon-w900.webp",
  "roof-repairs-croydon/blog/loft-conversion-dormer-roof-croydon|900": "/images/roof-repairs-croydon-blog-loft-conversion-dormer-roof-croydon-w900.webp",
  "roof-repairs-croydon/blog/loft-insulation-roof-space-croydon|900": "/images/roof-repairs-croydon-blog-loft-insulation-roof-space-croydon-w900.webp",
  "roof-repairs-croydon/blog/planning-application-paperwork-croydon|900": "/images/roof-repairs-croydon-blog-planning-application-paperwork-croydon-w900.webp",
  "roof-repairs-croydon/blog/roof-stripped-to-battens-croydon|900": "/images/roof-repairs-croydon-blog-roof-stripped-to-battens-croydon-w900.webp",
  "roof-repairs-croydon/blog/roofer-hands-fixing-roof-croydon|900": "/images/roof-repairs-croydon-blog-roofer-hands-fixing-roof-croydon-w900.webp",
  "roof-repairs-croydon/blog/roofer-working-safely-on-roof-croydon|900": "/images/roof-repairs-croydon-blog-roofer-working-safely-on-roof-croydon-w900.webp",
  "roof-repairs-croydon/blog/slate-roof-tile-detail-croydon|900": "/images/roof-repairs-croydon-blog-slate-roof-tile-detail-croydon-w900.webp",
  "roof-repairs-croydon/blog/solar-panels-on-house-roof-croydon|900": "/images/roof-repairs-croydon-blog-solar-panels-on-house-roof-croydon-w900.webp",
  "roof-repairs-croydon/blog/tradesman-meeting-customer-doorstep-croydon|900": "/images/roof-repairs-croydon-blog-tradesman-meeting-customer-doorstep-croydon-w900.webp",
  "roof-repairs-croydon/blog/tradesman-work-van-croydon-street|900": "/images/roof-repairs-croydon-blog-tradesman-work-van-croydon-street-w900.webp",
  "roof-repairs-croydon/blog/worn-old-roof-tiles-croydon-house|900": "/images/roof-repairs-croydon-blog-worn-old-roof-tiles-croydon-house-w900.webp",
  "roof-repairs-croydon/blog/written-roofing-quote-paperwork-croydon|900": "/images/roof-repairs-croydon-blog-written-roofing-quote-paperwork-croydon-w900.webp",
  "roof-repairs-croydon/site/aerial-view-croydon-suburban-rooftops|800": "/images/roof-repairs-croydon-site-aerial-view-croydon-suburban-rooftops-w800.webp",
  "roof-repairs-croydon/site/brick-chimney-pots-slate-roof-croydon|1200": "/images/roof-repairs-croydon-site-brick-chimney-pots-slate-roof-croydon-w1200.webp",
  "roof-repairs-croydon/site/brick-chimney-pots-slate-roof-croydon|600": "/images/roof-repairs-croydon-site-brick-chimney-pots-slate-roof-croydon-w600.webp",
  "roof-repairs-croydon/site/completed-rear-extension-flat-roof-croydon|800": "/images/roof-repairs-croydon-site-completed-rear-extension-flat-roof-croydon-w800.webp",
  "roof-repairs-croydon/site/croydon-rooftops-chimney-stacks-skyline|800": "/images/roof-repairs-croydon-site-croydon-rooftops-chimney-stacks-skyline-w800.webp",
  "roof-repairs-croydon/site/croydon-terraced-housing-rooftops|800": "/images/roof-repairs-croydon-site-croydon-terraced-housing-rooftops-w800.webp",
  "roof-repairs-croydon/site/damp-stained-ceiling-and-wall-roof-leak-croydon|800": "/images/roof-repairs-croydon-site-damp-stained-ceiling-and-wall-roof-leak-croydon-w800.webp",
  "roof-repairs-croydon/site/daylight-through-roof-timbers-emergency-repair-croydon|1200": "/images/roof-repairs-croydon-site-daylight-through-roof-timbers-emergency-repair-croydon-w1200.webp",
  "roof-repairs-croydon/site/daylight-through-roof-timbers-emergency-repair-croydon|600": "/images/roof-repairs-croydon-site-daylight-through-roof-timbers-emergency-repair-croydon-w600.webp",
  "roof-repairs-croydon/site/dormer-window-on-tiled-roof-croydon|800": "/images/roof-repairs-croydon-site-dormer-window-on-tiled-roof-croydon-w800.webp",
  "roof-repairs-croydon/site/flat-roof-detail-brick-upstand-croydon|800": "/images/roof-repairs-croydon-site-flat-roof-detail-brick-upstand-croydon-w800.webp",
  "roof-repairs-croydon/site/flat-roof-extension-rear-of-semi-croydon|1200": "/images/roof-repairs-croydon-site-flat-roof-extension-rear-of-semi-croydon-w1200.webp",
  "roof-repairs-croydon/site/flat-roof-extension-rear-of-semi-croydon|600": "/images/roof-repairs-croydon-site-flat-roof-extension-rear-of-semi-croydon-w600.webp",
  "roof-repairs-croydon/site/hillside-housing-rooftops-croydon|800": "/images/roof-repairs-croydon-site-hillside-housing-rooftops-croydon-w800.webp",
  "roof-repairs-croydon/site/loft-roof-timbers-survey-croydon|800": "/images/roof-repairs-croydon-site-loft-roof-timbers-survey-croydon-w800.webp",
  "roof-repairs-croydon/site/london-residential-street-parked-cars-croydon|1200": "/images/roof-repairs-croydon-site-london-residential-street-parked-cars-croydon-w1200.webp",
  "roof-repairs-croydon/site/moss-covered-concrete-roof-tiles-croydon|800": "/images/roof-repairs-croydon-site-moss-covered-concrete-roof-tiles-croydon-w800.webp",
  "roof-repairs-croydon/site/moss-growing-in-roof-gutter-croydon|800": "/images/roof-repairs-croydon-site-moss-growing-in-roof-gutter-croydon-w800.webp",
  "roof-repairs-croydon/site/moss-on-slate-roof-shaded-slope-croydon|900": "/images/roof-repairs-croydon-site-moss-on-slate-roof-shaded-slope-croydon-w900.webp",
  "roof-repairs-croydon/site/new-concrete-roof-tiles-croydon-replacement|1200": "/images/roof-repairs-croydon-site-new-concrete-roof-tiles-croydon-replacement-w1200.webp",
  "roof-repairs-croydon/site/new-concrete-roof-tiles-croydon-replacement|600": "/images/roof-repairs-croydon-site-new-concrete-roof-tiles-croydon-replacement-w600.webp",
  "roof-repairs-croydon/site/new-roof-timber-structure-croydon|800": "/images/roof-repairs-croydon-site-new-roof-timber-structure-croydon-w800.webp",
  "roof-repairs-croydon/site/rain-running-off-roof-edge-croydon|800": "/images/roof-repairs-croydon-site-rain-running-off-roof-edge-croydon-w800.webp",
  "roof-repairs-croydon/site/rainwater-overflowing-gutter-croydon|1200": "/images/roof-repairs-croydon-site-rainwater-overflowing-gutter-croydon-w1200.webp",
  "roof-repairs-croydon/site/rainwater-overflowing-gutter-croydon|600": "/images/roof-repairs-croydon-site-rainwater-overflowing-gutter-croydon-w600.webp",
  "roof-repairs-croydon/site/red-brick-victorian-houses-croydon|900": "/images/roof-repairs-croydon-site-red-brick-victorian-houses-croydon-w900.webp",
  "roof-repairs-croydon/site/roof-repair-cost-quote-paperwork-croydon|1200": "/images/roof-repairs-croydon-site-roof-repair-cost-quote-paperwork-croydon-w1200.webp",
  "roof-repairs-croydon/site/roof-repairs-croydon-victorian-terrace-chimneys|1200": "/images/roof-repairs-croydon-site-roof-repairs-croydon-victorian-terrace-chimneys-w1200.webp",
  "roof-repairs-croydon/site/roofers-working-on-roof-croydon|800": "/images/roof-repairs-croydon-site-roofers-working-on-roof-croydon-w800.webp",
  "roof-repairs-croydon/site/scaffold-on-brick-mansion-block-croydon|800": "/images/roof-repairs-croydon-site-scaffold-on-brick-mansion-block-croydon-w800.webp",
  "roof-repairs-croydon/site/scaffolding-and-netting-on-building-croydon|800": "/images/roof-repairs-croydon-site-scaffolding-and-netting-on-building-croydon-w800.webp",
  "roof-repairs-croydon/site/slate-roof-rooflight-croydon-leak-repairs|1200": "/images/roof-repairs-croydon-site-slate-roof-rooflight-croydon-leak-repairs-w1200.webp",
  "roof-repairs-croydon/site/slate-roof-rooflight-croydon-leak-repairs|600": "/images/roof-repairs-croydon-site-slate-roof-rooflight-croydon-leak-repairs-w600.webp",
  "roof-repairs-croydon/site/storm-damaged-roof-missing-tiles-croydon|1200": "/images/roof-repairs-croydon-site-storm-damaged-roof-missing-tiles-croydon-w1200.webp",
  "roof-repairs-croydon/site/storm-damaged-roof-missing-tiles-croydon|600": "/images/roof-repairs-croydon-site-storm-damaged-roof-missing-tiles-croydon-w600.webp",
  "roof-repairs-croydon/site/storm-damaged-roof-missing-tiles-croydon|800": "/images/roof-repairs-croydon-site-storm-damaged-roof-missing-tiles-croydon-w800.webp",
  "roof-repairs-croydon/site/tall-red-chimney-pots-stone-roof-croydon|800": "/images/roof-repairs-croydon-site-tall-red-chimney-pots-stone-roof-croydon-w800.webp",
  "roof-repairs-croydon/site/terrace-dormers-fascias-and-soffits-croydon|1200": "/images/roof-repairs-croydon-site-terrace-dormers-fascias-and-soffits-croydon-w1200.webp",
  "roof-repairs-croydon/site/terrace-dormers-fascias-and-soffits-croydon|600": "/images/roof-repairs-croydon-site-terrace-dormers-fascias-and-soffits-croydon-w600.webp",
  "roof-repairs-croydon/site/water-pouring-off-blocked-gutter-croydon|800": "/images/roof-repairs-croydon-site-water-pouring-off-blocked-gutter-croydon-w800.webp",
  "roof-repairs-croydon/site/weathered-grey-roof-tiles-croydon|1200": "/images/roof-repairs-croydon-site-weathered-grey-roof-tiles-croydon-w1200.webp"
};
export function img(publicId: string, w = 900): string {
  return IMG_MAP[`${publicId}|${w}`] ?? `/images/${publicId.replace(/\//g, "-")}-w${w}.webp`;
}
