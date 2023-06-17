<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fly, fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

	export let data;

	let isInView: boolean[] = [];

	function handleInViewChange(index: number, inView: boolean) {
		isInView[index] = inView;
		isInView = [...isInView]; // Trigger Svelte to update the array
	}

	const option: Options = {
        rootMargin : '60px',
        unobserveOnEnter : true
	};
</script>

<div class="flex justify-center w-full z-0 pt-4 h-full">
	<div class="container px-8 md:px-0">
		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
			{#each data.images as x, index}
				<div
					id={`card-${index}`}
					use:inview={option}
					on:inview_change={(e) => {
						const { inView } = e.detail;
						handleInViewChange(index, inView);
					}}
				>
						<div
							class:animate={isInView[index]}
							class="card 2xl:w-96 md:w-72 bg-base-100 shadow-xl"
                            out:fly={{y : 200 , duration:500}}
						>
							<!-- <figure  class="max-h-60 overflow-hidden bg-red-300">
                <img class="object-cover w-96 s"  src={x.url} alt="Shoes" />
              </figure> -->
							<div class="card-body">
								<h2 class="card-title">image {x.image_id}</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis dolorum,
									minima debitis officia quas tempore beatae at neque nesciunt fugiat voluptates
									placeat,
								</p>
								<div class="card-actions justify-end">
									<button on:click={() => goto(`/soal/${x.image_id}`)} class="btn btn-primary"
										>Detail</button
									>
								</div>
							</div>
						</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.animate {
		animation: fly 0.7s ease-in-out;
	}

	@keyframes fly {
		0% {
			transform: translateY(100%);
            filter: blur(4px);
            opacity: 0;

		}
		100% {
			transform: translateY(0);
            filter: blur(0px);
            opacity: 1;

		}
	}
</style>
