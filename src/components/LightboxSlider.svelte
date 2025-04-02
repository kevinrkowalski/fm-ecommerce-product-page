<script>
	let inactiveThumbnailClasses = 'relative overflow-hidden rounded-xl';
	let activeThumbnailClasses =
		' border-2 border-orange after:absolute after:top-0 after:left-0 after:block after:h-full after:w-full after:bg-white/70';
	let activeImage = $state(0);
	let images = [
		{
			src: '/images/image-product-1.jpg',
			thumbnail: '/images/image-product-1-thumbnail.jpg'
		},
		{
			src: '/images/image-product-2.jpg',
			thumbnail: '/images/image-product-2-thumbnail.jpg'
		},
		{
			src: '/images/image-product-3.jpg',
			thumbnail: '/images/image-product-3-thumbnail.jpg'
		},
		{
			src: '/images/image-product-4.jpg',
			thumbnail: '/images/image-product-4-thumbnail.jpg'
		}
	];

	let dialog;
</script>

{#snippet imageSlider(showDesktopControls = false)}
	<div>
		<div class="relative">
			<div
				class={`absolute top-1/2 left-1/2 flex w-full -translate-1/2 justify-between ${showDesktopControls ? '' : 'lg:hidden'}`}
			>
				<button
					type="button"
					class=" flex aspect-square w-14 cursor-pointer items-center justify-center rounded-full bg-white lg:-ml-7"
					onclick={() => {
						let newActiveImageIndex = activeImage - 1;
						activeImage = newActiveImageIndex < 0 ? images.length - 1 : newActiveImageIndex;
					}}
				>
					<img src="/images/icon-previous.svg" alt="previous" />
				</button>
				<button
					type="button"
					class=" flex aspect-square w-14 cursor-pointer items-center justify-center rounded-full bg-white lg:-mr-7"
					onclick={() => {
						let newActiveImageIndex = activeImage + 1;
						activeImage = newActiveImageIndex === images.length ? 0 : newActiveImageIndex;
					}}
				>
					<img src="/images/icon-next.svg" alt="next" />
				</button>
			</div>
			<button onclick={() => dialog.showModal()} class="-mr-4 -ml-4 lg:mr-0 lg:ml-0">
				<img src={images[activeImage].src} alt="sneakers" class="lg:rounded-xl" />
			</button>
		</div>
		<ul class="mt-8 hidden grid-cols-4 gap-8 lg:grid">
			{#each images as image, index}
				<li
					class={index === activeImage
						? inactiveThumbnailClasses + activeThumbnailClasses
						: inactiveThumbnailClasses}
				>
					<button
						type="button"
						class="inline-block h-full w-full cursor-pointer"
						onclick={() => (activeImage = index)}
					>
						<img src={image.thumbnail} alt="sneakers" class="h-full w-full object-cover" />
					</button>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

{@render imageSlider()}

<dialog
	bind:this={dialog}
	class="absolute top-0 left-1/2 max-w-2xl -translate-x-1/2 bg-transparent p-8 backdrop:bg-black/70"
>
	<div class="flex justify-end">
		<button type="button" class="-mr-4 cursor-pointer p-4" onclick={() => dialog.close()}>
			<span class="sr-only">Close</span>
			<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" class="text-white"
				><path
					d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
					fill="currentColor"
					fill-rule="evenodd"
				/></svg
			>
		</button>
	</div>
	{@render imageSlider(true)}
</dialog>
