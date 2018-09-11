"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _presetReact = _interopRequireDefault(require("@babel/preset-react"));

var _pluginTransformRegenerator = _interopRequireDefault(require("@babel/plugin-transform-regenerator"));

var _pluginSyntaxDynamicImport = _interopRequireDefault(require("@babel/plugin-syntax-dynamic-import"));

var _pluginProposalClassProperties = _interopRequireDefault(require("@babel/plugin-proposal-class-properties"));

var _pluginProposalDecorators = _interopRequireDefault(require("@babel/plugin-proposal-decorators"));

var _pluginProposalObjectRestSpread = _interopRequireDefault(require("@babel/plugin-proposal-object-rest-spread"));

var _babel = _interopRequireDefault(require("react-loadable/babel"));

var _babel2 = _interopRequireDefault(require("react-hot-loader/babel"));

var _babelPluginStyledComponents = _interopRequireDefault(require("babel-plugin-styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _helperPluginUtils.declare)(function (api, opts) {
  api.assertVersion(7);
  var production = process.env.NODE_ENV === "production";
  var ssr = opts.ssr ? opts.ssr : false;
  var defaultTargets = ssr ? {
    node: "current"
  } : ["> 1%", "last 2 versions", "not ie <= 8"];
  var targets = targets ? targets : defaultTargets;
  return {
    presets: [["@babel/preset-env", {
      modules: false,
      targets: targets
    }], "@babel/preset-react"],
    plugins: [production && transformRenegerator(), production && (0, _pluginSyntaxDynamicImport.default)(), (0, _pluginSyntaxDynamicImport.default)(), (0, _pluginProposalClassProperties.default)(), (0, _pluginProposalDecorators.default)({
      legacy: true
    }), (0, _pluginProposalObjectRestSpread.default)(), (0, _babel.default)(), (0, _babel2.default)(), (0, _babelPluginStyledComponents.default)({
      ssr: ssr,
      displayName: !production
    })]
  };
});

exports.default = _default;
