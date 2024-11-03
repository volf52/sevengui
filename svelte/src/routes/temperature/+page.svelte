<script lang="ts">
	import { Temperature } from './Temperature.svelte';

	const temp = new Temperature();
</script>

<div class="grid grid-cols-2 gap-6">
	<div>
		<label class="label" for="celsius">Celsius</label>
		<input class="input" name="celsius" bind:value={temp.c} />
	</div>

	<div>
		<label class="label" for="fahrenheit">Fahrenheit</label>
		<input class="input" name="fahrenheit" bind:value={temp.f} />
	</div>
</div>
