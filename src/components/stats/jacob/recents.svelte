<script lang="ts">
	import { page } from '$app/stores';
	import Contest from '$comp/stats/jacob/contest.svelte';
	import type { components } from '$lib/api/api';

	export let contests: components['schemas']['JacobDataDto']['contests'];

	$: recentContests = contests?.sort((a, b) => (b?.timestamp ?? 0) - (a?.timestamp ?? 0)).slice(0, 10) ?? [];

	let showMore = false;
</script>

<div class="flex flex-col gap-2 my-4">
	<h1 class="text-2xl">Recent Contests</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
		{#if recentContests.length < 1}
			<h1 class="text-lg">No recent contests found.</h1>
		{/if}
		{#each recentContests as contest, i (`${contest.crop}${contest.timestamp}`)}
			{#if i < 3 || (showMore && i < 9)}
				<div class="block">
					<Contest {contest} />
				</div>
			{:else if i < 6}
				<div class="hidden sm:block">
					<Contest {contest} />
				</div>
			{:else if i < 9}
				<div class="hidden lg:block">
					<Contest {contest} />
				</div>
			{:else if showMore}
				<div class="block lg:hidden">
					<Contest {contest} />
				</div>
			{/if}
		{/each}
	</div>
	<button class="block lg:hidden rounded-md p-3 bg-gray-200 dark:bg-zinc-700" on:click={() => (showMore = !showMore)}
		>Show {showMore ? 'Less' : 'More'}</button
	>
	<div class="flex w-full items-center justify-center">
		<a
			class="block rounded-md p-3 px-8 bg-gray-200 dark:bg-zinc-700 text-center"
			href={$page.url.pathname + '/contests'}>View All Contests</a
		>
	</div>
</div>
