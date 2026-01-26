// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import starlightAutoSidebar from 'starlight-auto-sidebar'
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://guides.milohax.org/',
  base: '/',
  redirects: {
    "/": "/en/",
  },
  integrations: [
    starlight({
      title: 'MiloHax Guides',
      components: {
        Search: './src/components/Search.astro',
      },
      logo: {
        dark: './public/milohax.png',
        light: './public/milohax-dark.png',
        alt: 'MiloHax Guides',
        replacesTitle: true,
      },
      social: [
        { icon: 'information', label: 'Website', href: 'https://milohax.org/' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/milohax' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/hmxmilohax' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@MiloHax' },
        { icon: 'twitter', label: 'GitLab', href: 'https://twitter.com/hmxmilohax' },
      ],
      plugins: [
        starlightAutoSidebar(),
        starlightUtils({ multiSidebar: { switcherStyle: 'hidden' }}),
      ],
      sidebar: [
        {
          label: 'PS3 Customs',
          autogenerate: { directory: 'rb3/ps3customs', },
        },
        {
          label: 'Rock Band 3 + RPCS3',
          autogenerate: { directory: 'rb3/rpcs3', },
        },
        {
          label: 'Charting',
          autogenerate: { directory: 'charting/', },
        },
      ],

      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        en: { label: 'English' },
        // Spanish docs in `src/content/docs/es/`
        es: { label: 'Español', lang: 'es' },
      },
    }),
    mdx(),
  ],
});
