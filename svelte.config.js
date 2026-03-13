import adapter from '@sveltejs/adapter-static'; // 1. Cambiamos auto por static
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(), // Preprocesador necesario para CSS/TS

    kit: {
        adapter: adapter({
            // 2. Configuramos la salida para GitHub Pages
            pages: 'build',
            assets: 'build',
            fallback: '404.html', // Necesario para que las rutas funcionen al recargar
            precompress: false,
			strict: true
        }),
        paths: {
            // Si tu repo se llama exactamente "Roaham.github.io", deja esto vacío.
            // Si el repo tuviera otro nombre, iría aquí: '/nombre-repo'
            base: '', 
        }
    },
    vitePlugin: {
        dynamicCompileOptions: ({ filename }) =>
            filename.includes('node_modules') ? undefined : { runes: true }
    }
};

export default config;