import gsap from 'gsap'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
	lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

export default defineNuxtPlugin((nuxtApp) => {
	// nuxtApp.$router.beforeEach((to, from, next) => {
	// 	lenis.stop()
	// 	next()
	// })

	// nuxtApp.$router.afterEach(() => {
	// 	lenis.start()
	// })

	nuxtApp.provide('lenis', lenis)
})
