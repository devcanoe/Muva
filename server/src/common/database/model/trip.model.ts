import Base from "./base.model";

export default interface Trip extends Base {
  departure_location?: string;
  arrival_location?: string;
  departure_time?: string;
  arrival_time?: string;
  trip_date?: Date;
  seat_cost?: number;
  capacity?: number;
  vehicle?: string;
}
