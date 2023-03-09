import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from "mdsvex";
import remarkMath from 'remark-math'
import rehypeKatexSvelte from 'rehype-katex-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions:[".svelte",".svx",".md"],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(),
		mdsvex({ extensions: ['.svx', '.md'],

		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatexSvelte] })],

	kit: {
		adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    })
	}
};

export default config;
