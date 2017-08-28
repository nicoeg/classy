import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { DataService } from './data.service'
import { Recipe } from './recipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app'
  recipes: Recipe[]

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
  	this.recipes = this.dataService.getRecipes()

  	console.log(this.route.snapshot.data);
  }
}
