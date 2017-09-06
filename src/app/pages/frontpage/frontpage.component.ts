import { Component, OnInit } from '@angular/core';

import { Slide } from '../../classes/slide'
import { Product } from '../../classes/product'
import { DataService } from '../../services/data.service'
import { ProductService } from '../../services/product.service'

@Component({
	selector: 'app-frontpage',
	templateUrl: './frontpage.component.html',
	styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
	slides: Slide[]
	products: Product[]

	productTabs = [
		{ title: "New Arrivals", function: this.productService.getLatestProducts },
		{ title: "Top Sellers", function: this.productService.getTopSellingProducts },
		{ title: "Featured", function: this.productService.getFeaturedProducts }
	]
	productTab = 0

	constructor(private dataService: DataService, private productService: ProductService) { }

	ngOnInit() {
		this.slides = this.dataService.getSlides()

		this.setProductTab(0)
	}

	setProductTab(tab: number) {
		this.productTab = tab

		this.products = this.productTabs[this.productTab].function(4)
	}
}
