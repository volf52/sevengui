<script lang="ts">
	import { page } from '$app/stores';

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'Counter', path: '/counter' },
		{ name: 'Temperature Converter', path: '/temperature' },
		{ name: 'Flight Booker', path: '/flight' }
	];
</script>

<div class="navbar bg-base-300">
	<div class="navbar-center w-screen justify-center">
		<div role="tablist" class="tabs tabs-bordered py-3">
			{#each navItems as item (item.path)}
				<a
					role="tab"
					class={`prose tab px-10 ${$page.url.pathname === item.path ? 'tab-active' : ''}`}
					href={item.path}><h4>{item.name}</h4></a
				>
			{/each}
		</div>
	</div>
</div>
