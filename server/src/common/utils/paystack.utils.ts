import Paystack from "paystack";
import indexConfig from "../config/index.config";

const makePayment = () => {
    const data = Paystack(indexConfig.api.paystack_key ||" ")
    return Paystack.
}