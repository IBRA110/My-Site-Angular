import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	form: FormGroup
  submitted: boolean = false
	validForm: boolean = false

	constructor(
		public auth: AuthService,
		private router: Router
	) { }

  ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
		})
  }
	submit(){
		if (this.form.invalid){
			return;
		}
		this.submitted = true

		const user = {
			email: this.form.value.email,
			password: this.form.value.password,
			returnSecureToken: true
		}

		this.auth.login(user).subscribe(res => {
			this.form.reset
			this.router.navigate(['/PMLXcc2moRJsui9yONYHi0T','messages'])
			this.submitted = false
			this.validForm = false
		}, () => {
			this.validForm = true
			this.submitted = false
		})

	}
}
