import { Settings } from "../types";

const NAMESPACE_FORUM_FORMS_SETTINGS = "forum.forms.settings" as const;

export class SettingsPersistence {
	async getSettings(): Promise<Settings | undefined> {
		const settingsString = localStorage.getItem(NAMESPACE_FORUM_FORMS_SETTINGS);
		if (settingsString) {
			return JSON.parse(settingsString!) as Settings;
		} else {
			return undefined;
		}
	}

	async putSettings(settings: Settings): Promise<Settings> {
		localStorage.setItem(NAMESPACE_FORUM_FORMS_SETTINGS, JSON.stringify(settings));
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
		localStorage.setItem(NAMESPACE_FORUM_FORMS_SETTINGS, JSON.stringify(settingsDefaults));
		return settingsDefaults;
	}
}
