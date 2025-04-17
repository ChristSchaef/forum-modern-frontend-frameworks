<script setup lang="ts">
import Home from "./components/Home.vue";
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
	<h1>Dead Poets Society</h1>
	<nav class="navbar">
		<router-link
			:to="{ name: 'Home' }"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Home</router-link
		>
		<router-link
			:to="{ name: 'Login' }"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Login</router-link
		>
		<router-link
			:to="{ name: 'Register' }"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Register</router-link
		>
		<router-link
			:to="{ name: 'Clubs' }"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Clubs</router-link
		>
		<router-link
			:to="{ name: 'Settings' }"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Settings</router-link
		>
		<router-link
			:to="{ name: 'Profile' }"
			to="Profile"
			class="button"
			active-class="activeButton"
			aria-current="page"
			>Profile</router-link
		>
	</nav>
	<RouterView></RouterView>
</template>

<style scoped>
.button {
	padding-right: 16px;
}
</style>
