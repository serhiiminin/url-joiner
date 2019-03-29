import { DELIMITER_PATH, DELIMITER_URL_PARTS } from "./constants";

const trimPath = (path = "") => path.replace(/^\/|\/$/g, "");

const getUrlParts = (url = "") => {
  const parts = url.split(DELIMITER_URL_PARTS);
  const href = parts[0] || "";
  const search = parts[1] || "";

  return [href, search];
};

const joinUrl = (url = "/", search = "") => [url, search].filter(Boolean).join(DELIMITER_URL_PARTS);
const joinPath = (url = "/", ...paths) =>
  [url, ...paths]
    .filter(Boolean)
    .map(trimPath)
    .join(DELIMITER_PATH);

export { getUrlParts, joinUrl, joinPath };
