import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../core/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  login(username: string, password: string) {
    let data = { username: username, password: password };
    this.authService.login(data);
  }

  ngOnInit() {}
}
