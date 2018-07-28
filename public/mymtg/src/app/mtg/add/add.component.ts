import { Component, OnInit } from "@angular/core";
import { MtgRestApiService } from "../../core/services/mtg-rest-api.service";
import { Card } from "../../models/card.model";
import { Observable } from "../../../../node_modules/rxjs";
import { Store } from "../../../../node_modules/@ngrx/store";
import { AppState } from "../../app.state";
import { RestApiService } from "../../core/services/rest-api.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  constructor(
    private mtgRestService: MtgRestApiService,
    private restAPIService: RestApiService,
    private store: Store<AppState>
  ) {
    this.currentCard$ = store.select("currentCard");
  }
  currentCard$: Observable<Card>;
  currentCard: Card;
  ngOnInit() {}

  search(name) {
    this.mtgRestService.search({ name: name });
    this.currentCard$.subscribe(data => {
      console.log(data);
      this.currentCard = data;
    });
  }

  add() {
    console.log("adding card");
    this.restAPIService.addCard(this.currentCard);
  }
}
