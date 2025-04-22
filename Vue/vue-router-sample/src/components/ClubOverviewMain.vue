<template>
	<div v-if="club">
		<table>
			<tbody>
				<tr>
					<td class="property">ID</td>
					<td>{{ club.id }}</td>
				</tr>
				<tr>
					<td class="property">Name</td>
					<td>{{ club.name }}</td>
				</tr>
			</tbody>
		</table>
		<button @click="goToBooks">Show books</button>
		<RouterView></RouterView>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useClub } from "../composables/useClub";
import { parseClubId } from "../router/parser";

const route = useRoute();
const router = useRouter();

const clubId = computed(() => parseClubId(route)); // Parses the clubId from route.
const { club } = useClub(clubId); // Fetches the club from the server.

async function goToBooks() {
	if (!club.value?.id) {
		return;
	}
	await router.push({
		name: "Books",
		params: {
			clubId: club.value.id,
		},
	});
}
</script>

<style scoped>
table {
	margin-top: 48px;
}

.property {
	font-weight: bold;
	padding-right: 12px;
}
</style>
