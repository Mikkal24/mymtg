import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../../core/services/rest-api.service";
import { Card } from "../../models/card.model";
import { Observable } from "../../../../node_modules/rxjs";
import { Store } from "../../../../node_modules/@ngrx/store";
import { AppState } from "../../app.state";

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {
  cards: Observable<Card[]>;
  constructor(
    private restApiService: RestApiService,
    private store: Store<AppState>
  ) {
    this.cards = store.select("cardLibrary");
  }

  getCards() {
    console.log("getting cards");
    this.restApiService.getUserCards();
  }

  ngOnInit() {
    this.getCards();
  }
}
