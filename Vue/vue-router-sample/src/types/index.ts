export type Club = {
	id: string;
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
