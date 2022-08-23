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
					to: "pokemon-home",
					name: "Pokemon",
				},
				{
					to: "pokemon-id",
					name: "Pokemon by Id",
					id: 151,
				},
				{
					to: "pokemon-about",
					name: "Pokemon About",
				},
				{
					to: "dbz-characters",
					name: "DBZ Characters",
				},
				{
					to: "dbz-about",
					name: "DBZ About",
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
