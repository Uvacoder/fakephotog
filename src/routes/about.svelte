<script>
	import Query from '../components/ImageQuery.svelte';
</script>

<svelte:head>
	<title>fake photog: about</title>
</svelte:head>

<section>
	<Query query={"*[_type=='photo' && category=='self']"}/>
	<div id="text">
		<h1>hello!</h1>
		<p>my name is fake photog and this site is an example site built by Black Cat Studio. we built this site to showcase a JAMstack website built using Sanity as the Content Management System. To learn what JAMstack is, checkout our blog post here. Also to learn about Sanity & what a ‘headless CMS’ is, head to their blog here. Some other great use cases for Sanity, besides photography are, construction, remodeling, sign shops, marine business, artists, plant nurseries, and so many more! If your business just needs to display some content and doesn’t need any advanced functionality, this type of site can be much more affordable than a Wordpress or Wix site.</p>
	</div>
</section>

<style>
	h1{
		margin:1rem 0;
	}
	section{
		padding:2rem;
		text-align: right;
	}

	@media screen and (min-width:1200px){
		section{
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap:1rem;
		}
		#text{
			align-self: center;
			justify-self: center
		}
	}
</style>