export const devices = [
  {
    id: 'hub',
    name: 'AURA HUB',
    tag: 'Central intelligence',
    price: '₹ 49,900',
    priceValue: 49900,
    desc: 'The mind of the environment. Fuses every sensor stream into one calm, decisive intelligence.',
    specs: { compute: 'Aura N1 · on-device', range: 'Whole home mesh', power: '12W avg', material: 'Anodised aluminium · ceramic' },
    dims: '148 × 148 × 32 mm · 620 g',
    color: '#262828',
  },
  {
    id: 'sense',
    name: 'AURA SENSE',
    tag: 'Environmental sensing',
    price: '₹ 14,900',
    priceValue: 14900,
    desc: 'Sees what you feel. Temperature, humidity, CO₂, VOC, light, occupancy — 14 streams, every second.',
    specs: { sensors: '14 channels', accuracy: '±0.1°C · ±1% RH', power: 'Battery 2 yr / USB-C', material: 'Matte composite · glass' },
    dims: '72 × 72 × 18 mm · 96 g',
    color: '#262828',
  },
  {
    id: 'light',
    name: 'AURA LIGHT',
    tag: 'Adaptive lighting',
    price: '₹ 18,900',
    priceValue: 18900,
    desc: 'Circadian-correct light that shifts from dawn amber to focus-neutral without you touching a switch.',
    specs: { output: '800–2400 lm', temp: '1800–6500K CRI 97', power: '9.5W', material: 'Opal glass · aluminium' },
    dims: 'Modular panels · strips · spots',
    color: '#262828',
  },
  {
    id: 'air',
    name: 'AURA AIR',
    tag: 'Air-quality management',
    price: '₹ 34,900',
    priceValue: 34900,
    desc: 'Silent purification that anticipates pollution before your lungs notice it.',
    specs: { cadr: '420 m³/h', noise: '19 dB sleep', filter: 'HEPA-14 + carbon', material: 'Fabric · ceramic' },
    dims: '320 × 320 × 620 mm · 11 kg',
    color: '#262828',
  },
  {
    id: 'sound',
    name: 'AURA SOUND',
    tag: 'Spatial audio',
    price: '₹ 29,900',
    priceValue: 29900,
    desc: 'Room-aware acoustics. The space tunes itself — absorption, reflection, focus, immersion.',
    specs: { drivers: '7 + sub array', spatial: 'Room-mapped 360°', power: '65W', material: 'Acoustic fabric · oak' },
    dims: '640 × 140 × 140 mm',
    color: '#262828',
  },
  {
    id: 'display',
    name: 'AURA DISPLAY',
    tag: 'Command surface',
    price: '₹ 39,900',
    priceValue: 39900,
    desc: 'A machined-glass dial-surface. The whole home, under one fingertip, with physical detents.',
    specs: { display: '10.2” tactile e-ink + OLED ring', haptics: 'Linear + detent dial', power: 'PoE / USB-C', material: 'Gorilla glass · steel' },
    dims: '260 × 180 × 12 mm',
    color: '#262828',
  },
];

export const inr = (n) => '₹ ' + n.toLocaleString('en-IN');

export const routines = [
  { id: 'morning', name: 'GOOD MORNING', time: '06:45', steps: [['Blinds', 'OPEN'], ['Lighting', '35% warm'], ['Temperature', '22°C'], ['Air', 'PURIFY'], ['Sound', 'Morning playlist']] },
  { id: 'focus', name: 'DEEP FOCUS', time: '08:30', steps: [['Lighting', 'Neutral'], ['Temperature', '23°C'], ['Sound', 'OFF'], ['Notifications', 'MINIMAL'], ['Air', 'FRESH']] },
  { id: 'return', name: 'EVENING RETURN', time: '18:40', steps: [['Lighting', 'Warm 45%'], ['Temperature', '23.5°C'], ['Sound', 'Evening mix 24%'], ['Security', 'DISARM HOME']] },
  { id: 'sleep', name: 'NIGHT SLEEP', time: '22:30', steps: [['Lighting', 'OFF'], ['Temperature', '19°C'], ['Sound', 'SILENT'], ['Security', 'ARM NIGHT']] },
];

