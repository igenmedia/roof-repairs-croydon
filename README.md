# Roof Repairs Croydon

SEO lead-generation site for a roofing business covering the London Borough of
Croydon and the surrounding CR postcodes. Astro 6 + Tailwind 4, static output,
deployed via GitHub + Cloudflare Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
```

## How the site is put together

- `src/data/business.ts` - single source of truth for NAP, figures and schema.
- `src/data/locations.ts` - the 16 towns in the service area, with the correct
  planning authority for each. The CR postcodes cross four councils and this is
  the field most competing sites get wrong.
- `src/data/services.ts` - all eight service pages' copy. Each page is rendered
  by `src/layouts/ServicePage.astro`, so a page is a six-line stub plus data.
- `src/data/pageChain.ts` - drives the "Next" link at the foot of every page.

## Design

Graphite surfaces with a clay-tile red accent, Archivo headings and Source Sans 3
body, both self-hosted as latin-subset variable fonts. Deliberately unlike the
navy-and-orange used on the other roofing sites in this portfolio, because these
sites can appear in overlapping search results.

## Images

Everything is served from Cloudinary under `roof-repairs-croydon/`, with
`f_auto,q_auto:good,w_900,c_limit` transformations. Nothing is stored in the
repo and nothing is hotlinked from Pexels. See `src/data/business.ts` for the
`img()` helper.

## Outstanding before launch

1. **Web3Forms access key** - `business.web3formsAccessKey` is a placeholder.
   Generate a real key against info@roofrepairscroydon.co.uk. The contact forms
   will not deliver until this is done.
2. **Roofing company details** - `business.contractor` is empty. The footer and
   terms page fall back to neutral wording until the name and company number are
   confirmed at Companies House.
3. **Social profiles** - `business.socials` is empty, so `sameAs` is omitted from
   the schema and the footer icon row is hidden. Add the Google Business Profile
   first; it matters more than the rest combined.
4. **Real reviews** - `src/components/Reviews.astro` carries five clearly marked
   placeholders. Replace with genuine reviews, and only then consider adding
   `AggregateRating` to the schema.
5. **Client photographs** - `images/raw/` is empty, so every image is licensed
   stock used illustratively. No gallery claims the work as the client's own.
   Add a real gallery once job photos are available.

## Content rules

Every page's prose is unique to this site. Verify before launch:

```bash
npx astro build
python3 ../tools/check-duplicates.py "Roof Repairs Croydon"
```
