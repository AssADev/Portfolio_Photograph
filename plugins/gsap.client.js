import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
	// Config :
	gsap.config({ force3D: true });
	gsap.defaults({ ease: 'none', duration: 0.4 });
	gsap.ticker.lagSmoothing(0);

	// Plugins :
	gsap.registerPlugin(ScrollTrigger);
});
