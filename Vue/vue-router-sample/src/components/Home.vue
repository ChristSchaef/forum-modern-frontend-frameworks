<template>
	<h1>Dead Poets Society</h1>
	<nav class="navbar">
		<router-link
			to="Login"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Login</router-link
		>
		<router-link
			to="Register"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Register</router-link
		>
		<router-link
			to="Clubs"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Clubs</router-link
		>
		<router-link
			to="Settings"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Settings</router-link
		>
		<router-link
			to="Profile"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Profile</router-link
		>
	</nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.button {
	padding-right: 16px;
}
</style>
