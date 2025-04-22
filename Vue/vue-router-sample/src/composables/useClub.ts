import { ref, watch, type Ref } from "vue";

import { clubData as clubs } from "@/clubs";
import type { Club } from "../types";

export function useClub(id: Ref<string | undefined>) {
	const club = ref<Club>();

	watch(
		id,
		() => {
			if (!id.value) {
				club.value = undefined;
				return;
			}
			const foundClub = clubs.find((club) => club.id === id.value);
			club.value = JSON.parse(JSON.stringify(foundClub));
		},
		{
			immediate: true,
		},
	);

	return {
		club,
	};
}
