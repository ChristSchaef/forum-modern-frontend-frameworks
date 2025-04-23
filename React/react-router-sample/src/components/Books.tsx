import { Link, useParams } from "react-router";
import { useClub } from "../hooks/useClub";
import { useMemo } from "react";
import { parseClubId } from "../router/parser";
import { routePaths } from "../router/paths";

export default function Books() {
	const params = useParams();
	const clubId = useMemo(() => parseClubId(params), [params]);
	const { club } = useClub(clubId);

	return club ? (
		<div>
			{club.books.length === 0 ? (
				<div>
					<p>No books available at the moment.</p>
				</div>
			) : (
				<ul>
					{club.books.map((book) => {
						return (
							<li key={book.id}>
								<Link
									to={{
										pathname: routePaths.book(club.id, book.id),
									}}
								>
									<h2>{book.title}</h2>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	) : null;
}
