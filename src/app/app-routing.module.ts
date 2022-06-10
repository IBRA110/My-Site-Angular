import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
	path: '', component: MainComponent, children:[
		{path: '', redirectTo: '/', pathMatch: 'full'},
		{path: '', component: HomeComponent},
		{path: 'about', component: AboutComponent},
		{path: 'skills', component: SkillsComponent},
		{path: 'portfolio', component: PortfolioComponent},
		{path: 'contact', component: ContactComponent},
	]},
	{
		path: 'PMLXcc2moRJsui9yONYHi0T', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
