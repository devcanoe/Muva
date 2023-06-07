import { model, Schema, Types } from "mongoose";
import Booking from "../model/booking.model";

const bookingSchema: Schema = new Schema<Booking>({
  trip: {
    type: Schema.Types.ObjectId,
    ref: "Trips",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  total_cost: {
    type: Number,
    required: true,
  },
  ref_no: {
    type: String,
    required: true,
  },
  next_of_kin_name: {
    type: String,
    required: true,
  },
  next_of_kin_number: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export default model<Booking>("Bookings", bookingSchema);
