<template>
	<div class="pokemon-layout">
		<h1>PokemonLayout</h1>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "PokemonLayout",
};
</script>

<style scoped>
.pokemon-layout {
	background-color: deeppink;
}
</style>
