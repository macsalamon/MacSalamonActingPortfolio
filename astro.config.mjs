import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // For Cloudflare Pages deployment, install @astrojs/cloudflare and configure:
  // output: 'hybrid',
  // adapter: cloudflare()
});
