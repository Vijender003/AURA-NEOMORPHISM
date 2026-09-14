/* AURA unified tokens — spacing · type · radii · elevation · motion */
export const palette = {
  base: '#EAEAEA',
  surface: '#EBEDEF',
  cool: '#E2E7EB',
  deep: '#D3D9DE',
  paper: '#F4F5F6',
  ink: '#262828',
  muted: '#5D686F',
  faint: '#8B959C',
  line: '#CCD2D7',
  accent: '#8FA7B8',
  active: '#50616E',
  volt: '#FFF55D', // micro-signal only
};

export const spacing = { section: 88, sectionSm: 56, card: 24, cardLg: 32, gap: 16, gapLg: 20 };
export const radii = { s: 14, m: 18, c: 22, h: 28 };
export const elevation = { flat: 'L0 flat', raised: 'L1 raised', elevated: 'L2 elevated', floating: 'L3 floating', recessed: 'R recessed' };
export const motion = { press: 180, state: 280, spring: { stiffness: 260, damping: 28 } };
export const layout = { max: 1200, prose: 720 };

export const tokens = {
  colors: {
    base: palette.base, surface: palette.surface, surfaceDark: palette.deep,
    text: palette.ink, muted: palette.muted, line: palette.line,
    accent: palette.accent, active: palette.active, white: palette.paper, volt: palette.volt,
    states: { climate: '#5B7688', light: '#8A7D2E', air: '#5F7A68', alert: '#9A5F5A' },
  },
  radius: radii,
  modes: [
    { id: 'focus', name: 'FOCUS', temp: '21.5°C', light: 'Neutral 62%', sound: 'Muted', desc: 'Cooler air, neutral light, distractions dissolved.' },
    { id: 'relax', name: 'RELAX', temp: '23.5°C', light: 'Warm 38%', sound: 'Soft 24%', desc: 'Warm glow, low sound, comfort-first climate.' },
    { id: 'sleep', name: 'SLEEP', temp: '19.0°C', light: 'Off 2%', sound: 'Silent', desc: 'Dark, quiet, thermally tuned for deep rest.' },
    { id: 'create', name: 'CREATE', temp: '22.4°C', light: 'Balanced 68%', sound: 'Spatial 41%', desc: 'Balanced spectrum, spatial audio, steady focus.' },
    { id: 'entertain', name: 'ENTERTAIN', temp: '22.0°C', light: 'Dynamic 84%', sound: 'Immersive 72%', desc: 'Dynamic light, cinematic sound, social warmth.' },
  ],
};

export const envDefaults = { temperature: 24.0, humidity: 48, aqi: 96, light: 72, energy: 4.2, occupancy: 2, sound: 38 };
