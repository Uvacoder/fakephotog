<script>
	import Query from '../components/ImageQuery.svelte';

	
	
</script>

<style>

</style>

<svelte:head>
	<title>fake photog: landscape</title>
</svelte:head>

<Query query={"*[_type=='photo' && category=='landscape']"} home={false}/>