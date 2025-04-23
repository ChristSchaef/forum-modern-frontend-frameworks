import { Outlet, useNavigate, useParams } from "react-router";
import { parseClubId } from "../router/parser";
import { useMemo } from "react";
import { useClub } from "../hooks/useClub";
import { routePaths } from "../router/paths";

export default function () {
	const params = useParams();
	const clubId = useMemo(() => parseClubId(params), [params]);
	const { club } = useClub(clubId);

	const navigate = useNavigate();

	function goToBooks() {
		if (!club?.id) {
			return;
		}
		navigate(routePaths.books(club.id));
	}

	return club ? (
		<div>
			<p>Welcome to club, "{club.name}"</p>
			<button onClick={goToBooks}>Show books</button>
			<Outlet />
		</div>
	) : null;
}
