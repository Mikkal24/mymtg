import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { resolve } from "url";

interface authStatus {
  authenticated: boolean;
  message?: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  url: string = "http://localhost:8080/auth/";
  authenticated: boolean;
  constructor(private http: HttpClient) {}

  login(data) {
    this.http.post(this.url + "login", data).subscribe(res => {
      let data = res as authStatus;
      this.authenticated = data.authenticated;
    });
  }

  logout(): void {
    this.http.get(this.url + "logout");
  }

  checkAuth() {
    this.http.get(this.url + "checkstatus").subscribe(res => {
      let data = res as authStatus;
      this.authenticated = data.authenticated;
    });
  }
}
