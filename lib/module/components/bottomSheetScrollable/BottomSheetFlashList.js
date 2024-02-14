function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FlashList as ShopifyFlashList } from '@shopify/flash-list';
import { SCROLLABLE_TYPE } from '../../constants';
import { createBottomSheetScrollableComponent } from './createBottomSheetScrollableComponent';
import Animated from 'react-native-reanimated';
import BottomSheetScrollView from './BottomSheetScrollView';
const AnimatedShopifyFlashList = Animated.createAnimatedComponent(ShopifyFlashList);
const AnimatedFlashList = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(AnimatedShopifyFlashList, _extends({
  ref: ref // @ts-ignore
  ,
  renderScrollComponent: BottomSheetScrollView
}, props)));
const BottomSheetFlashListComponent = createBottomSheetScrollableComponent(SCROLLABLE_TYPE.FLASHLIST, AnimatedFlashList);
const BottomSheetFlashList = /*#__PURE__*/React.memo(BottomSheetFlashListComponent);
BottomSheetFlashList.displayName = 'BottomSheetFlashList';
export default BottomSheetFlashList;
//# sourceMappingURL=BottomSheetFlashList.js.map