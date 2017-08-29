import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'newsletter-signup',
	templateUrl: './newsletter-signup.component.html',
	styleUrls: ['./newsletter-signup.component.scss']
})
export class NewsletterSignupComponent implements OnInit {
	error = false
	signedUp = false

	email = ''

	constructor() { }

	ngOnInit() {
	}

	subscribeClicked() {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.error = false

    	if (re.test(this.email)) {
    		this.signedUp = true
    	}else {
    		this.error = true
    	}
	}
}
