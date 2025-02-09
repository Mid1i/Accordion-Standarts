<script setup lang="ts">
	import Accordion from "@/components/Accordion.vue";
	import Disclosure from "@/components/Disclosure.vue";
	import { items } from "@/constants";
</script>


<template>
	<section class="container">
		<Accordion title="Accordion Example" :items="items"/>
		<Disclosure title="Disclosure Example" :items="items"/>
	</section>
</template>


<style scoped lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 100px;

		padding: 20px 100px 80px;
	}


	@media(max-width: 1024px) {
		.container {
			padding: 20px 40px 40px;
		}
	}

	@media(max-width: 500px) {
		.container {
			padding: 15px 15px 40px;
		}
	}
</style>
