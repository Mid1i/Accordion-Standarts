<script setup lang="ts">
	import type { TypeAccordionItem } from "@/types/AccordionItem";
	import AccordionItem from "@/components/AccordionItem.vue";
	import { useAccordion } from "@/hooks/useAccordion";


	defineProps<{
		title: string;
		items: TypeAccordionItem[];
	}>();

	const { activeTab, setActiveTab } = useAccordion();
</script>


<template>
	<div class="faq">
		<h2 class="faq__title">{{ title }}</h2>
		<div class="faq__content">
			<AccordionItem
				v-for="(item, index) in items"
				@set-Active="setActiveTab"
				:is-active="`accordion-${index}` === activeTab"
				:id="`accordion-${index}`"
				:key="item.title"
				:="item"
			/>
		</div>
	</div>
</template>


<style scoped lang="scss">
	@use "@/assets/styles/variables.scss" as *;
	@use "@/assets/styles/mixins.scss" as *;


	.faq {
		display: flex;
		flex-direction: column;
		gap: 50px;

		&__title {
			@include title;
		}
	}
</style>