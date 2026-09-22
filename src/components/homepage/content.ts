export const statistics = [
  { value: 500, suffix: "+", label: "Executives Placed", icon: "people" },
  { value: 120, suffix: "+", label: "Global Clients", icon: "building" },
  { value: 35, suffix: "+", label: "Countries", icon: "globe" },
  { value: 95, suffix: "%", label: "Client Satisfaction", icon: "star" },
] as const;

export const features = [
  { title: "Global Reach", description: "Access to top talent across key markets.", icon: "target" },
  { title: "Executive Expertise", description: "Deep sector and functional knowledge.", icon: "people" },
  { title: "Lasting Impact", description: "Leadership for today and tomorrow.", icon: "growth" },
] as const;

export const services = [
  { title: "Executive Search", description: "Identifying and attracting exceptional talent for critical leadership roles.", icon: "people", href: "/services#executive-search" },
  { title: "Board Advisory", description: "Supporting boards with independent advice and talent solutions.", icon: "document", href: "/services#board-advisory" },
  { title: "Leadership Advisory", description: "Building stronger, more resilient leadership teams.", icon: "growth", href: "/services#leadership-advisory" },
  { title: "Talent Intelligence", description: "Market insights to guide smarter hiring and succession planning.", icon: "people", href: "/services#talent-intelligence" },
] as const;

export const sectors = [
  { title: "Aerospace & Defence", image: "aerospace", alt: "Passenger aircraft taking off", href: "/sectors#aerospace-defence" },
  { title: "Industrial & Manufacturing", image: "manufacturing", alt: "Industrial production facility", href: "/sectors#industrial-manufacturing" },
  { title: "Technology & Digital", image: "technology", alt: "Detailed electronic circuit board", href: "/sectors#technology-digital" },
  { title: "Healthcare & Life Sciences", image: "healthcare", alt: "Laboratory research with a microscope and glassware", href: "/sectors#healthcare-life-sciences" },
  { title: "Financial Services", image: "financial", alt: "Modern glass office towers", href: "/sectors#financial-services" },
  { title: "Energy & Sustainability", image: "energy", alt: "Wind turbine generating renewable energy", href: "/sectors#energy-sustainability" },
] as const;

export const processSteps = [
  { title: "Understand", description: "We listen to your goals and leadership needs." },
  { title: "Identify", description: "We access and assess exceptional talent." },
  { title: "Engage", description: "We facilitate the right conversations." },
  { title: "Deliver", description: "We support successful outcomes and beyond." },
] as const;

export const testimonialPlaceholder = {
  label: "CLIENT PERSPECTIVE",
  quote: "Crestavia brought us an exceptional leader who has made a real difference to our business. Their insight, professionalism and global reach are outstanding.",
  attribution: "Chief Executive Officer",
  organisation: "FTSE 100 Organisation",
} as const;

export const quickLinks = [
  ["Home", "/"], ["About", "/about"], ["Our Services", "/services"],
  ["Sectors", "/sectors"], ["Insights", "/insights"], ["Careers", "/careers"], ["Contact", "/contact"],
] as const;
