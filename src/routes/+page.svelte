<script>
	import MainNavigation from '../components/MainNavigation.svelte';
	import LightboxSlider from '../components/LightboxSlider.svelte';
	import { cart } from '../state/state.svelte';
	import { base } from '$app/paths';

	let itemQuantity = $state(1);

	const handleAddToCart = () => {
		// In a real environment, this would likely link to a product ID and not hardcoded data
		cart.items.push({
			title: 'Fall Limited Edition Sneakers',
			img: base + '/images/image-product-1-thumbnail.jpg',
			price: 125,
			quantity: itemQuantity
		});
	};
</script>

<div class="container mx-auto px-4 pb-24 lg:px-24">
	<MainNavigation />
	<div class="grid gap-x-32 gap-y-6 md:grid-cols-2 lg:my-24 lg:px-12">
		<LightboxSlider />
		<div>
			<span class="text-dark-grayish-blue mb-4 block text-sm font-medium tracking-wider uppercase"
				>SNEAKER COMPANY</span
			>
			<h1 class="mb-8 text-4xl font-bold lg:mb-10 lg:text-5xl">Fall Limited Edition Sneakers</h1>
			<p class="text-dark-grayish-blue mb-6 max-w-[32rem] text-lg leading-relaxed lg:text-base">
				These low profile sneakers are your perfect casual wear companion. Featuring a durable
				rubber outer sole, they'll withstand everything the weather can offer.
			</p>
			<div class="mb-8 flex items-center gap-6 lg:flex-wrap">
				<span class="text-3xl font-bold">$125.00</span>
				<span class="rounded-md bg-black px-3 py-0.5 font-bold text-white">50%</span>
				<span class="text-dark-grayish-blue ml-auto font-bold line-through lg:block lg:w-full"
					>$250.00</span
				>
			</div>
			<div class="flex flex-wrap gap-4 rounded-md">
				<div class="bg-light-grayish-blue inline-flex w-full items-center rounded-md lg:w-auto">
					<button
						type="button"
						class="min-w-4 cursor-pointer px-4 py-4"
						onclick={() => (itemQuantity -= 1)}
					>
						<img src={base + '/images/icon-minus.svg'} alt="reduce quantity by 1" class="w-4" />
					</button>
					<input
						type="number"
						bind:value={itemQuantity}
						class="flex-grow border-0 bg-transparent py-4 text-center lg:w-16 [&::-webkit-inner-spin-button]:appearance-none"
						min="1"
						max="99"
					/>
					<button
						type="button"
						class="min-w-4 cursor-pointer px-4 py-4"
						onclick={() => (itemQuantity += 1)}
					>
						<img src={base + '/images/icon-plus.svg'} alt="increase quantity by 1" class="w-4" />
					</button>
				</div>
				<button
					type="button"
					class="bg-orange hover:bg-pale-orange text-very-dark-blue inline-flex w-full cursor-pointer items-center justify-center gap-4 rounded-md px-16 py-4 font-bold text-nowrap lg:w-auto"
					onclick={handleAddToCart}
				>
					<svg width="1rem" height="1rem" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
							fill="currentColor"
							fill-rule="nonzero"
						/>
					</svg>
					Add to Cart
				</button>
			</div>
		</div>
	</div>
</div>
