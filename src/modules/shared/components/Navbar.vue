<template>
	<div>
		<!-- <router-link :to="{ name: 'home' }">Pokémon List</router-link>
		<router-link :to="{ name: 'pokemon', params: { id: 100 } }">
			Pokémon by id
		</router-link>
		<router-link :to="{ name: 'about' }">About</router-link> -->
		<CustomLink
			v-for="link in links"
			:key="link.to"
			:link="link"
		/>
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	name: "Navbar",
	data() {
		return {
			links: [
				{
					to: "/home",
					name: "Pokemon",
				},
				{
					to: "/pokemon/50",
					name: "Por ID",
				},
				{
					to: "/about",
					name: "About",
				},
				{
					to: "https://google.com",
					name: "Google",
				},
			],
		};
	},
	components: {
		CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
	},
};
</script>

<style scoped>
div {
	padding: 0 30px;
}
div a {
	color: #2c3e50;
	font-weight: bold;
	margin: 0 10px;
}
/* div .router-link-exact-active {
	color: #42b983;
} */
</style>
