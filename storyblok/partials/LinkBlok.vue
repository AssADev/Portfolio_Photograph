<template>
	<div class="partials-link-blok">
		<NuxtLink :to="blok.link?.story?.real_path || blok.link?.url" :target="blok.link?.target" :title="blok.link?.story?.name || blok.link?.title">
			<span class="label">{{ blok.label }}</span>
		</NuxtLink>
	</div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
