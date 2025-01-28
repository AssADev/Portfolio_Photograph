<template>
	<main v-editable="blok" class="pages-home">
		<h1>Home</h1>
		<StoryblokComponent :blok="blok.heroHome[0]" />
		<StoryblokComponent :blok="blok.titleDescription[0]" />
		<StoryblokComponent :blok="blok.projectsList[0]" />
		<StoryblokComponent :blok="blok.quote[0]" />
	</main>
</template>

<script setup>
defineProps({ blok: Object })
</script>
