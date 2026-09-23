export type Partner = {
  name: string;
  where: string;
  why: string;
  href?: string;
};

export const herdPartners: Partner[] = [
  {
    name: "Sleeping Giant Genetics",
    where: "Livingston, MT",
    why: "Working cattle ET in the grant corridor: flush, implant, storage. First Montana barn to call.",
    href: "https://www.sleepinggiantgenetics.com/",
  },
  {
    name: "Frontier Embryo Center",
    where: "Public site: Hecla, SD",
    why: "High-volume recip, flush, and IVF. Dossier listed Browning / Great Falls — confirm the Montana yard before a visit.",
    href: "https://www.frontierembryocenter.com/",
  },
  {
    name: "Sitz Angus Ranch",
    where: "Harrison / Dillon, MT",
    why: "Premier registered seedstock. Early adopter of ET. Recipient-management scale, not a contract lab.",
    href: "https://www.sitzangus.com/",
  },
  {
    name: "ORIGen",
    where: "Huntley, MT",
    why: "Bull collection and commercial reproduction center east of Billings. Custom ET collections and frozen transfer.",
    href: "https://origenbeef.org/",
  },
  {
    name: "Montana Equine Medical & Surgical Center",
    where: "Logan hospital · Helena ambulatory",
    why: "University-level equine hospital. Donor mare flushes and recipient synchronizations sit here, not at a cattle ET barn.",
    href: "https://mtequine.com/",
  },
];

export const eduPartners: Partner[] = [
  {
    name: "MSU Department of Animal and Range Sciences",
    where: "Bozeman",
    why: "Bovine embryology, IVP, recipient synchronization. Reproductive physiology labs working on early embryonic arrest.",
    href: "https://animalrange.montana.edu/",
  },
  {
    name: "MSU Equine Science Program",
    where: "Bozeman",
    why: "Performance mare reproductive physiology, standing uterine flushes, embryo recovery management.",
    href: "https://www.montana.edu/academics/animal-science/",
  },
  {
    name: "MSU Spectrum Lab",
    where: "Bozeman",
    why: "Optoelectronics and RF. The bench for network analysis, S-parameters, and resonator calibration — not a cattle lab.",
    href: "https://spectrum.montana.edu/",
  },
  {
    name: "Montana Agricultural Experiment Station",
    where: "Seven research centers",
    why: "Beef cattle herds for longitudinal field-trial recipients. Fort Keogh partnership is already in the MAES network.",
    href: "https://agresearch.montana.edu/",
  },
];

export const capitalPartners: Partner[] = [
  {
    name: "Next Frontier Capital",
    where: "Bozeman",
    why: "Rocky Mountain deep tech. Typical $2–5M checks. After a blinded bovine curve, not week one.",
    href: "https://nextfrontiercapital.com/",
  },
  {
    name: "Two Bear Capital",
    where: "Whitefish",
    why: "Life sciences and technology. Home base in Montana. Computational biology and sensors are in-thesis.",
    href: "https://www.twobearcapital.com/",
  },
  {
    name: "Frontier Angels",
    where: "Bozeman / Missoula",
    why: "Montana angel syndicate. Seed and Series A with local roots. Hardware and ag-tech are in-scope.",
    href: "https://frontierangels.com/",
  },
  {
    name: "Montana Growth Through Agriculture",
    where: "Dept. of Agriculture",
    why: "Non-dilutive grants and loans. Statute is $50k grant / $100k loan (1:1 match). Combined ceiling is the $150k in the dossier.",
    href: "https://agr.mt.gov/GTA",
  },
  {
    name: "Montana Board of Research and Commercialization Technology",
    where: "State statute still on the books",
    why: "University-industry tech-transfer grants. Confirm current appropriation before treating as live money.",
  },
];
