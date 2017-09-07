import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';

import { DataService } from './services/data.service'
import { ShoppingBagService } from './services/shopping-bag.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app'

  constructor(private dataService: DataService, private shoppingBagService: ShoppingBagService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  	console.log(this.route.snapshot.data);
  }
}
