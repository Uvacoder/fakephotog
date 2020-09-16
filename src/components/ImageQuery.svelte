<script>
	import { fade } from 'svelte/transition';
	import sanityClient from '@sanity/client';

	const client = sanityClient({
		projectId: '29h0db6e',
		dataset: 'production',
		token: '', // or leave blank to be anonymous user
		useCdn: true // `false` if you want to ensure fresh data
	});

	export let query = false;
	export let home;

    let itemsArr = [];
    
    client.fetch(query).then(items => {
		itemsArr = items;
	});
	
</script>

<div id="img-wrap" >
	{#each itemsArr as item}
		{#if home}
			<a rel=prefetch href="/{item.category}">
				<img src="https://cdn.sanity.io/images/29h0db6e/production/{item.image.asset._ref.replace(/-png/g, ".png").replace(/-jpg/g, ".jpg").replace(/image-/g, "")}" alt="{ item.name }" transition:fade>
			</a>
		{:else}
			<img src="https://cdn.sanity.io/images/29h0db6e/production/{item.image.asset._ref.replace(/-png/g, ".png").replace(/-jpg/g, ".jpg").replace(/image-/g, "")}" alt="{ item.name }" transition:fade>	
		{/if}
	{:else}
		<p id="loading">loading...</p>
	{/each}
</div>

<style>
	img{
		width:100%;
		margin-bottom:2rem;
	}
	#loading{
		position:fixed;
		top:50%;
		right:50%;
	}
</style>