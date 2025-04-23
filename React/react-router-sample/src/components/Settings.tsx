import { useEffect, useState } from "react";
import { Settings } from "../types";
import { SettingsPersistence } from "../persistence/SettingsPersistence";

export default function () {
	const [settingsSource, setSettingsSource] = useState<Settings | undefined>();
	const [settings, setSettings] = useState<Settings | undefined>();

	const [genreInput, setGenreInput] = useState<string>("");

	// Fetch settings from the server on component mount
	useEffect(() => {
		SettingsPersistence.getSettings().then((responseData) => {
			if (responseData) {
				setSettingsSource(responseData);
			} else {
				SettingsPersistence.resetSettings().then((responseData) => {
					setSettingsSource(responseData);
				});
			}
		});
	}, []);

	// Whenever the settings are loaded from the server, update the settings draft state
	useEffect(() => {
		if (settingsSource) {
			setSettings({
				...settingsSource,
				notifications: {
					...settingsSource.notifications,
				},
			});
		}
	}, [settingsSource]);

	async function saveSettings() {
		if (settings) {
			const responseData = await SettingsPersistence.putSettings(settings);
			setSettingsSource(responseData);
		}
	}

	return settings && settingsSource ? (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				saveSettings();
			}}
		>
			<h1>Settings</h1>
			<div className="my-2">
				<label htmlFor="mainClub">Main Club:</label>
				<input
					type="text"
					id="mainClub"
					value={settings.mainClub}
					onChange={(e) => {
						const newSettings = {
							...settings,
							mainClub: e.target.value,
						};
						setSettings(newSettings);
					}}
				/>
			</div>
			<div className="my-2">
				<label htmlFor="preferredGenres">Preferred Genres:</label>
				<input
					type="text"
					id="preferredGenres"
					value={genreInput}
					onChange={(e) => {
						if (e.target.value) {
							setGenreInput(e.target.value);
						}
					}}
					onKeyUp={(e) => {
						if (e.key === "Enter" && genreInput) {
							const newSettings = {
								...settings,
								preferredGenres: [...settings.preferredGenres, genreInput],
							};
							setSettings(newSettings);
							setGenreInput("");
						}
					}}
				/>
				{settings.preferredGenres.map((genre, index) => (
					<div
						key={index}
						className="my-2"
					>
						<span>{genre}</span>
						<button
							type="button"
							onClick={() => {
								const newSettings = {
									...settings,
									preferredGenres: settings.preferredGenres.filter((_, i) => i !== index),
								};
								setSettings(newSettings);
							}}
						>
							Delete
						</button>
					</div>
				))}
			</div>
			<div className="my-2">
				<label htmlFor="notifications">Notifications:</label>
				<br />
				<input
					type="checkbox"
					id="email"
					checked={settings?.notifications.email}
					onChange={(e) => {
						if (settings) {
							const newSettings = {
								...settings,
								notifications: {
									...settings.notifications,
									email: e.target.checked,
								},
							};
							setSettings(newSettings);
						}
					}}
				/>
				Email
				<br />
				<input
					type="checkbox"
					id="push"
					checked={settings?.notifications.push}
					onChange={(e) => {
						if (settings) {
							const newSettings = {
								...settings,
								notifications: {
									...settings.notifications,
									push: e.target.checked,
								},
							};
							setSettings(newSettings);
						}
					}}
				/>
				Push
				<br />
				<input
					type="checkbox"
					id="newsletter"
					checked={settings?.notifications.newsletter}
					onChange={(e) => {
						if (settings) {
							const newSettings = {
								...settings,
								notifications: {
									...settings.notifications,
									newsletter: e.target.checked,
								},
							};
							setSettings(newSettings);
						}
					}}
				/>
				Newsletter
			</div>
			<button type="submit">Save Settings</button>
			<button
				type="button"
				onClick={() => {
					SettingsPersistence.resetSettings().then((responseData) => {
						setSettings(responseData);
					});
				}}
			>
				Reset Settings
			</button>
		</form>
	) : null;
}
