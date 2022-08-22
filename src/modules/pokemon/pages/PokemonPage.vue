<template>
	<h1>
		PokemonPage <span>#{{ id }}</span>
	</h1>

	<div v-if="pokemon">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name">
		<p>{{ pokemon.name }}</p>
	</div>
</template>

<script>
export default {
	name: "PokemonPage",
	props: {
		id: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			pokemon: null,
		};
	},
	created() {
		this.getPokemon();
	},
	methods: {
		async getPokemon() {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${this.id}`
				);
				const pokemon = await response.json();
				this.pokemon = pokemon;
			} catch (error) {
				this.$router.push("/");
			}
		},
	},
	watch: {
		id() {
			this.getPokemon();
		}
	}
};
</script>

<style></style>
