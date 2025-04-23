import { useParams } from "react-router";
import { useBook } from "../hooks/useBook";
import { useMemo } from "react";
import { parseBookId, parseClubId } from "../router/parser";

export default function () {
	const params = useParams();
	const clubId = useMemo(() => parseClubId(params), [params]);
	const bookId = useMemo(() => parseBookId(params), [params]);
	const { book } = useBook(clubId, bookId);

	return book ? (
		<table>
			<tbody>
				<tr>
					<td className="property">ID</td>
					<td>{book.id}</td>
				</tr>
				<tr>
					<td className="property">Name</td>
					<td>{book.title}</td>
				</tr>
				<tr>
					<td className="property">Description</td>
					<td>{book.description}</td>
				</tr>
			</tbody>
		</table>
	) : null;
}
