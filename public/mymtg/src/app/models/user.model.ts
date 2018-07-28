import { Card } from "./card.model";

export interface User {
  username: string;
  email: string;
  rank: number;
  createdAt: string;
  updatedAt: string;
  cards?: Card[];
}
