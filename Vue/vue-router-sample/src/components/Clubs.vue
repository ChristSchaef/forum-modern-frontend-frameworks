<template>
	<div>
		<div v-if="clubs.length === 0">
			<p>No clubs available at the moment.</p>
		</div>

		<div v-else>
			<ul>
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
