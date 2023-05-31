import dotenv from "dotenv";

dotenv.config();

export default {
  env: process.env.NODE_ENV,
  databae: {
    url: process.env.MONGO_URI,
  },
};
