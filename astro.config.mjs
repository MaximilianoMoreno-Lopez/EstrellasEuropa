import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maximilianomoreno-lopez.github.io/EstrellasEuropa',
  base: '/EstrellasEuropa',
  output: 'static',
  integrations: [sitemap()],
});
