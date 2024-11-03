<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	let elapsed = $state(1);
	let duration = $state(50);

	const percentage = $derived((elapsed * 100) / duration);

	$effect(() => {
		const interval = setInterval(() => {
			elapsed += 0.1;
		}, 100);

		return () => clearInterval(interval);
	});
</script>

<Container>
	<label class="label"
		>Elapsed ({elapsed.toFixed(1)}s):
		<progress class="progress ml-5" value={percentage} max={100}></progress></label
	>

	<label class="label">
		Duration ({duration}s):
		<input
			type="range"
			class="range range-xs ml-5"
			min={0.1}
			max={100}
			step={0.1}
			bind:value={duration}
		/>
	</label>

	<button
		class="btn"
		onclick={() => {
			elapsed = 0;
		}}>Reset</button
	>
</Container>
