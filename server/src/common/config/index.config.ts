import dotenv from "dotenv";

dotenv.config();

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  databae: {
    url: process.env.MONGO_URI || " ",
  },
  api: {
    paystack_key: process.env.PAYSTACK_KEY
  }
};
