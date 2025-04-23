import { clubData as clubs } from "../clubs";
import type { Club } from "../types";
import { useEffect, useState } from "react";

export function useClub(id: string | undefined) {
	const [club, setClub] = useState<Club | undefined>();

	useEffect(() => {
		if (!id) {
			setClub(undefined);
			return;
		}
		const foundClub = clubs.find((club) => club.id === id);
		setClub(JSON.parse(JSON.stringify(foundClub)));
	}, [id]);

	return {
		club,
	};
}
