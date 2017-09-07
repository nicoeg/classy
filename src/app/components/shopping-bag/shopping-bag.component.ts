import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service'
import { ShoppingBagService } from '../../services/shopping-bag.service'
import { ShoppingBagItem } from '../../classes/shopping-bag-item'

@Component({
	selector: 'shopping-bag',
	templateUrl: './shopping-bag.component.html',
	styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit {
	get totalPrice(): number {
		const total = this.shoppingBagService.items.map(item => item.product.price * item.preferences.quantity).reduce((a, b) => a + b, 0)

		return Math.round(total * 100) / 100
	}

	constructor(private dataService: DataService, private shoppingBagService: ShoppingBagService) { }

	ngOnInit() {

	}

}
