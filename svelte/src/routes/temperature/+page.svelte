<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { Temperature } from './Temperature.svelte';

	const temp = new Temperature();
</script>

<Container>
	<div>
		<label class="label" for="celsius">Celsius</label>
		<input class="input" name="celsius" bind:value={temp.c} />
	</div>

	<div>
		<label class="label" for="fahrenheit">Fahrenheit</label>
		<input class="input" name="fahrenheit" bind:value={temp.f} />
	</div>
</Container>
