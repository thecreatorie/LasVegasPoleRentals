const CLOUD = 'wb2a64ho';

export function cloudinaryUrl(
  publicId: string,
  opts: { width?: number; height?: number; crop?: string; gravity?: string; format?: string; quality?: string } = {},
) {
  const parts: string[] = [];
  if (opts.width) parts.push(`w_${opts.width}`);
  if (opts.height) parts.push(`h_${opts.height}`);
  if (opts.crop) parts.push(`c_${opts.crop}`);
  if (opts.gravity) parts.push(`g_${opts.gravity}`);
  parts.push(opts.quality ?? 'q_auto');
  parts.push(opts.format ?? 'f_auto');
  const tx = parts.join(',');
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${tx}/${publicId}.jpg`;
}

export function cloudinarySrcset(publicId: string, widths: number[]) {
  return widths
    .map((w) => `${cloudinaryUrl(publicId, { width: w })} ${w}w`)
    .join(', ');
}

export function cloudinaryVideoUrl(
  publicId: string,
  opts: { width?: number; format?: string; quality?: string } = {},
) {
  const parts: string[] = [];
  if (opts.width) parts.push(`w_${opts.width}`);
  parts.push(opts.quality ?? 'q_auto');
  const tx = parts.join(',');
  const fmt = opts.format ?? 'mp4';
  return `https://res.cloudinary.com/${CLOUD}/video/upload/${tx}/${publicId}.${fmt}`;
}

export function cloudinaryVideoPoster(publicId: string, width = 800) {
  return `https://res.cloudinary.com/${CLOUD}/video/upload/w_${width},q_auto,f_auto/${publicId}.jpg`;
}

export interface MediaItem {
  publicId: string;
  alt: string;
  category: 'hero' | 'hotel' | 'party' | 'venue' | 'outdoor' | 'performance' | 'editorial' | 'production';
  featured?: boolean;
}

