import Base from "./base.model";

export default interface Booking extends Base {
  trip?: string;
  user?: string;
  ref_no?: string;
}
