import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
	selector: 'select-filter',
	templateUrl: './select-filter.component.html',
	styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent implements OnInit {
	@Input() title: string

	@Input() options: Array<string>

	@Input()
	set theme(theme: string) {
		this._theme = 'select-filter--' + theme
	}

	@Output() onChanged = new EventEmitter<string|null>()

	_theme = ''
	open = false
	active = null

	constructor() {
		this.hide = this.hide.bind(this)
	}

	ngOnInit() { }

	optionClicked(option: string|null) {
		this.active = option

		this.onChanged.emit(this.active)
	}

	public hide() {
		this.open = false
	}
}
