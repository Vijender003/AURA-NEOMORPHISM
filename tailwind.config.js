/** AURA — unified Neo-Luxury Neumorphic system
 * Canvas #EAEAEA · Ink #262828 · Cool-grey surfaces · Blue-grey restraint · Volt micro-signal only
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#EAEAEA',
        surface: '#EBEDEF',
        cool: '#E2E7EB',
        surfacedark: '#D3D9DE',
        paper: '#F4F5F6',
        ink: '#262828',
        inksoft: '#333636',
        muted: '#5D686F',
        faint: '#8B959C',
        line: '#CCD2D7',
        accent: '#8FA7B8',
        active: '#50616E',
        volt: '#FFF55D',
        climate: '#5B7688',
        air: '#5F7A68',
        lightstate: '#8A7D2E',
        alert: '#9A5F5A',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'neu-1': '5px 5px 12px #B9C1C7, -5px -5px 12px #FFFFFF',
        'neu-2': '8px 8px 22px #B4BCC2, -8px -8px 22px #FFFFFF',
        'neu-3': '14px 14px 36px #AEB6BC, -14px -14px 36px #FFFFFF',
        'neu-sm': '3px 3px 8px #BCC3C9, -3px -3px 8px #FFFFFF',
        'neu-in': 'inset 4px 4px 9px #C2C8CE, inset -4px -4px 9px #FFFFFF',
        'neu-in-sm': 'inset 2px 2px 6px #C2C8CE, inset -2px -2px 6px #FFFFFF',
        'neu-in-lg': 'inset 6px 6px 14px #BCC3C9, inset -6px -6px 14px #FFFFFF',
      },
      borderRadius: { sm: '14px', md: '18px', neu: '22px', 'neu-lg': '28px', pill: '999px' },
      letterSpacing: { meta: '0.18em' },
      maxWidth: { aura: '1200px', prose: '720px' },
    },
  },
  plugins: [],
}
