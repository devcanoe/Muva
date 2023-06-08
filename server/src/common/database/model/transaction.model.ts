import Base from "./base.model";

export default interface Transaction extends Base {
  booking?: string;
  status?: "success" | "failed" | "canceled" | "pending";
  payment_method?: PaymentEnum | string;
  ref_no?: string;
}
export enum PaymentEnum {
  PAYSTACK,
  FLUTTERWAVE,
}
