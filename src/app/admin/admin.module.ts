import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainAdminComponent } from './shared/main-admin/main-admin.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../shared/auth.guard';

@NgModule({
	imports:[
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		RouterModule.forChild([
			{path: '', component: MainAdminComponent, children:[
				{path: '', redirectTo: '/PMLXcc2moRJsui9yONYHi0T/login', pathMatch: 'full'},
				{path: 'login', component: LoginComponent},
				{path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]}
			]}
		])
	],
	exports: [RouterModule],
	declarations: [
   MainAdminComponent,
   LoginComponent,
   MessagesComponent
	]
})

export class AdminModule{

}
