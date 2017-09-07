import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Product } from '../../classes/product'
import { ProductService } from '../../services/product.service'
import { ShoppingBagService } from '../../services/shopping-bag.service'

@Component({
	selector: 'app-product',
	templateUrl: './productpage.component.html',
	styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
	product = null

	color: string
	size: number

	get tabs() {
		return Object.keys(this.product.texts)
	}

	get images() {
		return this.product.images.map(image => { return { image, actionText: '' } })
	}

	activeTab: string

	constructor(private route: ActivatedRoute, private productService: ProductService, private shopppingBagService: ShoppingBagService) { }

	ngOnInit() {
		let id = this.route.snapshot.paramMap.get('id')

		this.product = this.productService.getProduct(id)
		this.activeTab = this.tabs[0]
	}

	setTab(tab) {
		this.activeTab = tab
	}

	addToBasket() {
		if (!this.color || !this.size) {
			alert('Please choose color and size')
		}

		let { product, color, size } = this

		this.shopppingBagService.addItem(product, { color, size })
	}
}
