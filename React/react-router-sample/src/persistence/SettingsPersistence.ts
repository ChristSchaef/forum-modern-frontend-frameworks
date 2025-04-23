import { Settings } from "../types";

const FORUM_REACT_FORMS_SETTINGS = "forum.forms.settings" as const;

export class SettingsPersistence {
	async getSettings(): Promise<Settings | undefined> {
		const settingsString = localStorage.getItem(FORUM_REACT_FORMS_SETTINGS);
		if (settingsString) {
			return JSON.parse(settingsString!) as Settings;
		} else {
			return undefined;
		}
	}

	async putSettings(settings: Settings): Promise<Settings> {
		localStorage.setItem(FORUM_REACT_FORMS_SETTINGS, JSON.stringify(settings));
		return settings;
	}

	async resetSettings(): Promise<Settings> {
		const settingsDefaults: Settings = {
			mainClub: "1",
			preferredGenres: [],
			notifications: {
				email: false,
				push: false,
				newsletter: false,
			},
		};
		localStorage.setItem(FORUM_REACT_FORMS_SETTINGS, JSON.stringify(settingsDefaults));
		return settingsDefaults;
	}
}
