import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/app/shared/message.service';
import { Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	
	form: FormGroup
	submitted: boolean = false

	constructor(
		private messageServ: MessageService,
		private router: Router,
		@Inject(DOCUMENT) private document: Document,
	) { }

  ngOnInit() {
		this.form = new FormGroup({
			name: new FormControl(null, Validators.required),
			email: new FormControl(null, [Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
			message: new FormControl(null, Validators.required),
		})
		this.form.valueChanges
			.pipe(
				map(data => {
					data.name = data.name.replace(/<(?:.|\n)*?>/gm, "");
					data.email = data.email.replace(/<(?:.|\n)*?>/gm, "");
					data.message = data.message.replace(/<(?:.|\n)*?>/gm, "");
					return data;
				})
       )
       .subscribe();
  }
	submit(){

		if (this.form.invalid){
			return
		}

		this.submitted = true

		const message = {
			name: this.form.value.name,
			email: this.form.value.email,
			message: this.form.value.message,
			date: new Date()
		}
		this.messageServ.create(message).subscribe(res => {
			this.form.reset()
			this.submitted = false
			document.getElementsByClassName("popup")[0].classList.add("showpopup");
			setTimeout(() => {
				document.getElementsByClassName("popup")[0].classList.remove("showpopup");
				}, 2000);
		})
	}
}
