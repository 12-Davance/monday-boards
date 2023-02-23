import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  // user schema
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, select: false, required: true },
  createdAt: { type: Date, default: Date.now() },
});
