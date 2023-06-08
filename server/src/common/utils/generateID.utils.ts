import shortUUID from "short-uuid";

export const generate_id = (prefix: string): string => {
  return `${prefix}_${shortUUID.generate()}`;
};
