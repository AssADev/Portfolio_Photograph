<template>
	<div class="partials-media">
		<div class="picture-wrapper">
			<NuxtImg :src="blok.filename" :alt="blok.alt || ''" draggable="false" />
		</div>
	</div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
