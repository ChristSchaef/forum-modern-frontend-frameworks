<template>
	<table v-if="club">
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
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { clubData as clubs } from "@/clubs";
import { Club } from "@/types";

const route = useRoute();

const clubIdFromQuery = computed<string | undefined>(() => {
	const clubId = route.params.clubId;
	if (!clubId) {
		return undefined;
	}
	return clubId.toString();
});

const club = ref<Club>();

onMounted(() => {
	// Fetch club from server
	if (clubIdFromQuery.value) {
		const foundClub = clubs.find((club) => club.id === clubIdFromQuery.value);
		club.value = JSON.parse(JSON.stringify(foundClub));
	}
});
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
