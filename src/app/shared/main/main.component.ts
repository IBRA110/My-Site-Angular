import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	menu: any;
	@ViewChild('scrollMe ')
	inputMessageRef: ElementRef;
	
	constructor(
		@Inject(DOCUMENT) private document: Document,
		public translate: TranslateService
	){
		this.document.body.classList.add('lightblue')
	}
  
	ngOnInit(){}

	changeBackgroundColor(color){
		this.document.body.classList.remove('black','gray','coral','lightblue','purple')
		this.document.body.classList.add(color)
	}
	showMenu(setting){
		setting.classList.toggle("rot")
		return document.getElementsByClassName("content_menu")[0].classList.toggle("show");
	}
	closeMenu(setting){
		setting.classList.remove("rot")
		return document.getElementsByClassName("content_menu")[0].classList.remove("show");
	}
	scroll(el: HTMLElement) {
		if (this.inputMessageRef){
			this.inputMessageRef.nativeElement.scrollIntoView();
		}
	}
}
