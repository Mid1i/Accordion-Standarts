<script setup lang="ts">
	import { watch } from "vue";
	import type { TypeAccordionItem } from "@/types/AccordionItem";
	import { useAccordion } from "@/hooks/useAccordion";

	import "@/assets/styles/accordion.scss";


	type TypeProps = TypeAccordionItem & {
		isActive: boolean;
		id: string;
	};

	defineEmits<{
		setActive: [id: string | null]
	}>();

	const props = defineProps<TypeProps>();

	const { sectionRef, setHeight } = useAccordion();


	watch(() => props.isActive, () => setHeight(props.isActive));
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
				<span class="accordion__title" v-html="title"></span>
				<span class="accordion__icon"></span>
			</button>
		</dt>
		<dd 
			:aria-hidden="!isActive"
			:id="`${id}-section`"
			ref="sectionRef"
			class="accordion__section"
		>
			<p class="accordion__text" v-html="text"></p>
		</dd>
	</div>
</template>
