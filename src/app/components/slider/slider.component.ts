import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../classes/slide'

@Component({
	selector: 'slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
	private active = 0
	private amount = 0
	private _theme = ''

	@Input() slides: Slide[]
	@Input() autoplay = true
	@Input() indicator = true
	@Input()
	set theme(theme: string) {
		this._theme = 'slider--' + theme
	}

	constructor() { }

	ngOnInit() {
		if (this.autoplay) {
			this.initializeAutoplay()
		}
	}

	private initializeAutoplay() {
		setInterval(() => {
			this.amount += 1

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
