import fs from 'fs'
import path from 'path'

export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	devServer: {
		https:
			fs.existsSync(path.resolve('localhost-key.pem')) && fs.existsSync(path.resolve('localhost.pem'))
				? {
						key: fs.readFileSync(path.resolve('localhost-key.pem')).toString(),
						cert: fs.readFileSync(path.resolve('localhost.pem')).toString()
					}
				: false
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/tools/index.scss" as *;'
				}
			}
		}
	},

	css: ['@/assets/styles/app.scss'],
	modules: [
		'@nuxt/eslint',
		'@nuxt/image',
		'nuxt-svgo',
		[
			'@storyblok/nuxt',
			{
				accessToken: process.env.STORYBLOK_TOKEN
			}
		]
	]
})
