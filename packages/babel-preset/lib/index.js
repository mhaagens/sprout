module.exports=function(a){const b=a.production||"production"===process.env.NODE_ENV,c=a.ssr||!1;return{plugins:[require("@babel/plugin-transform-runtime"),require("@babel/plugin-transform-regenerator"),require("@babel/plugin-syntax-dynamic-import"),require("@babel/plugin-proposal-class-properties"),[require("@babel/plugin-proposal-decorators"),{legacy:!0}],require("@babel/plugin-proposal-object-rest-spread"),require("react-loadable/babel"),require("react-hot-loader/babel"),[require("babel-plugin-styled-components"),{ssr:c,displayName:!b}]],presets:[[require("@babel/preset-env"),{targets:{browsers:["> 1%","last 2 versions","not ie <= 8"]}}],require("@babel/preset-react")]}};