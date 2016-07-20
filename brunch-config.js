module.exports = {
  npm: {
    enabled: true
  },
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app/
      }
    }
  },
  paths: {
    "public": "public",
    "watched": [
      "app/"
    ]
  },
  modules: {
    autoRequire: {
      "js/app.js": ["app/app"]
    }
  },
  plugins: {
    babel: {presets: ['es2015']},
    coffeescript: {bare: true},
    autoReload: {
      delay: 500,
      enabled: true,
      port: [9000],
      forceRepaint: true,
      host: "127.0.0.1"
    }
  }
};
