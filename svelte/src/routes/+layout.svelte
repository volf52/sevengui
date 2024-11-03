<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col overflow-hidden">
	<Navbar />
	<main
		class="container mx-auto my-5 flex h-full flex-grow items-center justify-center rounded-lg bg-gray-700 py-4 text-lg"
	>
		{@render children()}
	</main>
</div>
