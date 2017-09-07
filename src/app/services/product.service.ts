import { Injectable } from '@angular/core';

import { productData } from '../mock-data'
import { Product } from '../classes/product'

@Injectable()
export class ProductService {

	constructor() {
		// Rebind public methods to reference own object
		this.getProducts = this.getProducts.bind(this)
		this.getFeaturedProducts = this.getFeaturedProducts.bind(this)
		this.getLatestProducts = this.getLatestProducts.bind(this)
		this.getTopSellingProducts = this.getTopSellingProducts.bind(this)
	}

	public getProducts(limit: number = 0): Product[] {
		return this.limitify(productData, limit)
	}

	public getProduct(id): Product {
		return this.getProducts().find(product => product.id == id)
	}

	public getFeaturedProducts(limit: number = 0): Product[] {
		const products = this.getProducts().filter(product => product.featured === true)

		return this.limitify(products, limit)
	}

	public getLatestProducts(limit: number = 0): Product[] {
		const products = this.getProducts().sort((a: Product, b: Product) => b.created_at.getTime() - a.created_at.getTime())

		return this.limitify(products, limit)
	}

	public getTopSellingProducts(limit: number = 0): Product[] {
		const products = this.getProducts().sort((a: Product, b: Product) => b.sales - a.sales)

		return this.limitify(products, limit)
	}

	private limitify(products: Product[], limit: number): Product[] {
		limit = limit === 0 ? products.length : limit

		return products.slice(0, limit)
	}
}
