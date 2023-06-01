import { model, Schema, Types } from "mongoose";
import Booking from "../model/booking.model";

const BookingSchema: Schema = new Schema<Booking>({
  trip: {
    type: Schema.Types.ObjectId,
    ref: "Trips",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  ref_no: String,
});

export default model<Booking>('Bookings', BookingSchema)