export const posts = [
  {
    id: 'rhythm', cat: 'INTELLIGENCE', title: 'The home that keeps your rhythm', read: '6 min', date: 'Sep 02, 2026', author: 'AURA Studio',
    excerpt: 'Why the best automation is the one you never notice — on circadian design and calm prediction.',
    body: [
      'The most reliable technology in your life is the kind you never operate. You do not steer your refrigerator or negotiate with your plumbing. AURA applies the same standard to the whole room: the environment should keep your rhythm without asking you to keep its.',
      'Every person runs on loops — wake, focus, drift, return, rest. AURA watches those loops the way a good host watches a guest: peripherally, respectfully, and only to remove friction. Light arrives a few minutes before you need it. Temperature drifts half a degree before discomfort registers. Air refreshes before stuffiness becomes a thought.',
      'Prediction here is deliberately boring. There is no score, no streak, no dashboard to babysit. When the system is confident, it acts silently. When it is unsure, it stays out of the way and keeps the manual control exactly where your hand expects it — a dial, a slider, a single press.',
      'That restraint is the product. A home that keeps your rhythm does not impress you daily. It simply never interrupts you — and after a month, any other room feels slightly broken.',
    ],
  },
  {
    id: 'light-bio', cat: 'LIGHT', title: 'Light is a biological signal', read: '8 min', date: 'Aug 24, 2026', author: 'AURA Studio',
    excerpt: '1800K to 6500K: how spectrum shapes cortisol, focus and sleep — and how AURA tunes it.',
    body: [
      'Light is not decoration. It is the strongest time signal your biology receives — stronger than sound, temperature, or habit. Spectrum tells your cortisol when to rise, your melatonin when to wait, and your attention what kind of hour this is.',
      'AURA LIGHT moves across 1800K to 6500K at CRI 97, which means colours stay true while the signal changes. Mornings open warm and low, like dawn through glass. Focus hours settle into a neutral 5000K that holds attention without glare. Evenings descend to amber so sleep pressure can build undisturbed.',
      'The key is gradualism. Abrupt scene changes feel theatrical and break concentration. AURA shifts spectrum over tens of minutes — slow enough that you notice only the effect: easier mornings, steadier afternoons, faster sleep onset.',
      'If you remember one number, remember this: one lux at the wrong hour matters more than a hundred lux at the right one. Timing beats brightness.',
    ],
  },
  {
    id: 'air-math', cat: 'AIR', title: 'The mathematics of fresh air', read: '5 min', date: 'Aug 15, 2026', author: 'AURA Studio',
    excerpt: 'CO₂, VOC and the 96 AQI target: what clean really means, measured every second.',
    body: [
      'Fresh air is a feeling with a formula. CO₂ above 1000 ppm dulls decision-making. VOC spikes from cooking or cleaning irritate before you can name them. A single number like AQI hides all of this — so AURA measures the components, not just the headline.',
      'Fourteen streams per room — CO₂, VOC, particulates, humidity, temperature — sampled every second and fused on-device. The target most rooms hold is the equivalent of 96 AQI: crisp without being arid, exchanged without being draughty.',
      'Purification runs ahead of pollution, not behind it. When the kitchen starts cooking, the living room already raises exchange. When the street peaks at rush hour, intakes bias to filtration rather than volume.',
      'You will never see most of this happening. The only evidence is negative: no afternoon stuffiness, no stale mornings, no guessing whether to open a window.',
    ],
  },
  {
    id: 'quiet', cat: 'SOUND', title: 'Designing quiet', read: '7 min', date: 'Aug 06, 2026', author: 'AURA Studio',
    excerpt: '19 decibels and the architecture of attention. Notes from our acoustic lab.',
    body: [
      'Attention is acoustic before it is visual. A room at 45 dB forces continuous micro-recovery; the same room at 30 dB lets thought run uninterrupted. AURA targets 19 dB in sleep — quieter than leaves — because the floor matters more than the peaks.',
      'Hardware helps: isolatedDUAL-counter-rotating fans, decoupled panels, fabric chosen for absorption curves rather than appearance. But behaviour matters more. The system learns which sounds are signal — a kettle, a knock, a voice calling — and which are residue to absorb.',
      'Focus mode does not mute the world; it edits it. Low rumble falls away, voices stay intelligible, notifications collapse to a single digest. Entertain mode reverses the curve: the room opens up, reflections lift, bass finds its corners.',
      'Quiet, done well, is not silence. It is the right sounds at the right level — and nothing else.',
    ],
  },
  {
    id: 'privacy', cat: 'PRIVACY', title: 'Local-first intelligence', read: '4 min', date: 'Jul 28, 2026', author: 'AURA Studio',
    excerpt: 'Your patterns stay in your walls. How on-device inference changes trust.',
    body: [
      'An environment that understands you also knows a great deal about you — when you wake, when you leave, when the house is empty. That knowledge must never become leverage. So AURA infers locally, on the Hub, inside your walls.',
      'Raw sensor streams never leave the home. Routines, preferences and occupancy stay on-device. If you opt into improvements, only encrypted, anonymous model deltas travel — never audio, never timelines, never identities.',
      'This is not a policy patch; it is an architecture. The cloud is a guest that delivers updates, never a host that watches behaviour. Disconnect the internet and every routine, dial and automation keeps working.',
      'Trust is a spec, tested like any other: what leaves, when, in what form, and how to verify it. Ask us for the packet logs — we publish them.',
    ],
  },
  {
    id: 'material', cat: 'DESIGN', title: 'Why controls must feel physical', read: '9 min', date: 'Jul 18, 2026', author: 'AURA Studio',
    excerpt: 'Detents, drag and depth: the industrial design behind Neo-Luxury Neumorphism.',
    body: [
      'A touchscreen asks your eyes to do the work your fingers should do. You look, aim, confirm — three steps for something a dial does in one turn. AURA controls are physical first because environments are operated half-blind: reaching in the dark, glancing mid-conversation, adjusting without breaking flow.',
      'Every control carries weight. Dials have detents you can count without looking. Sliders resist slightly at the ends so OFF and MAX announce themselves. Toggles travel far enough that the state is visible across the room.',
      'Neumorphism, done properly, is not decoration — it is affordance. Raised means pressable. Recessed means settable. Depth communicates state faster than labels, and it survives low light, age, and distraction.',
      'The benchmark is simple: can a guest operate any room correctly, first try, without instruction? If yes, the interface has disappeared into the experience — which was the entire point.',
    ],
  },
];
