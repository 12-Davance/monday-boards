import { Schema } from 'mongoose';

export const BoardSchema = new Schema({
  // board schema
  id: { type: String, required: true },
  name: { type: String, required: true },
  state: { type: String, required: true },
  board_kind: { type: String, required: true },
  items: {
    type: [{ id: String, name: String, state: String }],
    required: true,
    _id: false,
  },
  savedAt: { type: Date, default: Date.now() },
});
