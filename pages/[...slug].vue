<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
// Get the URL slug :
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug || 'home'

// Load Storyblok page :
const story = await useAsyncStoryblok(slug, { version: 'draft' })

// Update SEO :
const seo = story.value.content.seo[0]

useSeoMeta({
	title: seo.title,
	ogTitle: seo.title,
	description: seo.description,
	ogDescription: seo.description,
	ogImage: seo.og_image.filename || ''
})
</script>
