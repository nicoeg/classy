import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { DataService } from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app'

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
  	console.log(this.route.snapshot.data);
  }
}
