import Base from "./base.model";

export default interface Payment extends Base {
  booking?: string;
  status?: "succes" | "failed" | "canceled";
  payment_method?: PaymentEnum;
  ref_no?: string;
}
enum PaymentEnum {
  PAYSTACK,
  FLUTTERWAVE,
}
