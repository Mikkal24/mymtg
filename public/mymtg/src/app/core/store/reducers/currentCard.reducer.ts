import { Action } from "@ngrx/store";
import { Card } from "../../../models/card.model";
import * as CurrentCardActions from "../actions/currentCard.actions";

export function CurrentCardReducer(
  state: Card,
  action: CurrentCardActions.Actions
) {
  switch (action.type) {
    case CurrentCardActions.SET_CURRENTCARD:
      return action.payload;
    default:
      return state;
  }
}
