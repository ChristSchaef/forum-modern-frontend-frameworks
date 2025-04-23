import { createBrowserRouter } from "react-router";
import Home from "../Home";

import Clubs from "../components/Clubs";
import ClubOverview from "../components/ClubOverview";
import ClubOverviewMain from "../components/ClubOverviewMain";

import Books from "../components/Books";
import BookOverview from "../components/BookOverview";
import BookOverviewMain from "../components/BookOverviewMain";

import Settings from "../components/Settings";
import Profile from "../components/Profile";
import { routePaths } from "./paths";

export const router = createBrowserRouter([
	{
		path: routePaths.home(),
		id: "Home",
		Component: Home,
		children: [
			{
				path: routePaths.clubs(),
				id: "Clubs",
				Component: Clubs,
			},
			{
				path: routePaths.club(),
				Component: ClubOverview,
				children: [
					{
						path: routePaths.club(),
						id: "ClubOverview",
						Component: ClubOverviewMain,
					},
					{
						path: routePaths.books(),
						id: "Books",
						Component: Books,
					},
					{
						path: routePaths.book(),
						Component: BookOverview,
						children: [
							{
								path: routePaths.book(),
								id: "BookOverview",
								Component: BookOverviewMain,
							},
						],
					},
				],
			},
			{
				path: routePaths.settings(),
				id: "Settings",
				Component: Settings,
			},
			{
				path: routePaths.profile(),
				id: "Profile",
				Component: Profile,
			},
		],
	},
]);
