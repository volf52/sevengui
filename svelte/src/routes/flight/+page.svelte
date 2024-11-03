<script lang="ts">
	import dayjs from 'dayjs';

	const opts = [
		{ label: 'One-Way Flight', value: 'oneway' },
		{ label: 'Return Flight', value: 'return' }
	] as const;
	type SelectVal = (typeof opts)[number]['value'];

	let selected = $state<SelectVal>('oneway');
	let fromDt = $state<string | undefined>(undefined);
	let retDt = $state<string | undefined>(undefined);

	let minRet = $derived.by(() => {
		if (!fromDt) return;

		return dayjs(fromDt).add(1, 'day').format('YYYY-MM-DD');
	});

	let isInvalid = $derived.by(() => {
		if (!fromDt || !retDt) return false;
		return dayjs(retDt).isBefore(fromDt);
	});

	let form: HTMLFormElement;
	$effect(() => {
		if (isInvalid) form.reportValidity();
	});
</script>

<form
	bind:this={form}
	class="grid grid-cols-2 grid-rows-3 gap-6 rounded-lg border border-gray-300 p-5 shadow shadow-blue-500"
>
	<select class="select col-span-2" bind:value={selected}>
		{#each opts as { label, value } (value)}
			<option {value} selected={value === selected}>{label}</option>
		{/each}
	</select>

	<label for="from" class="label">On:</label>
	<input name="from" class="input" type="date" bind:value={fromDt} />

	<label for="return" class="label">Return:</label>
	<input
		name="return"
		disabled={selected === 'oneway'}
		class="input"
		type="date"
		min={minRet}
		bind:value={retDt}
	/>
</form>
