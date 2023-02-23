import { Item } from '../types/item';

export interface SaveBoardDTO {
  // During board save
  id: string;
  name: string;
  board_kind: string;
  state: string;
  items?: Array<Item>;
}
