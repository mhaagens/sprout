module.exports=function(a){const b=a.production||"production"===process.env.NODE_ENV,c=a.ssr||!1,d=a.targets;if(!a.targets)throw new Error("babel-preset-sprout: Targets must be defined");return{plugins:[require("@babel/plugin-syntax-dynamic-import"),require("@babel/plugin-transform-runtime"),require("@babel/plugin-transform-regenerator"),require("@babel/plugin-proposal-class-properties"),[require("@babel/plugin-proposal-decorators"),{legacy:!0}],require("@babel/plugin-proposal-object-rest-spread"),require("react-loadable/babel"),require("react-hot-loader/babel"),[require("babel-plugin-styled-components"),{ssr:c,displayName:!b}]],presets:[[require("@babel/preset-env"),{modules:!1,targets:d}],require("@babel/preset-react")]}};