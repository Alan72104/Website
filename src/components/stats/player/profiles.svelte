<script lang="ts">
	import type { ProfileDetails } from '$lib/api/elite';
	import { Popover } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';
	import Gamemode from './gamemode.svelte';

	export let ign: string;
	export let selected: ProfileDetails;
	export let profiles: ProfileDetails[];
</script>

<div class="grid col-span-1 z-10" id="profileName">
	<div class="flex flex-row gap-2 items-center">
		<div class="p-1 lg:p-2 px-2 mx-1 bg-gray-200 dark:bg-zinc-700 rounded-md">
			<h2 class="text-2xl md:text-3xl">
				{selected.name}
			</h2>
		</div>
		<Gamemode class="first-letter:capitalize font-semibold text-2xl text-gray-500" gameMode={selected.gameMode} />
	</div>
	{#if profiles.length > 0}
		<Popover
			triggeredBy="#profileName"
			class="text-sm font-light z-10 bg-gray-200 dark:bg-zinc-700"
			placement="bottom"
			color="none"
			border={false}
			offset={0}
			arrow={false}
			transition={slide}
		>
			<div class="flex flex-col gap-1" data-sveltekit-preload-data="tap">
				{#each profiles ?? [] as pId (pId.id)}
					<a
						href={`/@${ign}/${pId.name}`}
						class="p-2 text-xl font-semibold flex gap-4 justify-between text-gray-600 hover:text-gray-900 dark:text-zinc-200 dark:hover:text-zinc-400"
					>
						<span>{pId.name} <Gamemode gameMode={pId.gameMode} /></span>
						<span class="font-normal">{pId.weight.toLocaleString()}</span>
					</a>
				{/each}
			</div>
		</Popover>
	{/if}
</div>
