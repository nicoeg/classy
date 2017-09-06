import { Component, OnInit } from '@angular/core';

import { Product } from '../../classes/product'
import { ProductService } from '../../services/product.service'

@Component({
	selector: 'app-new-collection',
	templateUrl: './new-collection.component.html',
	styleUrls: ['./new-collection.component.scss']
})
export class NewCollectionComponent implements OnInit {
	products: Product[]

	get productsFiltered(): Product[] {
		let products = this.products
		//Apply filters

		return products
	}

	get currentProducts(): Product[] {
		const max = this.currentPage * this.perPage

		return this.productsFiltered.slice(max - this.perPage, max)
	}

	get pages() {
		const keys = Array(Math.ceil(this.productsFiltered.length / this.perPage)).keys()

		return [...Array.from(keys)].map(value => value + 1)
	}

	currentPage = 1
	perPage = 12


	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.products = this.productService.getProducts()
	}

	sortChanged(option: string|null) {
		switch (option) {
			case 'price':
				this.products = this.productService.getProducts().sort((a: Product, b: Product) => a.price - b.price)
				break
			case 'popular':
				this.products = this.productService.getTopSellingProducts()
				break
			default:
				this.products = this.productService.getProducts()
				break
		}
	}
}
