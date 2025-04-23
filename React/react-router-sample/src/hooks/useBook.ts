import type { Book } from "../types";
import { useClub } from "./useClub";
import { useEffect, useState } from "react";

export function useBook(clubId: string | undefined, bookId: string | undefined) {
	const [book, setBook] = useState<Book | undefined>();
	const { club } = useClub(clubId);

	useEffect(() => {
		if (!club) {
			setBook(undefined);
			return;
		}
		const foundBook = club.books.find((book) => book.id === bookId);
		setBook(JSON.parse(JSON.stringify(foundBook)));
	}, [club, bookId]);

	return {
		book,
	};
}
