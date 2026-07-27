// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://paramdave5.github.io',
  base: '/ParamDave',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
