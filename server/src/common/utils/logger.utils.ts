import dayjs from "dayjs";
import { Logger, pino } from "pino";

export const Log: Logger = pino({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamps: () => `,: Date: ${dayjs().format()}`,
});
