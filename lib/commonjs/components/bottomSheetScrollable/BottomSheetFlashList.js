"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _flashList = require("@shopify/flash-list");

var _constants = require("../../constants");

var _createBottomSheetScrollableComponent = require("./createBottomSheetScrollableComponent");

var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));

var _BottomSheetScrollView = _interopRequireDefault(require("./BottomSheetScrollView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AnimatedShopifyFlashList = _reactNativeReanimated.default.createAnimatedComponent(_flashList.FlashList);

const AnimatedFlashList = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(AnimatedShopifyFlashList, _extends({
  ref: ref // @ts-ignore
  ,
  renderScrollComponent: _BottomSheetScrollView.default
}, props)));
const BottomSheetFlashListComponent = (0, _createBottomSheetScrollableComponent.createBottomSheetScrollableComponent)(_constants.SCROLLABLE_TYPE.FLASHLIST, AnimatedFlashList);
const BottomSheetFlashList = /*#__PURE__*/React.memo(BottomSheetFlashListComponent);
BottomSheetFlashList.displayName = 'BottomSheetFlashList';
var _default = BottomSheetFlashList;
exports.default = _default;
//# sourceMappingURL=BottomSheetFlashList.js.map