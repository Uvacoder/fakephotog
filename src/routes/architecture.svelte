<script>
	import Query from '../components/ImageQuery.svelte';

	
	
</script>

<style>

</style>

<svelte:head>
	<title>fake photog: architecture</title>
</svelte:head>

<Query query={"*[_type=='photo' && category=='architecture']"} home={false}/>