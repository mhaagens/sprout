module.exports = function(opts) {
  const production = opts.production || process.env.NODE_ENV === "production";
  const ssr = opts.ssr || false;

  return {
    plugins: [
      require("@babel/plugin-transform-runtime"),
      require("@babel/plugin-transform-regenerator"),
      require("@babel/plugin-syntax-dynamic-import"),
      require("@babel/plugin-proposal-class-properties"),
      [require("@babel/plugin-proposal-decorators"), { legacy: true }],
      require("@babel/plugin-proposal-object-rest-spread"),
      require("react-loadable/babel"),
      require("react-hot-loader/babel"),
      [
        require("babel-plugin-styled-components"),
        {
          ssr: ssr,
          displayName: !production
        }
      ]
    ],
    presets: [
      [
        require("@babel/preset-env"),
        {
          targets: {
            browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
          }
        }
      ],
      require("@babel/preset-react")
    ]
  };
};
