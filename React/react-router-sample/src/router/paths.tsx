export const routePaths = {
	home: () => "/" as const,
	clubs: () => "/clubs" as const,
	club: (clubId = ":clubId") => `/clubs/${clubId}` as const,
	books: (clubId = ":clubId") => `/clubs/${clubId}/books` as const,
	book: (clubId = ":clubId", bookId = ":bookId") => `/clubs/${clubId}/books/${bookId}` as const,
	settings: () => "/settings" as const,
	profile: () => "/profile" as const,
} as const;
