// Drives the "Next" link at the foot of every page so that a reader - and a
// crawler - can walk the entire site without going back to the navigation.
export const pageChain = [
  { slug: "/", label: "Roof Repairs Croydon" },
  { slug: "/roof-leak-repairs", label: "Roof Leak Repairs" },
  { slug: "/emergency-roof-repairs", label: "Emergency Roof Repairs" },
  { slug: "/storm-damage-repairs", label: "Storm Damage Repairs" },
  { slug: "/flat-roof-repairs", label: "Flat Roof Repairs" },
  { slug: "/chimney-repairs", label: "Chimney Repairs" },
  { slug: "/guttering", label: "Guttering" },
  { slug: "/fascias-and-soffits", label: "Fascias & Soffits" },
  { slug: "/roof-replacement", label: "Roof Replacement" },
  { slug: "/common-roof-problems", label: "Common Roof Problems" },
  { slug: "/roof-repair-cost", label: "Roof Repair Cost Guide" },
  { slug: "/blog", label: "Blog" },
  { slug: "/contact", label: "Contact Us" },
];

export function getNextPage(currentSlug: string) {
  const index = pageChain.findIndex((p) => p.slug === currentSlug);
  return pageChain[(index + 1) % pageChain.length];
}
