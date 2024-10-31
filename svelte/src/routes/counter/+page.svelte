<script lang="ts">
	let count = $state(0);

	let increment = () => (count += 1);
	let decrement = () => (count -= 1);
</script>

<div class="flex flex-col items-center rounded-lg bg-gray-300 p-5">
	<span class="font-extrabold text-black">Count: {count}</span>
	<div class="mt-5">
		<button class="btn btn-circle btn-accent font-extrabold" onclick={increment}>+</button>
		<button
			class="btn btn-circle btn-accent font-bold disabled:text-black"
			onclick={decrement}
			disabled={count === 0}>-</button
		>
	</div>
</div>
