export const cart = $state({ items: [] });
export const getCartQuantity = () =>
	cart.items.reduce((previous, current) => previous + current.quantity, 0);
