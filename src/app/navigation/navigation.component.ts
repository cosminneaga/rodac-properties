import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: [ './navigation.component.scss' ]
})
export class NavigationComponent implements OnInit, AfterViewInit {
	/* @HostListener('window:scroll', [ '$event' ])
	onScrollEvent($event) {
		if (window.pageYOffset > 200) {
			document.getElementById('nav').classList.remove('color-light');
			document.getElementById('nav').classList.add('light');
		} else {
			document.getElementById('nav').classList.add('color-light');
			document.getElementById('nav').classList.remove('light');
		}
	} */

	constructor() {}

	ngOnInit(): void {
		document.getElementById('nav').classList.remove('mobile-active');
	}

	ngAfterViewInit(): void {
		document.getElementById('menu').addEventListener('click', () => {
			document.getElementById('nav').classList.toggle('mobile-active');
			// document.body.classList.toggle('nav-active');
		});

		for (let i = 0; i < document.getElementById('mobile-nav').querySelectorAll('.dropdown').length; i++) {
			document
				.getElementById('mobile-nav')
				.children[1].querySelectorAll('.dropdown')
				[i].addEventListener('click', () => {
					document
						.getElementById('mobile-nav')
						.children[1].querySelectorAll('.dropdown')
						[i].classList.toggle('expanded');
				});
		}
	}

	closeNavigation() {
		document.getElementById('nav').classList.remove('mobile-active');
	}
}
