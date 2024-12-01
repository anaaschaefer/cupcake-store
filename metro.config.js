const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Ignorar módulos problemáticos no React Native
  config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    fs: false,
    util: false,
    path: false,
    "form-data": false,
  };

  return config;
})();
