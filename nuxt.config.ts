export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/tools/index.scss" as *;',
				}
			}
		},
	},

	css: ['@/assets/styles/app.scss'],
	modules: ['@nuxt/eslint', '@nuxt/image'],
})
