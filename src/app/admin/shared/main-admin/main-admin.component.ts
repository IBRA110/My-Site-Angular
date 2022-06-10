import { Component, OnInit, Inject, } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {
	
	constructor(
		@Inject(DOCUMENT) private document: Document,
		public auth: AuthService,
		public router: Router
	) {this.document.body.classList.add('black')}

  ngOnInit(): void {
  }
	logout($event){
		event.preventDefault()
		this.auth.logout()
		this.router.navigate(['/PMLXcc2moRJsui9yONYHi0T','login'])
	}
}
