<script>
	import { goto } from '$app/navigation';
	// import { enhance } from '@sveltejs/kit/src/runtime/app/forms';
13
        /** @type {import('./$types').PageData} */
        export let data;
</script>

<div class="flex flex-col items-center justify-center h-full">
    <h1>POST</h1>
    <form method="post" enctype="multipart/form-data">
        <input type="file" id="file" name="fileToUpload" class="file-input w-full max-w-xs" />
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</div>