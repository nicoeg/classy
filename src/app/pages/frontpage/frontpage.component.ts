import { Component, OnInit } from '@angular/core';

import { Slide } from '../../classes/slide'
import { DataService } from '../../data.service'

@Component({
	selector: 'app-frontpage',
	templateUrl: './frontpage.component.html',
	styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
	slides: Slide[]

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.slides = this.dataService.getSlides()
	}
}
