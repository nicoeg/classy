import { Injectable } from '@angular/core';
import { RecipeData, slideData } from './mock-data'
import { Slide } from './classes/slide'
import { Recipe } from './recipe'

@Injectable()
export class DataService {

  constructor() { }

  getRecipes(): Recipe[] {
  	return RecipeData
  }

  getSlides(): Slide[] {
  	return slideData
  }
}
