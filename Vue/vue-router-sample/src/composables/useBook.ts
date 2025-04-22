import { ref, watch, type Ref } from "vue";

import type { Book } from "../types";
import { useClub } from "./useClub";

export function useBook(clubId: Ref<string | undefined>, bookId: Ref<string | undefined>) {
	const { club } = useClub(clubId);
	const book = ref<Book>();

	watch(
		[club, bookId],
		() => {
			if (!club.value) {
				book.value = undefined;
				return;
			}
			const foundBook = club.value.books.find((book) => book.id === bookId.value);
			book.value = JSON.parse(JSON.stringify(foundBook));
		},
		{
			immediate: true,
		},
	);

	return {
		club,
		book,
	};
}
