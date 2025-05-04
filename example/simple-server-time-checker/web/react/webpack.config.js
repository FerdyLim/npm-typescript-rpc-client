const path = require('path');
    module.exports = {
      // other webpack configurations
      resolve: {
        fallback: {
          "fs": false,
          "os": require.resolve("os-browserify/browser"),
          "path": require.resolve("path-browserify")
        }
    }
};