import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./login/register/register.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from "@angular/material";
import { UserReducer } from "./store/reducers/user.reducer";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forRoot({ user: UserReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
