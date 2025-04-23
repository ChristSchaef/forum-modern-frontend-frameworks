<template>
	<div>Settings</div>
	<form
		v-if="settings && settingsSource"
		@submit.prevent="saveSettings"
	>
		<h1>Settings</h1>
		<div class="my-2">
			<label for="mainClub">Main Club:</label>
			<input
				id="mainClub"
				type="text"
				v-model="settings.mainClub"
			/>
		</div>

		<div class="my-2">
			<label for="preferredGenres">Preferred Genres:</label>
			<input
				id="preferredGenres"
				type="text"
				v-model="genreInput"
				@keyup.enter="addGenre"
			/>
			<div
				v-for="(genre, index) in settings.preferredGenres"
				:key="index"
				class="my-2"
			>
				<span>{{ genre }}</span>
				<button
					type="button"
					@click="removeGenre(index)"
				>
					Delete
				</button>
			</div>
		</div>

		<div class="my-2">
			<label>Notifications:</label><br />
			<input
				type="checkbox"
				id="email"
				v-model="settings.notifications.email"
			/>
			<label for="email">Email</label><br />

			<input
				type="checkbox"
				id="push"
				v-model="settings.notifications.push"
			/>
			<label for="push">Push</label><br />

			<input
				type="checkbox"
				id="newsletter"
				v-model="settings.notifications.newsletter"
			/>
			<label for="newsletter">Newsletter</label>
		</div>

		<button type="submit">Save Settings</button>
		<button
			type="button"
			@click="resetSettings"
		>
			Reset Settings
		</button>
	</form>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

import type { Settings } from "../types/index.ts";
import { SettingsPersistence } from "../persistence/SettingsPersistence.ts";

const settingsSource = ref<Settings | undefined>();
const settings = ref<Settings | undefined>();
const genreInput = ref<string>("");

onMounted(async () => {
	const response = await SettingsPersistence.getSettings();
	if (response) {
		settingsSource.value = response;
	} else {
		const cleanSettings = await SettingsPersistence.resetSettings();
		settingsSource.value = cleanSettings;
	}
});

watch(settingsSource, (newSource) => {
	if (newSource) {
		settings.value = {
			...newSource,
			preferredGenres: [...newSource.preferredGenres],
			notifications: {
				...newSource.notifications,
			},
		};
	}
});

async function saveSettings() {
	if (settings.value) {
		const response = await SettingsPersistence.putSettings(settings.value);
		settingsSource.value = response;
	}
}

function resetSettings() {
	SettingsPersistence.resetSettings().then((response) => {
		settings.value = response;
	});
}

function addGenre() {
	if (genreInput.value && settings.value) {
		settings.value.preferredGenres.push(genreInput.value);
		genreInput.value = "";
	}
}

function removeGenre(index: number) {
	if (settings.value) {
		settings.value.preferredGenres.splice(index, 1);
	}
}
</script>

<style scoped>
.my-2 {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
