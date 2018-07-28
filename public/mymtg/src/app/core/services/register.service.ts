import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  url: string = "http://localhost:8080/api/user";
  constructor(private http: HttpClient, private router: Router) {}

  createUser(data) {
    this.http.post(this.url, data).subscribe(res => {
      this.router.navigate(["/login"]);
    });
  }
}
