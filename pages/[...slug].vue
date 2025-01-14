<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
// Get the URL slug :
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug || 'home'

// Load Storyblok page :
const story = await useAsyncStoryblok(slug, { version: 'draft' })
</script>
