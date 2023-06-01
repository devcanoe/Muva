import shortUUID from "short-uuid";
export const short_id = () => {
  return shortUUID.generate();
};
