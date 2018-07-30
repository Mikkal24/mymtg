import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  authenticated: boolean = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  async checkLogin(url: string) {
    await this.authenticationService.checkBackEndAuth;
    if (this.authenticationService.authenticated) {
      return true;
    }
    this.authenticationService.redirectUrl = url;
    this.router.navigate(["/login"]);
    return false;
  }
}
