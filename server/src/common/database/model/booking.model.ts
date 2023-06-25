import Base from "./base.model";

export default interface Booking extends Base {
  trip?: string;
  user?: string;
  total_cost: number;
  next_of_kin_name?: string;
  next_of_kin_number?: string;
  ref_no?: string;
  adult: number;
  child?: number;
  infant: number;
}
