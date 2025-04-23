import { Params } from "react-router";

export function parseClubId(params: Params<string>) {
	const clubId = params.clubId;
	if (!clubId) {
		return undefined;
	}
	return clubId.toString();
}

export function parseBookId(params: Params<string>) {
	const bookId = params.bookId;
	if (!bookId) {
		return undefined;
	}
	return bookId.toString();
}
