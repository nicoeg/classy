import { Injectable } from '@angular/core';

import { ShoppingBagItem } from '../classes/shopping-bag-item'
import { Product } from '../classes/product'

@Injectable()
export class ShoppingBagService {
	items: ShoppingBagItem[]

	shoppingBagOpen = false

	constructor() {
		const cached = window.localStorage.getItem('shoppingBag')

		this.items = cached ? JSON.parse(cached) : []
	}

	addItem(product: Product, preferences) {
		const existingIndex = this.items.findIndex(item => {
			return item.product.id === product.id &&
				   preferences.color === item.preferences.color &&
				   preferences.size === item.preferences.size
		})

		// If an item with same preferences already exists just bump quantity
		if (existingIndex > -1) {
			this.items[existingIndex].preferences.quantity++
		}else {
			this.items.push(new ShoppingBagItem(product, preferences.size, preferences.color))
		}

		this.saveToStorage()
	}

	removeItem(index: number) {
		if (index in this.items) {
			this.items.splice(index, 1)

			this.saveToStorage()
		}
	}

	saveToStorage() {
		window.localStorage.setItem('shoppingBag', JSON.stringify(this.items))
	}
}
