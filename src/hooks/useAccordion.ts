import { ref } from "vue";


export const useAccordion = () => {
	const activeTab = ref<string | null>(null);
	
	const sectionRef = ref<HTMLDivElement | null>(null);

	const setActiveTab = (id: string | null): void => {
		activeTab.value = id === activeTab.value ? null : id;
	};

	const setHeight = (isActive: boolean): void => {
		if (sectionRef.value) sectionRef.value.style.height = isActive ? `${sectionRef.value.scrollHeight}px` : "0px";
 	};


	return {
		activeTab,
		setActiveTab,
		sectionRef,
		setHeight
	};
};