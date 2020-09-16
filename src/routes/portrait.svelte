<script>
	import Query from '../components/ImageQuery.svelte';

	
	
</script>

<style>

</style>

<svelte:head>
	<title>fake photog: portrait</title>
</svelte:head>

<Query query={"*[_type=='photo' && category=='portrait']"} home={false}/>