import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bermuda0427.github.io',
  base: '/demo-audio',
  vite: {
    plugins: [tailwindcss()],
  },
});