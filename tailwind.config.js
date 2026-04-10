/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        bone: '#E8E0D4',
        champagne: '#C9A96E',
        charcoal: '#0B0B0F',
        smoke: '#1A1A22',
        ash: '#2A2A34',
        mist: '#8B8B99',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      }
    }
  },
  plugins: [],
}
