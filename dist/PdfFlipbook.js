"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIframe = _interopRequireDefault(require("react-iframe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PdfFlipbook = function PdfFlipbook() {
  return /*#__PURE__*/_react.default.createElement(_reactIframe.default, {
    src: "../pdf-viewer/index.html"
  });
};

var _default = PdfFlipbook;
exports.default = _default;