<script>
	import { goto } from '$app/navigation';

        /** @type {import('./$types').PageData} */
        export let data;
</script>

<div class="flex flex-col items-center justify-center h-full">
    <h1 class="text-4xl font-black">Soal Kode : {data.params}</h1>
    <button class="btn btn-primary" on:click={()=> goto('/login')}>Login Dulu COk klo mw donlot</button>
</div>