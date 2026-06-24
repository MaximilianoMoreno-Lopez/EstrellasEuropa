import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://estrellaseuropa.eu',
  output: 'static',
  build: {
    // Inline el CSS en el HTML para evitar <link> que bloquean el render.
    // El payload es pequeño y GitHub Pages cachea poco, así que apenas hay
    // beneficio en mantener la hoja de estilos externa.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://estrellaseuropa.eu/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        return item;
      },
    }),
  ],
});
