import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  indicatorClicked(e) {
  	const indi = document.getElementsByClassName('indicator__pin--active')[0]

  	indi.classList.remove('indicator__pin--active')
  	e.target.classList.add('indicator__pin--active')
  }
}
