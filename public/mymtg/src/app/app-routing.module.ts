import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register/register.component";
import { AuthGuardService } from "./core/services/auth-guard.service";


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    canActivate:[AuthGuardService],
    loadChildren: "./mtg/mtg.module#MTGModule"
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
