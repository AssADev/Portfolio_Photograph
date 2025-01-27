<template>
	<section v-editable="blok" class="modules-title-description">
		<h2>{{ blok.title }}</h2>
		<p>{{ blok.description }}</p>
	</section>
</template>

<script setup>
defineProps({ blok: Object })
</script>
