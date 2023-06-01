import Base from "./base.model";

export default interface Payment extends Base{
    booking?: string,
    status?: "success" | "fail",
    payment_method?: PaymentEnum
}
enum PaymentEnum{
    PAYSTACK,
    FLUTTERWAVE,
}