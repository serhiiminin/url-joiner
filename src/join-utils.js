import { DELIMITER_PATH, DELIMITER_SEARCH_QUERY } from './contants';
import { mergeSearchParams } from './search-params';

const joinUrl = ({ url = '', paths = [], searchParams = {} }) => {
  const updatedUrl = new URL(url);

  updatedUrl.search = mergeSearchParams(updatedUrl.search, searchParams);
  updatedUrl.pathname = [updatedUrl.pathname, ...paths]
    .map(path => path.replace(/\/*$/, ''))
    .filter(Boolean)
    .join(DELIMITER_PATH);

  return updatedUrl.toString();
};

const joinRoute = ({ pathname = '', search = '', paths = [], searchParams = {} }) => {
  const updatedRoute = [pathname, ...paths]
    .map(path => path.replace(/\/*$/, ''))
    .filter(Boolean)
    .join(DELIMITER_PATH);
  const updatedSearchParams = mergeSearchParams(search, searchParams);

  return [updatedRoute, updatedSearchParams]
    .filter(Boolean)
    .join(DELIMITER_SEARCH_QUERY);
};

export {
  joinUrl,
  joinRoute,
}
