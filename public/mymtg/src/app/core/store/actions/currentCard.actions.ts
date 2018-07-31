import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Card } from "../../../models/card.model";

export const SET_CURRENTCARD = "[CARD] Set";

export class SetCurrentCard implements Action {
  readonly type = SET_CURRENTCARD;

  constructor(public payload: Card) {}
}

export type Actions = SetCurrentCard;
