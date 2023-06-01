import { model, Schema } from "mongoose";
import Trip from "../model/trip.model";

const TripSchema: Schema = new Schema<Trip>({
  departure_location: String,
  arrival_location: String,
  departure_time: String,
  arrival_time: String,
  trip_date: Date,
  seat_cost: Number,
  capacity: Number,
  vehicle: String,
});

export default model<Trip>("Trips", TripSchema);
