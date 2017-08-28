import { Injectable } from '@angular/core';
import { RecipeData } from './mock-data'
import { Recipe } from './recipe'

@Injectable()
export class DataService {

  constructor() { }

  getRecipes(): Recipe[] {
  	return RecipeData
  }
}
