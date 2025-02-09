<script setup lang="ts">
	import type { TypeAccordionItem } from "@/types/AccordionItem";
	import DisclosureItem from "@/components/DisclosureItem.vue";
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
		<dl class="faq__content">
			<DisclosureItem
				v-for="(item, index) in items"
				@set-Active="setActiveTab"
				:is-active="`disclosure-${index}` === activeTab"
				:id="`disclosure-${index}`"
				:key="item.title"
				:="item"
			/>
		</dl>
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