/// <reference types="react" />
/// <reference types="react-native-reanimated" />
import type { ScrollableEvent } from '../types';
export declare const useScrollHandler: (useScrollEventsHandlers?: import("../types").ScrollEventsHandlersHookType, onScroll?: ScrollableEvent | undefined, onScrollBeginDrag?: ScrollableEvent | undefined, onScrollEndDrag?: ScrollableEvent | undefined) => {
    scrollHandler: (event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void;
    scrollableRef: import("react").RefObject<any>;
    scrollableContentOffsetY: import("react-native-reanimated").SharedValue<number>;
};
