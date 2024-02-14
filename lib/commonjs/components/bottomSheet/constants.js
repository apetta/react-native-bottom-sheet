"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ACCESSIBILITY_POSITION_CHANGE_ANNOUNCEMENT = exports.DEFAULT_ENABLE_ACCESSIBILITY_CHANGE_ANNOUNCEMENT = exports.DEFAULT_ACCESSIBILITY_ROLE = exports.DEFAULT_ACCESSIBILITY_LABEL = exports.DEFAULT_ACCESSIBLE = exports.INITIAL_VALUE = exports.INITIAL_SNAP_POINT = exports.INITIAL_HANDLE_HEIGHT = exports.INITIAL_CONTAINER_OFFSET = exports.INITIAL_CONTAINER_HEIGHT = exports.INITIAL_POSITION = exports.DEFAULT_KEYBOARD_INPUT_MODE = exports.DEFAULT_KEYBOARD_BLUR_BEHAVIOR = exports.DEFAULT_KEYBOARD_BEHAVIOR = exports.DEFAULT_ANIMATE_ON_MOUNT = exports.DEFAULT_DYNAMIC_SIZING = exports.DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = exports.DEFAULT_ENABLE_OVER_DRAG = exports.DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = exports.DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = exports.DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = exports.DEFAULT_HANDLE_HEIGHT = void 0;

var _constants = require("../../constants");

// default values
const DEFAULT_HANDLE_HEIGHT = 24;
exports.DEFAULT_HANDLE_HEIGHT = DEFAULT_HANDLE_HEIGHT;
const DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = 2.5;
exports.DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
const DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = true;
exports.DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
const DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = true;
exports.DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = DEFAULT_ENABLE_HANDLE_PANNING_GESTURE;
const DEFAULT_ENABLE_OVER_DRAG = true;
exports.DEFAULT_ENABLE_OVER_DRAG = DEFAULT_ENABLE_OVER_DRAG;
const DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = false;
exports.DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
const DEFAULT_ANIMATE_ON_MOUNT = true;
exports.DEFAULT_ANIMATE_ON_MOUNT = DEFAULT_ANIMATE_ON_MOUNT;
const DEFAULT_DYNAMIC_SIZING = false; // keyboard

exports.DEFAULT_DYNAMIC_SIZING = DEFAULT_DYNAMIC_SIZING;
const DEFAULT_KEYBOARD_BEHAVIOR = _constants.KEYBOARD_BEHAVIOR.interactive;
exports.DEFAULT_KEYBOARD_BEHAVIOR = DEFAULT_KEYBOARD_BEHAVIOR;
const DEFAULT_KEYBOARD_BLUR_BEHAVIOR = _constants.KEYBOARD_BLUR_BEHAVIOR.none;
exports.DEFAULT_KEYBOARD_BLUR_BEHAVIOR = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
const DEFAULT_KEYBOARD_INPUT_MODE = _constants.KEYBOARD_INPUT_MODE.adjustPan; // initial values

exports.DEFAULT_KEYBOARD_INPUT_MODE = DEFAULT_KEYBOARD_INPUT_MODE;
const INITIAL_VALUE = Number.NEGATIVE_INFINITY;
exports.INITIAL_VALUE = INITIAL_VALUE;
const INITIAL_SNAP_POINT = -999;
exports.INITIAL_SNAP_POINT = INITIAL_SNAP_POINT;
const INITIAL_CONTAINER_HEIGHT = -999;
exports.INITIAL_CONTAINER_HEIGHT = INITIAL_CONTAINER_HEIGHT;
const INITIAL_CONTAINER_OFFSET = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};
exports.INITIAL_CONTAINER_OFFSET = INITIAL_CONTAINER_OFFSET;
const INITIAL_HANDLE_HEIGHT = -999;
exports.INITIAL_HANDLE_HEIGHT = INITIAL_HANDLE_HEIGHT;
const INITIAL_POSITION = _constants.SCREEN_HEIGHT; // accessibility

exports.INITIAL_POSITION = INITIAL_POSITION;
const DEFAULT_ACCESSIBLE = true;
exports.DEFAULT_ACCESSIBLE = DEFAULT_ACCESSIBLE;
const DEFAULT_ACCESSIBILITY_LABEL = 'Bottom Sheet';
exports.DEFAULT_ACCESSIBILITY_LABEL = DEFAULT_ACCESSIBILITY_LABEL;
const DEFAULT_ACCESSIBILITY_ROLE = 'adjustable';
exports.DEFAULT_ACCESSIBILITY_ROLE = DEFAULT_ACCESSIBILITY_ROLE;
const DEFAULT_ENABLE_ACCESSIBILITY_CHANGE_ANNOUNCEMENT = true;
exports.DEFAULT_ENABLE_ACCESSIBILITY_CHANGE_ANNOUNCEMENT = DEFAULT_ENABLE_ACCESSIBILITY_CHANGE_ANNOUNCEMENT;

const DEFAULT_ACCESSIBILITY_POSITION_CHANGE_ANNOUNCEMENT = positionInScreen => `Bottom sheet snapped to ${positionInScreen}% of the screen`;

exports.DEFAULT_ACCESSIBILITY_POSITION_CHANGE_ANNOUNCEMENT = DEFAULT_ACCESSIBILITY_POSITION_CHANGE_ANNOUNCEMENT;
//# sourceMappingURL=constants.js.map