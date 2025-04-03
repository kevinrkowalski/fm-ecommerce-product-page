<script>
	import { onMount } from 'svelte';
	import Cart from './Cart.svelte';
	import { getCartQuantity } from '../state/state.svelte';
	import { base } from '$app/paths';

	let showCart = $state(false);
	let showNav = $state(false);
	let cartQuantity = $derived(getCartQuantity());

	const windowSize = $state({ width: 0, height: 0 });

	onMount(() => {
		const handleResize = () => {
			windowSize.width = window.innerWidth;
			windowSize.height = window.innerHeight;
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<nav
	class="border-b-grayish-blue relative flex items-center justify-between py-4 lg:h-28 lg:justify-normal lg:gap-12 lg:border-b lg:py-0"
>
	<div class="flex items-center gap-4">
		<button type="button" onclick={() => (showNav = !showNav)} class="lg:hidden">
			<img src={base + '/images/icon-menu.svg'} alt="toggle menu" />
		</button>
		<img src={base + '/images/logo.svg'} alt="logo" />
	</div>
	{#if windowSize.width > 1000 || showNav}
		<div class="absolute top-0 left-0 z-10 block h-svh w-screen bg-black/80 lg:hidden"></div>
		<div
			class="absolute top-0 left-0 z-10 h-svh min-w-3/4 bg-white p-8 lg:static lg:flex lg:h-full lg:min-w-auto lg:items-center lg:p-0"
		>
			<button
				type="button"
				class="mb-16 cursor-pointer lg:hidden"
				onclick={() => (showNav = !showNav)}
			>
				<img src={base + '/images/icon-close.svg'} class="h-5 w-5" alt="toggle menu" />
			</button>
			<ul
				class="text-very-dark-grayish-blue lg:text-dark-grayish-blue flex flex-col gap-8 text-2xl font-bold lg:h-full lg:flex-row lg:items-center lg:text-base lg:font-normal"
			>
				<li class="hover:border-b-orange border-b-4 border-b-transparent lg:h-full">
					<a href={base + '/'} class="flex h-full items-center">Collections</a>
				</li>
				<li class="hover:border-b-orange border-b-4 border-b-transparent lg:h-full">
					<a href={base + '/'} class="flex h-full items-center">Men</a>
				</li>
				<li class="hover:border-b-orange border-b-4 border-b-transparent lg:h-full">
					<a href={base + '/'} class="flex h-full items-center">Women</a>
				</li>
				<li class="hover:border-b-orange border-b-4 border-b-transparent lg:h-full">
					<a href={base + '/'} class="flex h-full items-center">About</a>
				</li>
				<li class="hover:border-b-orange border-b-4 border-b-transparent lg:h-full">
					<a href={base + '/'} class="flex h-full items-center">Contact</a>
				</li>
			</ul>
		</div>
	{/if}
	<div class="flex items-center gap-4 lg:ml-auto">
		<button type="button" onclick={() => (showCart = !showCart)} class="relative">
			<img src={base + '/images/icon-cart.svg'} alt="cart" />
			{#if cartQuantity > 0}
				<span
					class="bg-orange absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white"
				>
					{cartQuantity}
				</span>
			{/if}
		</button>
		<img src={base + '/images/image-avatar.png'} alt="account" class="h-12 w-12" />
	</div>
	{#if showCart}
		<Cart />
	{/if}
</nav>
