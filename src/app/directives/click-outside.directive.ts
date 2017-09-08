import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[clickOutside]'
})
export class ClickOutsideDirective {
	@Input() clickOutside: Function

	constructor(private el: ElementRef) {
		document.addEventListener('click', e => {
			if (!el.nativeElement.contains(e.target)) {
				this.clickOutside()
			}
		})
	}

}
