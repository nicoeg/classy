import { Injectable } from '@angular/core';
import { productData, slideData } from '../mock-data'
import { Slide } from '../classes/slide'

@Injectable()
export class DataService {

	constructor() { }

	getSlides(): Slide[] {
		return slideData
	}
}
