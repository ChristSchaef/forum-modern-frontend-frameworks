import { Link } from "react-router";
import { clubData as clubs } from "../clubs";
import { routePaths } from "../router/paths";

export default function Clubs() {
	return (
		<div>
			{clubs.length === 0 ? (
				<div>
					<p>No clubs available at the moment.</p>
				</div>
			) : (
				<div>
					<ul>
						{clubs.map((club) => {
							return (
								<li key={club.id}>
									<Link
										to={{
											pathname: routePaths.club(club.id),
										}}
									>
										<h2>{club.name}</h2>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
