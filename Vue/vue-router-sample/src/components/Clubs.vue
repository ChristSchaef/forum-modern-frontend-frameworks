<template>
	<div class="clubs-container">
		<div
			v-if="clubs.length === 0"
			class="no-clubs"
		>
			<p>No clubs available at the moment.</p>
		</div>

		<div v-else>
			<ul class="clubs-list">
				<li
					v-for="club in clubs"
					:key="club.id"
					class="club-item"
				>
					<router-link
						:to="{
							name: 'ClubOverview',
							params: {
								clubId: club.id,
							},
						}"
						class="club-link"
					>
						<h2>{{ club.name }}</h2>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { clubData as clubs } from "@/clubs";
</script>
