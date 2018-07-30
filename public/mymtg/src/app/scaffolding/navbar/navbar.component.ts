import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../core/services/authentication.service";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  constructor(
    private authService: AuthenticationService,
    private store: Store<AppState>
  ) {
    this.user$ = store.select("user");
  }

  logout() {
    console.log("logout");
    this.authService.logout();
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.user = user;
    });
  }
}
