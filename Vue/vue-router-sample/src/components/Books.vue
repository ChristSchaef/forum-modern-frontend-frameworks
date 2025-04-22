<template>
	<ul v-if="club">
		<li
			v-for="book in club.books"
			:key="book.id"
		>
			<router-link
				:to="{
					name: 'BookOverview',
					params: {
						clubId: club.id,
						bookId: book.id,
					},
				}"
			>
				<h2>{{ book.title }}</h2>
			</router-link>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useClub } from "../composables/useClub";
import { parseClubId } from "../router/parser";

const route = useRoute();

const clubId = computed(() => parseClubId(route));
const { club } = useClub(clubId); // Fetches the book from the server.
</script>
