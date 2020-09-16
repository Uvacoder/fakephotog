<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let segment;

	let vis = false;
	let fill = true;
	let vw;

	function toggle(){
		vis = !vis;
		fill = !fill;
	}
</script>

<style>
	nav {
		padding: 0 1em;
	}

	ul {
		margin: 1rem 0 0 0;
		padding: 0;
		list-style:none;
		display:grid;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		justify-self:center;
		width:90%;
		display:flex;
		justify-content: center;
		border:2px solid black;	
		margin-top:-2px;
	}
	li > a{
		font-size:1.2rem;
	}
	li:first-child{
		border-top-left-radius:10px;
		border-top-right-radius:10px;
	}
	li:last-child{
		border-bottom-left-radius:10px;
		border-bottom-right-radius:10px;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current] {
		text-decoration:underline;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	#sandwich{
		cursor: pointer;

	}
	.sandwich-inner{
		height:4px;
		width:30px;
		border:1px solid black;
		border-radius:1000px;
		margin-top:2px;
	}
	#top-wrap{
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	.fill{
		background-color:black;
	}
	footer{
		display:none;
	}
	@media screen and (min-width:770px){
		nav{
			height: 100%; /* Full-height: remove this if you want "auto" height */
			width: 300px; /* Set the width of the sidebar */
			position: fixed; /* Fixed Sidebar (stay in place on scroll) */
			z-index: 1; /* Stay on top */
			top: 0; /* Stay at the top */
			left: 0;
			overflow-x: hidden; /* Disable horizontal scroll */
			padding-top: 20px;
		}
		footer{
			display:block;
			position:fixed;
			bottom:0;
			left:0;
			padding:1rem 2rem;
		}
		footer > p > a{
			display:inline;
			padding:0;
		}
		#sandwich{
			display:none;
		}
		ul{
			display:block;
		}
		li{
			border:none;
			width:min-content;
		}
	}
	@media screen and (min-width:900px){
		nav{
			width:400px
		}
	}
</style>

<svelte:window bind:innerWidth={ vw }/>

<nav>
	<div id="top-wrap">
		<a href="/"><h1>fake photog</h1></a>
		<div id="sandwich" on:click={ toggle }>
			<div class="sandwich-inner" class:fill={fill}></div>
			<div class="sandwich-inner" class:fill={fill}></div>
			<div class="sandwich-inner" class:fill={fill}></div>
		</div>
	</div>
	{#if vis || vw > 770}
		<ul transition:fade>
			<li><a rel=prefetch aria-current="{segment === 'portrait' ? 'page' : undefined}" href="portrait" on:click={vis = false}>portrait</a></li>
			<li><a rel=prefetch aria-current="{segment === 'landscape' ? 'page' : undefined}" href="landscape" on:click={vis = false}>landscape</a></li>
			<li><a rel=prefetch aria-current="{segment === 'architecture' ? 'page' : undefined}" href="architecture" on:click={vis = false}>architecture</a></li>
			<li><a rel=prefetch aria-current="{segment === 'about' ? 'page' : undefined}" href="about" on:click={vis = false}>about</a></li>
		</ul>
	{/if}

	<footer>
		<p>&copy; {new Date().getFullYear()} Black Cat Studio.</p>
		<p>Powered by <a href="https://www.sanity.io/" target="_blank">Sanity</a> & <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>.</p>
	</footer>
</nav>
