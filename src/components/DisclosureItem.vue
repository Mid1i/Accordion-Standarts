<script setup lang="ts">
	import { computed, watch, useId } from "vue";
	import type { TypeAccordionItem } from "@/types/AccordionItem";
	import { useAccordion } from "@/hooks/useAccordion";

	import "@/assets/styles/accordion.scss";


	type TypeProps = TypeAccordionItem & {
		activeTab: string | null;
	};

	defineEmits<{
		setActive: [id: string | null]
	}>();

	const {
		title = "Заголовок",
		text = "Текст",
		activeTab
	} = defineProps<TypeProps>();

	const id = useId();

	const isActive = computed<boolean>(() => id === activeTab);

	const { sectionRef, setHeight } = useAccordion();
 

	watch(isActive, () => setHeight(isActive.value));
</script>


<template>
	<div class="accordion">
		<dt class="accordion__item">
			<button
				@click="$emit('setActive', id)"
				:aria-controls="`${id}-section`"
				:aria-expanded="isActive ? 'true' : 'false'"
				class="accordion__button"
			>
				<span class="accordion__title">{{ title }}</span>
				<span class="accordion__icon"></span>
			</button>
		</dt>
		<dd 
			:aria-hidden="!isActive"
			:id="`${id}-section`"
			ref="sectionRef"
			class="accordion__section"
		>
			<p class="accordion__text">{{ text }}</p>
		</dd>
	</div>
</template>
