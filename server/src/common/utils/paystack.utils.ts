import Paystack from "paystack";
import indexConfig from "../config/index.config";
const payment = Paystack(indexConfig.api.paystack_key || " ");

export const makePayment = (data: PaystackPayload) => {
  try {
    return payment.transaction.initialize(data);
  } catch (error) {
    return error;
  }
};

interface PaystackPayload {
  [key: string]: any;
  amount: number | any;
  reference: string;
  name: string;
  email: string;
  currency: string;
}
