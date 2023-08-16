const esbuild = require("esbuild");
// const {sassPlugin} = require("esbuild-sass-plugin");

esbuild.buildSync({
    entryPoints: ['src/MicroFrontend.jsx'],
    bundle: true,
    minify: false,
    format: 'esm',
    sourcemap: true,
    outfile: 'dist/output.js',
    external: ['react', 'react-dom'],
  //   plugins: [
  //     sassPlugin({type: "style"}),
  // ],
  })