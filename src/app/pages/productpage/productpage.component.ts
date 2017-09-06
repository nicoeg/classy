import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './productpage.component.html',
	styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent {
	products = [
		{ name: 'yo' },
		{ name: 'ho' }
	]
}
