<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	let count = $state(0);

	let increment = () => (count += 1);
	let decrement = () => (count -= 1);
</script>

<Container>
	<span class="label font-extrabold">Count: {count}</span>
	<div class="mt-5">
		<button class="btn btn-circle btn-accent font-extrabold" onclick={increment}>+</button>
		<button
			class="btn btn-circle btn-accent font-extrabold disabled:text-white"
			onclick={decrement}
			disabled={count === 0}>-</button
		>
	</div>
</Container>
