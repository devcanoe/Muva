import dotenv from "dotenv";
dotenv.config();

export default {
  env: "test",
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI_DEV,
  paystack_test_key: process.env.PAYSTACK_KEY_TEST,
};
