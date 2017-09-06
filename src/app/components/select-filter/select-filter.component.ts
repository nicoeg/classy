import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
	selector: 'select-filter',
	templateUrl: './select-filter.component.html',
	styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent implements OnInit {
	@Input() title: string

	@Input() options: Array<string>

	@Output() onChanged = new EventEmitter<string|null>()

	open = false

	active = null

	constructor() { }

	ngOnInit() { }

	optionClicked(option: string|null) {
		this.active = option

		this.onChanged.emit(this.active)
	}
}
