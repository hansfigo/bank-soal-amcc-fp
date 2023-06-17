<script lang="ts">
    export let data;
</script>

<div class=" flex justify-center  h-full">
	<div class="container px-8">
        <div class="grid grid-cols-1  lg:grid-cols-3 2xl:grid-cols-4  gap-12">
            {#each data.images as x, i }
            <div class="card 2xl:w-96 md:w-72 bg-base-100 shadow-xl">
                <figure class="max-h-60 overflow-hidden bg-red-300">
                    <img class="object-cover w-96 s" src={x.url} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">image {i}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis dolorum, minima debitis officia quas tempore beatae at neque nesciunt fugiat voluptates placeat, </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            {/each}
        </div>
	</div>
</div>
