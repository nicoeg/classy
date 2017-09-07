import { Component, Input, OnInit } from '@angular/core';

import { ShoppingBagService } from '../../services/shopping-bag.service'

@Component({
	selector: 'site-header',
	templateUrl: './site-header.component.html',
	styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent {

	@Input() transparent = false

	constructor(public shoppingBagService: ShoppingBagService) { }

	openShoppingBag($event) {
		$event.stopPropagation()

		this.shoppingBagService.shoppingBagOpen = true;
	}
}
