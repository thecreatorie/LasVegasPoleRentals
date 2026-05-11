// Single source of truth for site-wide constants. Imported anywhere a layout
// or component needs the brand name, phone number, email, or social URLs.

export const siteConfig = {
  name: 'Las Vegas Pole Rentals',
  shortName: 'LVPR',
  url: 'https://lasvegaspolerentals.com',
  description:
    'Rent a portable Lupit pole dance stage in Las Vegas. We deliver, set up, and pick up — 24-hour rentals from $250.',
  phone: '+1-702-205-1440',
  phoneDisplay: '702-205-1440',
  phoneHref: 'tel:+17022051440',
  smsHref:
    'sms:+17022051440?&body=Hello,%20I%20would%20like%20to%20rent%20a%20stripper%20pole',
  email: 'rent@lasvegaspolerentals.com',
  emailHref: 'mailto:rent@lasvegaspolerentals.com',
  areaServed: ['Las Vegas, NV', 'Henderson, NV', 'Summerlin, NV', 'Paradise, NV', 'Spring Valley, NV'],
  parentBrand: {
    name: 'Pole Fitness Studio',
    url: 'https://www.polefitnessstudio.com',
    label: 'Owned by',
  },
  socials: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lasvegaspolerentals',
      icon: 'instagram',
    },
  ],
  pricing: {
    base: 250,
    baseLabel: '$250 / 24 hours',
    extra: 200,
    extraLabel: '$200 / additional day',
  },
  nav: [
    { label: 'Rent a Pole', href: '/rent-a-pole/' },
    { label: 'Gallery', href: '/view-photos/' },
    { label: 'Testimonials', href: '/testimonials/' },
    { label: 'FAQs', href: '/faqs/' },
    { label: 'Contact', href: '/contact/' },
  ],
  stats: [
    { value: 1, prefix: '#', label: 'In Las Vegas' },
    { value: 30, suffix: '+', label: 'Years of pole expertise' },
    { value: 10, suffix: ' min', label: 'Stage setup' },
    { value: 250, prefix: '$', label: 'For 24 hours' },
  ],
} as const;
