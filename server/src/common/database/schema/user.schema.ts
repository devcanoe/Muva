import { Schema, model } from "mongoose";
import User from "../model/user.model";

const userSchema: Schema = new Schema<User>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  phone: Number,
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "GUEST", "USER", "AGENT"],
    default: "GUEST",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export default model<User>("Users", userSchema);