export const images: MediaItem[] = [
  // ── HERO / LUXURY HIGH-RISE ─────────────────────────────────────────
  { publicId: 'Photo_Jul_03_2024_4_26_07_PM', alt: 'Portable pole stage in a luxury high-rise suite overlooking the Las Vegas Strip', category: 'hero', featured: true },
  { publicId: 'Photo_Mar_13_2025_6_25_19_PM', alt: 'Performer on a rented pole in a luxury penthouse with panoramic Strip views', category: 'hero', featured: true },
  { publicId: 'Photo_May_11_2025_6_24_42_PM', alt: 'Pole performer in a high-rise hotel suite with floor-to-ceiling windows', category: 'hero' },

  // ── HOTEL SUITES ────────────────────────────────────────────────────
  { publicId: 'Photo_Jul_11_2024_11_09_06_PM', alt: 'Pole stage in a hotel room with Las Vegas Strip lights through the window', category: 'hotel' },
  { publicId: 'Photo_Sep_16_2022_1_44_53_PM', alt: 'Pole stage set up in an elegant boutique hotel suite', category: 'hotel' },
  { publicId: 'Photo_Oct_27_2023_9_57_45_PM', alt: 'Portable pole in a hotel room at night with city lights visible', category: 'hotel' },
  { publicId: 'Photo_Nov_30_2023_6_25_04_PM', alt: 'Pole stage in a hotel bedroom with nighttime city view', category: 'hotel' },
  { publicId: 'Photo_Sep_05_2026_7_25_10_PM', alt: 'Pole stage in a Las Vegas hotel room decorated with balloons for a celebration', category: 'hotel' },

  // ── PARTIES & CELEBRATIONS ──────────────────────────────────────────
  { publicId: 'Photo_Jun_26_2026_6_29_45_PM', alt: 'Bachelorette party group of sixteen women posing with a rented pole in a Las Vegas hotel suite', category: 'party', featured: true },
  { publicId: 'Photo_May_04_2024_7_16_23_PM', alt: 'Bachelorette party suite with pink balloon arch and pole stage', category: 'party' },
  { publicId: 'Photo_May_03_2024_5_18_30_PM', alt: 'Las Vegas bachelorette party suite with pink balloons, disco ball, and pole', category: 'party' },
  { publicId: 'Photo_Jan_24_2026_6_09_59_PM', alt: 'Birthday party setup with pole stage in a decorated living room', category: 'party' },
  { publicId: 'Photo_Jan_24_2026_6_10_30_PM', alt: 'House party with pole stage under colorful UV party lighting', category: 'party' },
  { publicId: 'Photo_Oct_22_2023_6_41_44_PM', alt: 'Pole stage set up in a home kitchen for a Halloween party', category: 'party' },

  // ── VENUES & EVENT SPACES ───────────────────────────────────────────
  { publicId: 'Photo_Mar_08_2024_4_43_36_PM', alt: 'Pole stage set up in a restaurant banquet hall for a private event', category: 'venue', featured: true },
  { publicId: 'Photo_Jan_25_2024_5_43_14_AM', alt: 'Pole stage at a Las Vegas nightclub venue with professional lighting', category: 'venue' },
  { publicId: 'Photo_Jul_23_2025_9_54_58_PM', alt: 'Group of performers around a pole at an upscale Las Vegas venue', category: 'venue' },
  { publicId: 'Photo_Jul_23_2025_9_55_18_PM', alt: 'Pole performance at an elegant venue with pink and purple lighting', category: 'venue' },
  { publicId: 'Photo_Sep_08_2023_1_23_52_PM', alt: 'Pole stage in a blue-lit bar and lounge with neon signage', category: 'venue' },
  { publicId: 'Photo_Oct_21_2026_7_29_46_PM_1', alt: 'Pole stage at an elegant event space with black decor and feather centerpieces', category: 'venue' },
  { publicId: 'Photo_Oct_21_2026_8_28_37_PM', alt: 'Portable pole in a luxury mansion living room with crystal chandeliers', category: 'venue' },
  { publicId: 'Photo_Sep_07_2021_9_16_59_PM', alt: 'Pole stage in a stylish modern living room with designer furniture', category: 'venue' },

  // ── OUTDOOR & POOL ──────────────────────────────────────────────────
  { publicId: 'Photo_Jun_28_2026_9_57_36_AM', alt: 'Pole stage set up poolside in a Las Vegas backyard', category: 'outdoor', featured: true },
  { publicId: 'Photo_Oct_21_2026_8_19_22_PM', alt: 'Pole stage by a luxury pool with blue LED lighting at night', category: 'outdoor' },
  { publicId: 'Photo_Apr_20_2026_10_30_00_AM', alt: 'Portable pole stage outdoors on a driveway in the Las Vegas desert', category: 'outdoor' },
  { publicId: 'Photo_Mar_24_2026_5_23_08_PM', alt: 'Performer doing an inverted trick on a rooftop with the Las Vegas Sphere and High Roller visible', category: 'outdoor', featured: true },
  { publicId: 'Photo_Sep_19_2025_11_27_35_PM', alt: 'Pole performance on a Las Vegas rooftop at night with the Sphere in the background', category: 'outdoor' },

  // ── PERFORMANCES & SHOWS ────────────────────────────────────────────
  { publicId: 'TASTE_34', alt: 'Pole performer at a live show with purple stage lighting and audience', category: 'performance' },
  { publicId: 'TASTE_16', alt: 'Multiple performers on pole at a Las Vegas live entertainment show', category: 'performance' },

  // ── EDITORIAL / PROMOTIONAL ─────────────────────────────────────────
  { publicId: 'Photo_Oct_21_2026_7_33_15_PM', alt: 'Performer on a pole mounted on a CAT mining truck in the desert', category: 'editorial', featured: true },
  { publicId: 'Photo_May_11_2021_12_07_48_PM', alt: 'Pole performer doing an inverted trick by a lake at sunset', category: 'editorial' },
  { publicId: 'Photo_Oct_23_2016_12_57_45_PM', alt: 'Performer on a pole stage outdoors with a water spray effect', category: 'editorial' },
  { publicId: 'Photo_Oct_21_2026_7_49_36_PM', alt: 'Studio shot of pole stage with purple lighting and money scattered around', category: 'editorial' },

  // ── PRODUCTION SCALE ────────────────────────────────────────────────
  { publicId: 'Photo_Mar_16_2024_7_28_06_AM', alt: 'Multiple pole stages lined up backstage at a major Las Vegas concert', category: 'production', featured: true },
  { publicId: 'Photo_May_04_2024_7_16_23_PM', alt: 'Pole stage in an elegant banquet hall with ornate mirror and crystal vases', category: 'venue' },

  // ── MEDIA / TV ─────────────────────────────────────────────────────────
  { publicId: 'Photo_Apr_08_2025_8_53_30_AM', alt: 'Fawnia Mondey on the Las Vegas Morning Blend TV show', category: 'performance' },
];

export const videos = [
  { publicId: 'Video_Apr_06_2025_7_41_38_PM', alt: 'Pole performance video' },
  { publicId: 'Video_Aug_05_2020_9_09_26_PM', alt: 'Pole stage rental setup video' },
];

export const heroImage = images.find((i) => i.publicId === 'Photo_Mar_16_2024_7_28_06_AM')!;
export const heroPerformer = images.find((i) => i.publicId === 'Photo_Jul_23_2025_9_55_18_PM')!;

export function byCategory(cat: MediaItem['category']) {
  return images.filter((i) => i.category === cat);
}

export function featured() {
  return images.filter((i) => i.featured);
}
