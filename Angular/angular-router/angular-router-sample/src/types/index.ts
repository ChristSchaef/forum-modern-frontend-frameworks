export type Club = {
	id: number;
	name: string;
	books: Book[];
};

export type Book = {
	id: number;
	title: string;
	author: string;
	year: number;
	description: string;
};

export type Settings = {
	mainClub: string;
	preferredGenres: string[];
	notifications: {
		email: boolean;
		push: boolean;
		newsletter: boolean;
	};
};
