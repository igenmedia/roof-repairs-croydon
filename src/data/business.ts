// Single source of truth for NAP, schema and site-wide figures.
//
// OUTSTANDING - client still to supply:
//   - the registered company name and number for the roofing contractor
//     (see `contractor` below; the footer degrades gracefully until it lands)
//   - social profile and Google Business Profile URLs (see `socials`)
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
  // the two can never drift apart. Empty until the client confirms live
  // profiles - an invented URL in `sameAs` is worse than no `sameAs` at all.
  // Chase the Google Business Profile first: for a local trade site that single
  // listing does more for rankings than every social profile put together.
  socials: [] as { name: string; url: string }[],

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
const CLD = "https://res.cloudinary.com/dj6fnojch/image/upload";
export function img(publicId: string, w = 900): string {
  return `${CLD}/f_auto,q_auto:good,w_${w},c_limit/${publicId}`;
}
