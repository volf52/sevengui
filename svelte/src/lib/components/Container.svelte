<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		cols?: number;
	};
	const { children, cols }: Props = $props();
</script>

<div
	class={`grid grid-cols-${cols || 1} gap-4 rounded-lg border border-gray-300 p-5 shadow shadow-blue-500`}
>
	{@render children()}
</div>
