import { Component, OnInit } from '@angular/core';

import { ShoppingBagService } from '../../services/shopping-bag.service'

@Component({
	selector: 'site-header',
	templateUrl: './site-header.component.html',
	styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent {

	constructor(private shoppingBagService: ShoppingBagService) { }

	openShoppingBag($event) {
		$event.stopPropagation()

		this.shoppingBagService.shoppingBagOpen = true;
	}
}
