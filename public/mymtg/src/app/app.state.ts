import { User } from "./models/user.model";
import { Card } from "./models/card.model";

export interface AppState {
  readonly user: User;
  readonly cards: Card[];
  readonly currentCard: Card;
}
