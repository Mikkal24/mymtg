import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Card } from "../../models/card.model";

export const ADD_CARD = "[CARD] Add";
export const REMOVE_CARD = "[CARD] Remove";
export const GET_CARDS = "[CARD] Get";
export const LOAD_FAILURE = "[CARD] Load Failure";
export const LOAD_REQUEST = "[CARD] Load Success";

export class AddCard implements Action {
  readonly type = ADD_CARD;

  constructor(public payload: Card[]) {}
}

export class GetCards implements Action {
  readonly type = GET_CARDS;

  constructor(public payload: Card[]) {}
}

export class RemoveCard implements Action {
  readonly type = REMOVE_CARD;

  constructor(public payload: number) {}
}

export class LoadFailureAction implements Action {
  readonly type = LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadRequestAction implements Action {
  readonly type = LOAD_REQUEST;
}

export type Actions = AddCard | RemoveCard;
