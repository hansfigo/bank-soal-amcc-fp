<script>
	import '../app.css';
	import Drawer from '../components/Drawer.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex flex-col justify-between h-screen">
    <Navbar/>
	<div class="gap-4 flex bg-fuchsia-100">
		<Drawer/>
		<div class="w-full">
			<slot />
		</div>
	</div>
	<Footer/>
</div>
