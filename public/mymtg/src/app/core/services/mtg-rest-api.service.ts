import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Card } from "../../models/card.model";
import { Store } from "../../../../node_modules/@ngrx/store";
import { AppState } from "../../app.state";
import * as CurrentCardActions from "../../store/actions/currentCard.actions";

@Injectable({
  providedIn: "root"
})
export class MtgRestApiService {
  url: string = "https://api.magicthegathering.io/v1/cards";
  card: Card;
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  search(data): void {
    let queryString = `${this.url}/?${this.generateQueryString(data)}`;
    this.http.get(queryString).subscribe((res: any) => {
      let data = res.cards[0];
      this.card = { name: data.name, image: data.imageUrl };
      console.log(this.card);
      this.store.dispatch(new CurrentCardActions.SetCurrentCard(this.card));
    });
  }

  generateQueryString(obj): string {
    let queryString = Object.keys(obj)
      .map(key => `${key}=${encodeURIComponent(obj[key])}`)
      .join("&");
    return queryString;
  }
}
