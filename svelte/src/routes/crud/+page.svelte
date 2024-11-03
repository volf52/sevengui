<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	let counter = 5;
	const getId = () => {
		counter += 1;
		return counter;
	};

	type User = { id: number; name: string; surname: string };

	let filter = $state('');

	let names = $state<User[]>([
		{ id: 0, name: 'John', surname: 'Snow' },
		{ id: 1, name: 'Tyrion', surname: 'Lannister' }
	]);
	const filtered = $derived(names.filter((n) => n.surname.toLowerCase().startsWith(filter)));

	let selected = $state(-1);
	let name = $state('');
	let surname = $state('');

	const handleSelected = (id: number) => {
		const el = names.find((n) => n.id === id);
		if (!el) {
			alert(`No one with id ${id}`);
			return;
		}

		selected = el.id;
		name = el.name;
		surname = el.surname;
	};

	const resetInput = () => {
		selected = -1;
		name = '';
		surname = '';
	};
	const handleCreate = () => {
		names.push({
			id: getId(),
			name,
			surname
		});

		resetInput();
	};
	const handleUpdate = () => {
		const el = names.find((n) => n.id === selected);
		if (!el) return;

		el.name = name;
		el.surname = surname;
	};
	const onDelete = () => {
		names = names.filter((n) => n.id !== selected);

		resetInput();
	};
</script>

<Container cols={2}>
	<div class="col-span-2 flex justify-center">
		<label class="label col-span-2"
			>Filter prefix: <input class="input ml-5" type="text" bind:value={filter} /></label
		>
	</div>

	<div class="grid-col-1 text-area grid rounded bg-base-200 p-2">
		{#each filtered as { id, name, surname } (id)}
			<button
				class="btn btn-sm my-0.5 cursor-pointer rounded-none hover:bg-gray-400 hover:text-primary-content {selected ===
				id
					? 'bg-blue-400 text-primary-content'
					: ''}"
				onclick={() => handleSelected(id)}
			>
				{surname}, {name}
			</button>
		{/each}
	</div>
	<div class="flex flex-col">
		<label class="label">First Name: <input class="input ml-2" bind:value={name} /></label>
		<label class="label">Surname: <input class="input ml-2" bind:value={surname} /></label>
	</div>

	<div class="join col-span-2 grid grid-cols-3">
		<button class="btn btn-info join-item" onclick={handleCreate}>Create</button>
		<button class="btn btn-warning join-item" onclick={handleUpdate}>Update</button>
		<button class="btn btn-error join-item" onclick={onDelete}>Delete</button>
	</div>
</Container>
