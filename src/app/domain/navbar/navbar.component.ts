import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

	private _title = 'Casa Apostólica Mundial';

	constructor(public translateService: TranslateService) { }

	ngOnInit() { }

	get title() {
		return this._title;
	}

	@Input()
	set title(title: string) {
		this._title = title;
	}
}