// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.sesc-rs.com.br',
	base: '/life',
	fonts: [
		{
			name: 'Geist',
			cssVariable: '--font-geist',
			provider: fontProviders.fontsource(),
			weights: ['100 900'],
			styles: ['normal'],
		},
		{
			name: 'Source Sans 3',
			cssVariable: '--font-source-sans-3',
			provider: fontProviders.fontsource(),
			weights: ['200 900'],
			styles: ['normal', 'italic'],
		},
	],
});
