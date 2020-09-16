<script>
	import Query from '../components/ImageQuery.svelte';
</script>

<style>

</style>

<svelte:head>
	<title>fake photog</title>
</svelte:head>

<Query query={"*[_type=='photo' && home]"} home={true}/>
