<template>
	<div v-if="book">
		<table>
			<tbody>
				<tr>
					<td class="property">ID</td>
					<td>{{ book.id }}</td>
				</tr>
				<tr>
					<td class="property">Name</td>
					<td>{{ book.title }}</td>
				</tr>
				<tr>
					<td class="property">Description</td>
					<td>{{ book.description }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { parseBookId, parseClubId } from "../router/parser";
import { useRoute } from "vue-router";
import { useBook } from "../composables/useBook";

const route = useRoute();

const clubId = computed(() => parseClubId(route));
const bookId = computed(() => parseBookId(route));

const { club, book } = useBook(clubId, bookId); // Fetches the book from the server.
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
