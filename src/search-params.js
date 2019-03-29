import { DELIMITER_SEARCH_PARAMS, DELIMITER_SEARCH_VALUES } from "./constants";

const parseSearch = (search = "") =>
  Object.assign(
    {},
    ...search
      .split(DELIMITER_SEARCH_PARAMS)
      .filter(Boolean)
      .map(param => {
        const [key, value] = param.split(DELIMITER_SEARCH_VALUES);
        return {
          [key]: value
        };
      })
  );

const stringifySearch = (params = {}) =>
  Object.entries(params)
    .map(param => param.join(DELIMITER_SEARCH_VALUES))
    .join(DELIMITER_SEARCH_PARAMS);

const mergeSearch = (search = "", params = {}) =>
  Object.entries({
    ...parseSearch(search),
    ...params
  })
    .reduce((acc, [key, value]) => [...acc, stringifySearch({ [key]: value })], [])
    .join(DELIMITER_SEARCH_PARAMS);

export { parseSearch, mergeSearch };
