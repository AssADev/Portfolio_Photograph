<template>
	<main v-editable="blok" class="pages-home">
		<h1>Home</h1>
		<StoryblokComponent :blok="blok.titleDescription[0]" />
	</main>
</template>

<script setup>
defineProps({ blok: Object })
</script>
