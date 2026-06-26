import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'public', 'marketing');
mkdirSync(dir, { recursive: true });

const presets = {
  'getting-started-featured': ['#DCECEF', '#5F7C8A', '#26353a'],
  'getting-started-experience': ['#E8F4F6', '#6B9AAA', '#2A4A56'],
  'hero-shark-dive': ['#C5DDE3', '#4A6B78', '#141C20'],
  'instructor-competition': ['#D8ECEF', '#5F7C8A', '#1A2E36'],
  'program-training': ['#DCECEF', '#4F6E7C', '#1A1A1A'],
  'program-intro': ['#E3EFF2', '#7FA6B8', '#314B55'],
  'moment-trainee': ['#EDF5F7', '#89AEB9', '#3D5A66'],
  'program-level': ['#D4E6EB', '#5F7C8A', '#243B44'],
  'moment-level': ['#E0EEF1', '#6D919C', '#2F4852'],
  'program-nofin': ['#C8D9DE', '#4A6570', '#152229'],
  'program-fun': ['#DCE8EC', '#5F8A96', '#2C4F5A'],
  'moment-fun': ['#E5F0F3', '#74A0AD', '#355965'],
  'program-online': ['#E8EEF0', '#6B7C8A', '#2A3238'],
};

function svg(stops, variant) {
  const x1 = 15 + variant * 4;
  const x2 = 85 - variant * 3;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bg" x1="${x1}%" y1="0%" x2="${x2}%" y2="100%">
      <stop offset="0%" stop-color="${stops[0]}"/>
      <stop offset="52%" stop-color="${stops[1]}"/>
      <stop offset="100%" stop-color="${stops[2]}"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <circle cx="1220" cy="210" r="220" fill="#FAFAF8" opacity="0.08"/>
  <circle cx="320" cy="710" r="300" fill="#FAFAF8" opacity="0.05"/>
  <circle cx="860" cy="460" r="140" fill="#FAFAF8" opacity="0.04"/>
</svg>
`;
}

Object.entries(presets).forEach(([name, stops], index) => {
  writeFileSync(join(dir, `${name}.svg`), svg(stops, index));
});

console.log(`Generated ${Object.keys(presets).length} marketing SVGs in public/marketing/`);
