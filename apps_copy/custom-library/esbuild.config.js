const res = require('esbuild').buildSync({
    entryPoints: ['src/MicroFrontend.jsx'],
    bundle: true,
    minify: false,
    format: 'esm',
    sourcemap: true,
    outfile: 'dist/output.js',
    external: ['react', 'react-dom'], 
  })