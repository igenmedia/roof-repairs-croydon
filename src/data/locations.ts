// Service-area dictionary.
//
// Location PAGES are not built yet - the client asked for the homepage and the
// service pages first. For now this drives the service-area sections (as plain
// text, so nothing links to a URL that does not exist), the footer list and
// `areaServed` in the schema. It is written so it can drive /{slug} pages later
// without any of it needing to be rewritten.
//
// `council` is the field to be careful with, because the CR postcodes cross
// four planning authorities and most roofing sites covering this patch get it
// wrong. Croydon, Purley, Coulsdon, Kenley, Sanderstead, Selsdon, Addiscombe,
// Shirley, Thornton Heath, Norbury, South Norwood and New Addington are all the
// London Borough of Croydon. Wallington is the London Borough of Sutton.
// Caterham and Warlingham are Tandridge District Council in Surrey - a county
// authority with its own local plan, currently due to be folded into a new
// Surrey unitary council. West Wickham is the London Borough of Bromley.
// Postcode-to-district assignments below were checked against the ONS postcode
// directory rather than assumed from the address.

export interface Town {
  name: string;
  slug: string;
  postcode: string;
  council: string;
  councilUrl: string;
  /** A real planning or building-control quirk worth naming on the page. */
  planningNote: string;
  /** Honest description of the housing stock and what it is roofed in. */
  stock: string;
  /** Real roads, estates or landmarks that can be referenced in copy. */
  hoods: string[];
  /** Why roofs there take a beating. Ground truth, not invention. */
  exposure: string;
  driveTime: string;
}

const CROYDON = "London Borough of Croydon";
const CROYDON_URL = "https://www.croydon.gov.uk/planning-and-regeneration/planning";
const SUTTON = "London Borough of Sutton";
const SUTTON_URL = "https://www.sutton.gov.uk/planning-and-building-control";
const TANDRIDGE = "Tandridge District Council";
const TANDRIDGE_URL = "https://www.tandridge.gov.uk/Planning-and-building";
const BROMLEY = "London Borough of Bromley";
const BROMLEY_URL = "https://www.bromley.gov.uk/planning";

