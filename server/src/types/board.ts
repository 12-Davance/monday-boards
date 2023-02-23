import { Document } from 'mongoose';
import { Item } from './item';

export interface Board extends Document {
  id: string;
  name: string;
  state: string;
  board_kind: string;
  items: Array<Item>;
  savedAt: Date;
}
