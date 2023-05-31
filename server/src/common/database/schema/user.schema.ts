import { Schema, model } from "mongoose";
import User from "../model/user.model";

const userSchema: Schema = new Schema<User>({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  phone: Number,
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
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
