import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../classes/slide'

@Component({
	selector: 'slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
	active = 0
	amount = 0

	@Input() slides: Slide[]

	constructor() { }

	ngOnInit() {
		setInterval(() => {
			this.amount += 2

			if (this.amount >= 100) {
				this.nextSlide()
				this.amount = 0
			}
		}, 100)

	}

	changeSlide(slideIndex) {
		this.active = slideIndex
		this.amount = 0
	}

	previousSlide() {
		this.changeSlide(this.active === 0 ? this.slides.length - 1 : this.active - 1)
	}

	nextSlide() {
		this.changeSlide(this.active === this.slides.length - 1 ? 0 : this.active + 1)
	}

}
