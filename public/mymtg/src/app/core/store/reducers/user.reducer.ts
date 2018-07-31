import { Action } from "@ngrx/store";
import { User } from "../../../models/user.model";
import * as UserActions from "../actions/user.actions";

export function UserReducer(state: User, action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.SET_USER:
      return action.payload;
    default:
      return state;
  }
}
