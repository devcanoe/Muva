import Base from "./base.model";

export default interface Payment extends Base {
  booking?: string;
  status?: "success" | "failed" | "canceled" | "pending";
  payment_method?: PaymentEnum | string;
  ref_no?: string;
}
enum PaymentEnum {
  PAYSTACK,
  FLUTTERWAVE,
}
