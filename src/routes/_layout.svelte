<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		/* max-width: 70%; */
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media screen and (min-width:770px){
		#page-wrap{
			display:grid;
		}
		main{
  			margin-left: 300px; /* Same as the width of the sidebar */
  			padding: 0px 10px;
		}
	}
	@media screen and (min-width:900px){
		main{
  			margin-left: 400px; /* Same as the width of the sidebar */
		}
	}
</style>
<div id="page-wrap">
	<div>
		<Nav {segment}/>
	</div>
	<main>
		<slot></slot>
	</main>
</div>
<Footer />