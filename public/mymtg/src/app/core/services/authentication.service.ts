import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { resolve } from "url";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import * as UserActions from "../../store/actions/user.actions";
import { User } from "../../models/user.model";

interface authStatus {
  authenticated: boolean;
  user?: User;
  message?: string;
}

const httpOptions = {
  withCredentials: true
};

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  url: string = "http://localhost:8080/auth/";
  authenticated: boolean = false;
  redirectUrl: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {}

  login(data) {
    this.http.post(this.url + "login", data, httpOptions).subscribe(data => {
      console.log(data);
      this.store.dispatch(new UserActions.SetUser(data as User));
      this.http.get(this.url + "checkstatus", httpOptions).subscribe(res => {
        let data = res as any;
        this.authenticated = data.authenticated;
        if (this.authenticated) {
          this.router.navigate(["/"]);
        }
      });
    });
  }

  logout(): void {
    console.log(this.url + "logout");
    this.http.get(this.url + "logout", httpOptions).subscribe(res => {
      this.router.navigate(["/login"]);
    });
  }

  checkBackEndAuth = new Promise<boolean>((resolve, reject) => {
    this.http.get(this.url + "checkstatus", httpOptions).subscribe(res => {
      let data = res as authStatus;
      this.authenticated = data.authenticated;
      if (data.authenticated) {
        console.log(data);
        this.store.dispatch(new UserActions.SetUser(data.user as User));
      }
      resolve(data.authenticated);
    });
  });
}
