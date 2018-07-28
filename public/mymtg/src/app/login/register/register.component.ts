import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../../core/services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: RegisterService) {}

  submit(username, password, email): void {
    let dataObj = {
      username: username,
      password: password,
      email: email
    };

    this.registerService.createUser(dataObj);
  }

  ngOnInit() {}
}
