<script>
	import { cart } from '../state/state.svelte';
	import { base } from '$app/paths';

	const formatCurrency = (amount) =>
		new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

	const handleItemDelete = (itemTitle) => {
		cart.items = cart.items.filter((item) => item.title !== itemTitle);
	};
</script>

<div
	class="fixed top-24 left-1/2 z-10 w-96 -translate-x-1/2 rounded-lg bg-white shadow-lg backdrop:hidden lg:absolute lg:top-full lg:left-0"
>
	<div class="border-b-grayish-blue border-b p-4">
		<h2>Cart</h2>
	</div>
	<div class="p-6">
		{#if cart.items.length > 0}
			<ul class="mb-6">
				{#each cart.items as item (item.title)}
					<li class="flex items-center justify-between gap-4">
						<img src={item.img} alt={item.title} class="max-w-1/6 rounded-md" />
						<div class="flex flex-col">
							<p class="text-dark-grayish-blue">{item.title}</p>
							<div>
								<span class="text-dark-grayish-blue"
									>{formatCurrency(item.price)} x {item.quantity}</span
								>
								<span class="font-bold">{formatCurrency(item.price * item.quantity)}</span>
							</div>
						</div>
						<button class="cursor-pointer" onclick={() => handleItemDelete(item.title)}
							><img src={base + '/images/icon-delete.svg'} alt="delete" /></button
						>
					</li>
				{/each}
			</ul>
			<a
				href={base + '/'}
				class="bg-orange hover:bg-pale-orange inline-block w-full rounded-lg p-4 text-center font-bold"
				>Checkout</a
			>
		{:else}
			<p class="py-12 text-center">Your cart is empty.</p>
		{/if}
	</div>
</div>
