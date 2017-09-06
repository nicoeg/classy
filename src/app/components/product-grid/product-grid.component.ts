import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../classes/product'

@Component({
	selector: 'product-grid',
	templateUrl: './product-grid.component.html',
	styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
	@Input() products: Product[]

	constructor() { }

	ngOnInit() {
	}

}
