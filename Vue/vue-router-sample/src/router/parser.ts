import type { RouteLocationNormalized } from "vue-router";

export function parseClubId(route: RouteLocationNormalized) {
	const clubId = route.params.clubId;
	if (!clubId) {
		return undefined;
	}
	return clubId.toString();
}

export function parseBookId(route: RouteLocationNormalized) {
	const bookId = route.params.bookId;
	if (!bookId) {
		return undefined;
	}
	return bookId.toString();
}
