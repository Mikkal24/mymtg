import { Injectable } from "@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { Card } from "../../models/card.model";
import { User } from "../../models/user.model";
import { Store } from "../../../../node_modules/@ngrx/store";
import { AppState } from "../../app.state";
import { Observable } from "../../../../node_modules/rxjs";

@Injectable({
  providedIn: "root"
})
export class RestApiService {
  user$: Observable<User>;
  url: string = "http://localhost:8080/api/card";
  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.user$ = store.select("user");
  }

  addCard(card: Card): void {
    this.user$.subscribe(user => {
      card.UserId = user.id;
      delete card.image;
      console.log(card);
      this.http.post(this.url, card).subscribe();
    });
  }
}
