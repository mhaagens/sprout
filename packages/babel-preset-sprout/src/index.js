import { declare } from "@babel/helper-plugin-utils";

import presetReact from "@babel/preset-react";
import transformRegenerator from "@babel/plugin-transform-regenerator";
import transformRuntime from "@babel/plugin-syntax-dynamic-import";
import syntaxDynamicImport from "@babel/plugin-syntax-dynamic-import";
import classPropertiesProposal from "@babel/plugin-proposal-class-properties";
import decoratorsProposal from "@babel/plugin-proposal-decorators";
import restSpreadProposal from "@babel/plugin-proposal-object-rest-spread";
import loadablePlugin from "react-loadable/babel";
import hotLoaderPlugin from "react-hot-loader/babel";
import styledPlugin from "babel-plugin-styled-components";

export default declare((api, opts) => {
  api.assertVersion(7);
  const production = process.env.NODE_ENV === "production";
  const ssr = opts.ssr ? opts.ssr : false;
  const defaultTargets = ssr
    ? {
        node: "current"
      }
    : ["> 1%", "last 2 versions", "not ie <= 8"];
  const targets = targets ? targets : defaultTargets;

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          targets
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      transformRenegerator,
      transformRuntime,
      syntaxDynamicImport,
      classPropertiesProposal,
      [decoratorsProposal, { legacy: true }],
      restSpreadProposal,
      loadablePlugin,
      hotLoaderPlugin,
      [
        styledPlugin,
        {
          ssr: ssr,
          displayName: !production
        }
      ]
    ]
  };
});
