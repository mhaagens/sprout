module.exports = function(api, opts) {
  const production = opts.production || process.env.NODE_ENV === "production";
  const ssr = opts.ssr || false;
  const targets = opts.targets;

  if (!targets) {
    console.log(opts);
    throw new Error("babel-preset-sprout: Targets must be defined");
  }

  return {
    plugins: [
      require("@babel/plugin-syntax-dynamic-import"),
      require("@babel/plugin-transform-runtime"),
      require("@babel/plugin-transform-regenerator"),
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
          modules: false,
          targets
        }
      ],
      require("@babel/preset-react")
    ]
  };
};
