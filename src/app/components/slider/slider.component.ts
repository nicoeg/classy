import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../classes/slide'

@Component({
	selector: 'slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
	active = 0

	@Input() slides: Slide[]

	constructor() { }

	ngOnInit() {

	}

	changeSlide(slideIndex) {
		this.active = slideIndex
	}

	previousSlide() {
		this.active = this.active === 0 ? this.slides.length - 1 : this.active - 1
	}

	nextSlide() {
		this.active = this.active === this.slides.length - 1 ? 0 : this.active + 1
	}

}
