import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';

import { DataService } from './services/data.service'
import { ShoppingBagService } from './services/shopping-bag.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app'

  transparentHeader = false

  constructor(private dataService: DataService, public shoppingBagService: ShoppingBagService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof ResolveEnd) {
        this.transparentHeader = event.state.root.firstChild.data.transparentHeader || false
      }
      window.scrollTo(0, 0);

    });
  }
}
