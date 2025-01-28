<template>
	<div class="partials-description-link-blok">
		<p class="description">{{ blok.description }}</p>
		<StoryblokComponent :blok="blok.linkBlok[0]" />
	</div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
