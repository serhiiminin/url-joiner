"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinRoute = exports.joinUrl = exports.parseSearchParams = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var DELIMITER_PATH = '/';
var DELIMITER_SEARCH_QUERY = '?';

var parseSearchParams = function parseSearchParams(searchString) {
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Array.from(new URLSearchParams(searchString).entries()).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return _defineProperty({}, key, value);
  }))));
};

exports.parseSearchParams = parseSearchParams;

var mergeSearchParams = function mergeSearchParams() {
  var initialSearchQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.entries(params).reduce(function (acc, _ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    if (value) {
      acc.set(key, value);
    }

    return acc;
  }, new URLSearchParams(initialSearchQuery)).toString();
};

var joinUrl = function joinUrl(_ref6) {
  var _ref6$url = _ref6.url,
      url = _ref6$url === void 0 ? '' : _ref6$url,
      _ref6$paths = _ref6.paths,
      paths = _ref6$paths === void 0 ? [] : _ref6$paths,
      _ref6$searchParams = _ref6.searchParams,
      searchParams = _ref6$searchParams === void 0 ? {} : _ref6$searchParams;
  var updatedUrl = new URL(url);
  updatedUrl.search = mergeSearchParams(updatedUrl.search, searchParams);
  updatedUrl.pathname = [updatedUrl.pathname].concat(_toConsumableArray(paths)).map(function (path) {
    return path.replace(/\/*$/, '');
  }).filter(Boolean).join(DELIMITER_PATH);
  return updatedUrl.toString();
};

exports.joinUrl = joinUrl;

var joinRoute = function joinRoute(_ref7) {
  var _ref7$pathname = _ref7.pathname,
      pathname = _ref7$pathname === void 0 ? '' : _ref7$pathname,
      _ref7$search = _ref7.search,
      search = _ref7$search === void 0 ? '' : _ref7$search,
      _ref7$paths = _ref7.paths,
      paths = _ref7$paths === void 0 ? [] : _ref7$paths,
      _ref7$searchParams = _ref7.searchParams,
      searchParams = _ref7$searchParams === void 0 ? {} : _ref7$searchParams;
  var updatedRoute = [pathname].concat(_toConsumableArray(paths)).map(function (path) {
    return path.replace(/\/*$/, '');
  }).filter(Boolean).join(DELIMITER_PATH);
  var updatedSearchParams = mergeSearchParams(search, searchParams);
  return [updatedRoute, updatedSearchParams].join(DELIMITER_SEARCH_QUERY);
};

exports.joinRoute = joinRoute;