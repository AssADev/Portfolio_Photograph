<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const { $lenis } = useNuxtApp()

nuxtApp.hook('page:finish', () => {
	$lenis?.scrollTo(0, { immediate: true })
})
</script>
