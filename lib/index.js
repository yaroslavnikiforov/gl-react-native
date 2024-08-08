"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Surface = void 0;

var _reactNative = require("react-native");

var _glReact = require("gl-react");

var _GLViewNative = _interopRequireDefault(require("gl-react-expo/lib/GLViewNative"));

require("webgltexture-loader-expo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RenderLessElement = _reactNative.View;
const Surface = (0, _glReact.createSurface)({
  GLView: _GLViewNative.default,
  RenderLessElement,
  requestFrame: global.requestAnimationFrame,
  cancelFrame: global.cancelAnimationFrame
});
exports.Surface = Surface;
//# sourceMappingURL=index.js.map