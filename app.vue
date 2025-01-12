<template>
  <div class="app">
	<h1>Work in progress</h1>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const { $lenis } = useNuxtApp()

nuxtApp.hook('page:finish', () => {
	$lenis?.scrollTo(0, { immediate: true })
})
</script>