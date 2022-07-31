<template>
    <footer>
        <p>Built with
            <a target="__blank" href="https://laravel.com/docs/9.x/sail">Laravel Sails</a>,&nbsp;
            <a target="__blank" href="https://vuejs.org">Vue JS</a> and &nbsp;
            <a target="__blank" href="https://inertiajs.com">Inertia JS</a>
            Project link <a target="__blank" href="https://github.com/adamislam/larabooks-packt">here</a>
        </p>
    </footer>
</template>

<style lang="scss" scoped>
footer {

    --light-color: #ff7148;
    --dark-color: #f60;
    --text-color: #D5E1EF;
    --primary: #4c4c4c;

	padding: 1em;
	text-align: center;

	a {
		color: var(--primary);

		&:hover {
			color: var(--dark-color);
		}
	}
}
</style>
