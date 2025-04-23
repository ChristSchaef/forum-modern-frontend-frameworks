import { Link, Outlet } from "react-router";
import { routePaths } from "./router/paths";

export default function Home() {
	return (
		<div>
			<h1>Dead Poets Society</h1>
			<nav
				className="navbar"
				style={{
					paddingBottom: "16px",
				}}
			>
				<Link
					to={{
						pathname: routePaths.home(),
					}}
					className="button"
					aria-current="page"
				>
					Home
				</Link>
				<Link
					to={{
						pathname: routePaths.clubs(),
					}}
					className="button"
					aria-current="page"
				>
					Clubs
				</Link>
				<Link
					to={{
						pathname: routePaths.settings(),
					}}
					className="button"
					aria-current="page"
				>
					Settings
				</Link>
				<Link
					to={{
						pathname: routePaths.profile(),
					}}
					className="button"
					aria-current="page"
				>
					Profile
				</Link>
			</nav>
			<Outlet></Outlet>
		</div>
	);
}
