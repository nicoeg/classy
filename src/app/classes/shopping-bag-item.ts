import { Product } from './product'

export class ShoppingBagItem {
	product: Product

	preferences: ShoppingBagPreference

	constructor(product: Product, size: number, color: string, quantity = 1) {
		this.product = product

		this.preferences = new ShoppingBagPreference(size, color, quantity)
	}
}

export class ShoppingBagPreference {
	quantity: number

	size: number

	color: string

	constructor(size: number, color: string, quantity = 1) {
		this.size = size
		this.color = color
		this.quantity = quantity
	}
}
