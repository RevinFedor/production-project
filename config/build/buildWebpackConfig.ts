import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { BuildLoaders } from "./BuildLoaders";
import { BuildResolvers } from "./BuildResolvers";
import { buildPlugins } from "./buildPlugins";
import path from "path";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: BuildLoaders(options),
    },
    resolve: BuildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
