import { Document } from 'mongoose';

export interface Item extends Document {
  id: string;
  name: string;
  state: string;
}
