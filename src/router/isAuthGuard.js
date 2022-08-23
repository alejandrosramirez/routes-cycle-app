const isAuthGuard = async (to, from, next) => {
	return new Promise(() => {
		const rand = Math.random() * 100;

		if (rand > 50) {
			console.log("Authenticated");
			next();
		} else {
			console.log("Not authenticated");
			next({
				name: "pokemon-home",
			});
		}
	});
};

export default isAuthGuard;
