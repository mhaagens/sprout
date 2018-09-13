module.exports = opts => {
    const production = opts.production || process.env.NODE_ENV === "production";
    const ssr = opts.ssr || false;

    return {
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-regenerator",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        "@babel/plugin-proposal-object-rest-spread",
        "react-loadable/babel",
        "react-hot-loader/babel",
        [
          "babel-plugin-styled-components",
          {
            ssr: ssr,
            displayName: !production
          }
        ]
      ]
    };
  };
  