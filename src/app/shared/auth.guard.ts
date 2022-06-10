import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	
	constructor(
		private auth: AuthService,
		private router: Router
	){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			if (this.auth.isAuthenticated()){
				return true;
			}else{
				this.auth.logout()
				return this.router.navigate(['/PMLXcc2moRJsui9yONYHi0T', 'login'])
			}

  }
  
}
