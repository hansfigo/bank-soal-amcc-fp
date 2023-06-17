<script>
	import '../app.css';
	import Drawer from '../components/Drawer.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex flex-col justify-between h-screen">
    <Navbar/>
	<div class="gap-4 overflow-hidden flex bg-fuchsia-100">
		<Drawer/>
		<div class="w-full overflow-y-scroll">
			<slot />
		</div>
	</div>
	<Footer/>
</div>
