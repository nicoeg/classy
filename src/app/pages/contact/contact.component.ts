import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contactForm: FormGroup

	constructor(private fb: FormBuilder) {
		this.contactForm = fb.group({
			name: [ null, Validators.required ],
			email: [ null, Validators.email ],
			text: [ null, Validators.compose([Validators.required, Validators.minLength(10)]) ]
		})
	}

	ngOnInit() {
	}

	hasError(input: string) {
		return !this.contactForm.controls[input].valid && this.contactForm.controls[input].touched
	}
}
