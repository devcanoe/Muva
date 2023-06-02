import { model, Schema } from "mongoose";
import Payment from "../model/payment.model";

const paymentSchema: Schema = new Schema<Payment>({
  booking: {
    type: Schema.Types.ObjectId,
    ref: "Bookings",
  },
  status: {
    type: String,
    enum: ["success", "failed", "canceled", "pending"],
  },
  payment_method: {
    type: String,
    enum: ["PAYSTACK", "FLUTTERWAVE"],
  },
  ref_no: String,
});

export default model<Payment>("Payments", paymentSchema);
