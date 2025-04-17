<script setup lang="ts">
import Home from "./components/Home.vue";
import {RouterView} from "vue-router";
</script>

<template>
<h1>Dead Poets Society</h1>
<nav>
  <a class="button" routerLink="" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Home</a>
  <a class="button" routerLink="/login" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Login</a>
  <a class="button" routerLink="/register" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Register</a>
  <a class="button" routerLink="/clubs" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Clubs</a>
  <a class="button" routerLink="/settings" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Settings</a>
  <a class="button" routerLink="/profile" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Profile</a>
</nav>
	<RouterView></RouterView>
</template>

<style scoped></style>
