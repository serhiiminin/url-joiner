const parseSearchParams = (searchQueryString = '') =>
  Object.assign(
    {},
    ...Array.from(new window.URLSearchParams(searchQueryString).entries())
      .map(([key, value]) => ({ [key]: value }))
  );

const mergeSearchParams = (searchQueryString = '', params = {}) =>
  Object.entries(params)
    .reduce((acc, [key, value]) => {
        if (value) {
          acc.set(key, value);
        }
        return acc;
      },
      new window.URLSearchParams(searchQueryString)
    )
    .toString();

export {
  parseSearchParams,
  mergeSearchParams,
};
