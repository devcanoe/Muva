import config from "config";
import Paystack from "paystack";
import { injectable } from "tsyringe";

@injectable()
export default class PaymentHelper {
  paystack;
  constructor() {
    this.paystack = Paystack(config.get("paystack_test_key"));
  }
  usePaystack(payload: Payload) {
    try {
      return this.paystack.transaction.initialize(payload);
    } catch (error) {
      return error;
    }
  }
  useFlutterwave() {}
}

interface Payload {
  amount: number;
  reference: string;
  name: string;
  email: string;
  currency: string;
}
