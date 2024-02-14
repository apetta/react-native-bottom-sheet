"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollEventsHandlersDefault = void 0;

var _reactNativeReanimated = require("react-native-reanimated");

var _useBottomSheetInternal = require("./useBottomSheetInternal");

var _constants = require("../constants");

const useScrollEventsHandlersDefault = (scrollableRef, scrollableContentOffsetY) => {
  // hooks
  const {
    animatedSheetState,
    animatedScrollableState,
    animatedAnimationState,
    animatedScrollableContentOffsetY: rootScrollableContentOffsetY
  } = (0, _useBottomSheetInternal.useBottomSheetInternal)(); //#region callbacks

  const handleOnScroll = (0, _reactNativeReanimated.useWorkletCallback)((_, context) => {
    /**
     * if sheet position is extended or fill parent, then we reset
     * `shouldLockInitialPosition` value to false.
     */
    if (animatedSheetState.value === _constants.SHEET_STATE.EXTENDED || animatedSheetState.value === _constants.SHEET_STATE.FILL_PARENT) {
      context.shouldLockInitialPosition = false;
    }

    if (animatedScrollableState.value === _constants.SCROLLABLE_STATE.LOCKED) {
      var _context$initialConte;

      const lockPosition = context.shouldLockInitialPosition ? (_context$initialConte = context.initialContentOffsetY) !== null && _context$initialConte !== void 0 ? _context$initialConte : 0 : 0; // @ts-ignore

      (0, _reactNativeReanimated.scrollTo)(scrollableRef, 0, lockPosition, false);
      scrollableContentOffsetY.value = lockPosition;
      return;
    }
  }, [scrollableRef, scrollableContentOffsetY, animatedScrollableState, animatedSheetState]);
  const handleOnBeginDrag = (0, _reactNativeReanimated.useWorkletCallback)(({
    contentOffset: {
      y
    }
  }, context) => {
    scrollableContentOffsetY.value = y;
    rootScrollableContentOffsetY.value = y;
    context.initialContentOffsetY = y;
    /**
     * if sheet position not extended or fill parent and the scrollable position
     * not at the top, then we should lock the initial scrollable position.
     */

    if (animatedSheetState.value !== _constants.SHEET_STATE.EXTENDED && animatedSheetState.value !== _constants.SHEET_STATE.FILL_PARENT && y > 0) {
      context.shouldLockInitialPosition = true;
    } else {
      context.shouldLockInitialPosition = false;
    }
  }, [scrollableContentOffsetY, animatedSheetState, rootScrollableContentOffsetY]);
  const handleOnEndDrag = (0, _reactNativeReanimated.useWorkletCallback)(({
    contentOffset: {
      y
    }
  }, context) => {
    if (animatedScrollableState.value === _constants.SCROLLABLE_STATE.LOCKED) {
      var _context$initialConte2;

      const lockPosition = context.shouldLockInitialPosition ? (_context$initialConte2 = context.initialContentOffsetY) !== null && _context$initialConte2 !== void 0 ? _context$initialConte2 : 0 : 0; // @ts-ignore

      (0, _reactNativeReanimated.scrollTo)(scrollableRef, 0, lockPosition, false);
      scrollableContentOffsetY.value = lockPosition;
      return;
    }

    if (animatedAnimationState.value !== _constants.ANIMATION_STATE.RUNNING) {
      scrollableContentOffsetY.value = y;
      rootScrollableContentOffsetY.value = y;
    }
  }, [scrollableRef, scrollableContentOffsetY, animatedAnimationState, animatedScrollableState, rootScrollableContentOffsetY]);
  const handleOnMomentumEnd = (0, _reactNativeReanimated.useWorkletCallback)(({
    contentOffset: {
      y
    }
  }, context) => {
    if (animatedScrollableState.value === _constants.SCROLLABLE_STATE.LOCKED) {
      var _context$initialConte3;

      const lockPosition = context.shouldLockInitialPosition ? (_context$initialConte3 = context.initialContentOffsetY) !== null && _context$initialConte3 !== void 0 ? _context$initialConte3 : 0 : 0; // @ts-ignore

      (0, _reactNativeReanimated.scrollTo)(scrollableRef, 0, lockPosition, false);
      scrollableContentOffsetY.value = 0;
      return;
    }

    if (animatedAnimationState.value !== _constants.ANIMATION_STATE.RUNNING) {
      scrollableContentOffsetY.value = y;
      rootScrollableContentOffsetY.value = y;
    }
  }, [scrollableContentOffsetY, scrollableRef, animatedAnimationState, animatedScrollableState, rootScrollableContentOffsetY]); //#endregion

  return {
    handleOnScroll,
    handleOnBeginDrag,
    handleOnEndDrag,
    handleOnMomentumEnd
  };
};

exports.useScrollEventsHandlersDefault = useScrollEventsHandlersDefault;
//# sourceMappingURL=useScrollEventsHandlersDefault.js.map