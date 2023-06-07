import { model, Schema } from "mongoose";
import Trip from "../model/trip.model";

const tripSchema: Schema = new Schema<Trip>({
  departure_location: {
    type: String,
    required: true,
  },
  arrival_location: {
    type: String,
    required: true,
  },
  departure_time: {
    type: Date,
    required: true,
  },
  arrival_time: {
    type: Date,
    required: true,
  },
  trip_date: {
    type: Date,
    required: true,
  },
  seat_cost: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  vehicle: {
    type: String,
    enum: ["CAR", "BUS"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export default model<Trip>("Trips", tripSchema);
