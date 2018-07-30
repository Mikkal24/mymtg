import { Action } from "@ngrx/store";
import { Card } from "../../models/card.model";
import * as CardActions from "../actions/cardLibrary.actions";

export function CardLibraryReducer(state: Card[], action: CardActions.Actions) {
  switch (action.type) {
    case CardActions.ADD_CARD:
      return action.payload;
    default:
      return state;
  }
}
