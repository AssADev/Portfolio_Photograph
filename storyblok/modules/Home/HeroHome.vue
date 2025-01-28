<template>
	<section v-editable="blok" class="modules-hero-home">
		<Media :blok="blok.media" />
		<StoryblokComponent :blok="blok.descriptionLinkBlok[0]" />
	</section>
</template>

<script setup>
import Media from '~/components/Partials/Media.vue'

defineProps({ blok: Object })
</script>
