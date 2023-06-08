import { model, Schema } from "mongoose";
import Transaction from "../model/transaction.model";

const transactionSchema: Schema = new Schema<Transaction>({
  booking: {
    type: Schema.Types.ObjectId,
    ref: "Bookings",
    required: true,
  },
  status: {
    type: String,
    enum: ["success", "failed", "canceled", "pending"],
    default: "pending",
  },
  payment_method: {
    type: String,
    enum: ["PAYSTACK", "FLUTTERWAVE"],
    required: true,
  },
  ref_no: {
    required: true,
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

export default model<Transaction>("Transactions", transactionSchema);