export const locations: Town[] = [
  {
    name: "South Croydon",
    slug: "south-croydon",
    postcode: "CR2",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "The Waldrons is a conservation area with an Article 4 direction on numbers 5 to 23, in force since January 2016. Inside that stretch, alterations that would be permitted development anywhere else need an application first.",
    stock:
      "Big detached and semi-detached Victorian villas along the older roads, a lot of them under natural slate with deep gutters and heavy stone or moulded eaves detail, mixed in with Edwardian terraces and later flats along the Brighton Road corridor.",
    hoods: ["The Waldrons", "Croham Road", "Selsdon Road", "Brighton Road", "Croham Hurst"],
    exposure:
      "The ground climbs steadily south from the town centre, so the tall villa frontages catch a lot more wind than their height alone suggests, and the tree cover along Croham Hurst keeps the north-facing slopes damp for most of the winter.",
    driveTime: "on the doorstep - this is where we are based",
  },
  {
    name: "Purley",
    slug: "purley",
    postcode: "CR8",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "The Webb Estate and Upper Woodcote Village are both conservation areas, designated in 1983 and 1973 respectively. They cover around 260 acres and roughly 225 individually designed houses, and roof work there is looked at far more closely than on a comparable house half a mile down the hill.",
    stock:
      "William Webb laid out the Webb Estate between 1903 and 1925 as a garden-first suburb, and the houses on it are Arts and Crafts, Tudor Revival and Neo-Georgian - which in roofing terms means hand-made clay tiles, catslides, swept valleys, half-hipped gables and a great deal of lead. Away from the estate it is generous interwar detached and semi-detached stock on the chalk slopes.",
    hoods: ["Webb Estate", "Upper Woodcote Village", "Purley Oaks", "Foxley Lane", "Purley Downs"],
    exposure:
      "Purley sits where the Caterham and Coulsdon valleys meet, and the higher roads run right up onto the dip slope of the North Downs. Purley Beeches lost some of its finest trees in the 1987 storm, which tells you what the wind does up there when it means it.",
    driveTime: "about 8 minutes",
  },
  {
    name: "Sanderstead",
    slug: "sanderstead",
    postcode: "CR2",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Sanderstead is Croydon Council for both planning and building control, and the older core around the church is a conservation area, so like-for-like repair is straightforward but anything that changes the look of a roof slope is not.",
    stock:
      "Substantial interwar semis and detached houses on wide plots, most of them under concrete or clay tile with hipped roofs, generous overhangs and the deep timber fascia and soffit runs that came with that period of building.",
    hoods: ["Limpsfield Road", "Sanderstead Plantation", "Mitchley Hill", "Purley Downs Road", "Hamsey Green"],
    exposure:
      "One of the highest inhabited spots in the borough. There is very little between the ridge and the open ground to the south, so wind uplift at the eaves and along the hip lines is the usual reason tiles start moving here rather than any fault with the tile itself.",
    driveTime: "about 6 minutes",
  },
  {
    name: "Selsdon",
    slug: "selsdon",
    postcode: "CR2",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Croydon Council covers Selsdon. Forestdale, on its eastern edge, is a conservation area covering a planned estate of a much later date than most of the borough's, which means the design intent people are protecting there is 1960s and 1970s, not Victorian.",
    stock:
      "Mostly 1920s and 1930s semis laid out around the Selsdon Park estate roads, plus the flat and shallow-pitched roofs of the Forestdale development, which are a completely different repair proposition to a pitched tile roof.",
    hoods: ["Selsdon Park Road", "Addington Road", "Forestdale", "Selsdon Wood", "Farley Road"],
    exposure:
      "Selsdon Wood and the surrounding open land put a lot of mature trees within falling distance of a lot of roofs, and leaf litter off them is the single most common reason a gutter here stops doing its job by November.",
    driveTime: "about 7 minutes",
  },
  {
    name: "Coulsdon",
    slug: "coulsdon",
    postcode: "CR5",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Coulsdon is inside Greater London and inside Croydon Council, despite feeling like Surrey and having a Surrey postal look to its address. Householders here regularly ring the wrong authority.",
    stock:
      "Interwar semis and detached houses stepped up both sides of the valley, with a good stock of 1930s bay-fronted properties whose bay roofs and porch canopies are usually the first thing on the house to let water in.",
    hoods: ["Farthing Downs", "Coulsdon Woods", "Marlpit Lane", "Chipstead Valley Road", "Happy Valley"],
    exposure:
      "This is chalk downland with a deep valley cut through it, and the roads climbing out of the valley are properly exposed. Farthing Downs above the town is open common, and roofs on that side of Coulsdon see the weather before anywhere else in the borough does.",
    driveTime: "about 12 minutes",
  },
  {
    name: "Kenley",
    slug: "kenley",
    postcode: "CR8",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Kenley Aerodrome is a conservation area with its own Article 4 direction, and there are further Article 4 directions covering Kenley Lane and Hawkhirst Road, plus Mitchley Hill and Dunmail Drive nearby. Rights that exist elsewhere in the borough have been removed on those roads.",
    stock:
      "Detached and semi-detached houses of the interwar and postwar decades on steep plots, plus a scattering of older cottages. Complicated roof shapes are common because so many have been extended up the slope.",
    hoods: ["Kenley Aerodrome", "Kenley Lane", "Hayes Lane", "Godstone Road", "Riddlesdown"],
    exposure:
      "Kenley sits high on the Downs - the aerodrome was put there for exactly that reason. The Met Office long-term average at Kenley Airfield is around 847mm of rain a year across roughly 130 rain days, comfortably wetter than lower-lying parts of south London, plus about 35 nights of air frost.",
    driveTime: "about 10 minutes",
  },
  {
    name: "Addiscombe",
    slug: "addiscombe",
    postcode: "CR0",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "The Chatsworth Road conservation area carries the strictest Article 4 direction in the borough for anyone with a roof problem: since January 2016 it has required planning permission for all alterations to the roof of a dwelling house, along with painting the exterior and fitting solar equipment. Like-for-like repair is fine. Changing the covering is not.",
    stock:
      "Dense Victorian and Edwardian terraces and semis, largely London stock brick under Welsh slate, with the shallow butterfly and lean-to roofs behind the front slope that catch people out when they buy here.",
    hoods: ["Chatsworth Road", "Canning Road", "Clyde Road", "Lower Addiscombe Road", "Addiscombe Recreation Ground"],
    exposure:
      "Sheltered compared with the south of the borough, but the terraces here are old enough that nail fatigue in the original slate fixings is now the normal reason a slate comes off, rather than anything the weather did that week.",
    driveTime: "about 10 minutes",
  },
  {
    name: "Shirley",
    slug: "shirley",
    postcode: "CR0",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Croydon Council handles planning here. Shirley Windmill is a listed building and there are protected trees across a lot of the residential roads, which matters for access and scaffold positions more often than it matters for the roof itself.",
    stock:
      "Interwar and postwar semis and detached houses, mostly concrete tile on straightforward hipped and gabled roofs, with a very high proportion carrying a flat-roofed rear extension or garage added later.",
    hoods: ["Shirley Hills", "Wickham Road", "Spring Park", "Monks Orchard", "Addington Hills"],
    exposure:
      "Shirley has some of the heaviest tree cover in the borough, running up onto the Addington Hills. Overhanging limbs, constant leaf fall and the shade that comes with it mean moss establishes on the north slopes here faster than almost anywhere else we work.",
    driveTime: "about 12 minutes",
  },
  {
    name: "Thornton Heath",
    slug: "thornton-heath",
    postcode: "CR7",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Croydon Council, and worth knowing that the borough-wide Article 4 direction on small HMO conversions bites hardest in this part of the borough - relevant if a roof job is part of a wider conversion rather than a straight repair.",
    stock:
      "Long Victorian and Edwardian terraces at the low end of the borough, slate fronts with parapet and party walls, and a lot of rear additions under felt or asphalt that have been patched more times than anybody has kept count of.",
    hoods: ["Thornton Heath Pond", "Brigstock Road", "Grange Road", "Parchmore Road", "Beulah Road"],
    exposure:
      "This is the low ground at the foot of the Norwood Hills, on the Lambeth Group clays and sands rather than the chalk further south. Water that comes off the higher parts of the borough ends up here, so blocked or undersized rainwater goods show themselves quickly.",
    driveTime: "about 15 minutes",
  },
  {
    name: "Norbury",
    slug: "norbury",
    postcode: "SW16",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Norbury has an SW16 postcode shared with Streatham, which sits in Lambeth, so householders frequently apply to the wrong council. For planning and building control Norbury is Croydon.",
    stock:
      "Edwardian and interwar terraces and semis, many with the original clay tile or slate still on the main slope and a much younger flat roof over the back addition.",
    hoods: ["London Road", "Norbury Park", "Norwood Grove", "Pollards Hill", "Green Lane"],
    exposure:
      "A busy arterial road runs straight through it, and the grime that comes with that settles on north-facing slopes and in valleys, holding moisture against the covering for longer than a cleaner site would.",
    driveTime: "about 18 minutes",
  },
  {
    name: "South Norwood",
    slug: "south-norwood",
    postcode: "SE25",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Croydon Council, and there is a conservation area covering part of the Victorian street pattern here, so the covering on a front slope generally has to be replaced with the same material rather than an easier modern equivalent.",
    stock:
      "Victorian terraces built for the railway, mostly two-storey with slate front slopes, plus the characteristic back additions with their own small roofs and awkward junctions against the main wall.",
    hoods: ["Portland Road", "South Norwood Lakes", "Grangewood Park", "Selhurst", "Woodside"],
    exposure:
      "Terraces this age share their gutters and their party walls, which means one neglected house can put water into two others. Most of the leaks we trace here start next door.",
    driveTime: "about 15 minutes",
  },
  {
    name: "New Addington",
    slug: "new-addington",
    postcode: "CR0",
    council: CROYDON,
    councilUrl: CROYDON_URL,
    planningNote:
      "Croydon Council. A significant proportion of the estate is ex-local-authority, so on a maisonette or a linked block it is worth establishing who owns which part of the roof before anybody quotes for anything.",
    stock:
      "The First National Housing Trust bought Fisher's Farm in 1935 and had built just over a thousand houses before the war stopped it, with the rest following afterwards. The result is long runs of shallow-pitched cottage-style terraces and semis, concrete tile, minimal eaves overhang.",
    hoods: ["Central Parade", "Fieldway", "Headley Drive", "Milne Park", "King Henry's Drive"],
    exposure:
      "The estate sits on an exposed plateau and has been nicknamed Little Siberia since it was built, because it genuinely runs colder than the rest of Croydon. More frost cycles a winter means more freeze-thaw damage to mortar bedding and to any tile that has already started to spall.",
    driveTime: "about 15 minutes",
  },
  {
    name: "Wallington",
    slug: "wallington",
    postcode: "SM6",
    council: SUTTON,
    councilUrl: SUTTON_URL,
    planningNote:
      "Wallington is the London Borough of Sutton, not Croydon. Different planning portal, different building control team, different local plan - and a mistake worth avoiding if a job needs an application.",
    stock:
      "Edwardian and interwar semis on regular plots, plenty of clay tile and slate, with the hipped roofs and projecting bays that the period built almost everywhere along this stretch.",
    hoods: ["Beddington Park", "Manor Road", "Woodcote Green", "Stafford Road", "Wallington Green"],
    exposure:
      "Low, flat ground on the Wandle valley floor. Less wind exposure than the Downs, but standing water at the foot of downpipes and shallow gutter falls come up more often here than anywhere else on our patch.",
    driveTime: "about 12 minutes",
  },
  {
    name: "Caterham",
    slug: "caterham",
    postcode: "CR3",
    council: TANDRIDGE,
    councilUrl: TANDRIDGE_URL,
    planningNote:
      "Caterham is Surrey and Tandridge District Council, not Croydon, even though it shares the CR postcode. Tandridge has its own local plan and an adopted neighbourhood plan for Caterham, Chaldon and Whyteleafe, and it is due to become part of a new Surrey unitary authority - so check who you are applying to before you apply.",
    stock:
      "Caterham-on-the-Hill and Caterham Valley are two different building stocks in one town: Victorian and Edwardian on the valley floor, and a lot of interwar and postwar development up on the hill, with the steep sites producing some very awkward roof geometry.",
    hoods: ["Caterham-on-the-Hill", "Caterham Valley", "Church Hill", "Whyteleafe", "Chaldon"],
    exposure:
      "Chalk downland at height, in the same band as Kenley. Cold, wet and windy relative to the low ground north of Croydon, and the steep valley sides funnel wind in a way that catches ridge and hip tiles more than exposed elevations would suggest.",
    driveTime: "about 15 minutes",
  },
  {
    name: "Warlingham",
    slug: "warlingham",
    postcode: "CR6",
    council: TANDRIDGE,
    councilUrl: TANDRIDGE_URL,
    planningNote:
      "Tandridge District Council in Surrey, and Warlingham is a parished area, so a parish council is also consulted on applications. Neighbouring Whyteleafe is stranger still - it is a Tandridge village with a handful of streets that fall inside the London Borough of Croydon.",
    stock:
      "A village core around the green with older cottages and tile-hung elevations, ringed by generous interwar and postwar detached houses on large plots, many with substantial and complicated roofs.",
    hoods: ["Warlingham Green", "Limpsfield Road", "Hamsey Green", "Chelsham", "Farleigh"],
    exposure:
      "High, open and rural in feel, with long fetches of open field on the south and east sides. Wind-driven rain gets under laps here that would never leak on a sheltered town roof.",
    driveTime: "about 14 minutes",
  },
  {
    name: "West Wickham",
    slug: "west-wickham",
    postcode: "BR4",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "West Wickham is the London Borough of Bromley. It borders Shirley and Addington so it feels like Croydon from the Croydon side, but the planning authority, the local plan and the building control team are all Bromley's.",
    stock:
      "Predominantly interwar semis and detached houses, with the Coney Hall estate to the east built out in the 1930s, and a common pattern of tile-hung upper elevations that need looking at whenever the roof does.",
    hoods: ["Coney Hall", "Wickham Court", "Station Road", "Hayes Lane", "Corkscrew Hill"],
    exposure:
      "Ground rises towards the Kent border and there is a great deal of mature planting through the residential roads, so the combination that turns up most often here is a shaded north slope, a mossed-up covering and a gutter full of what the moss shed.",
    driveTime: "about 15 minutes",
  },
];
