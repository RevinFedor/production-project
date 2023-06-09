import webpack, { ResolveOptions } from "webpack";

export function BuildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
