const { alias, configPaths } = require("react-app-rewire-alias");

const paths = configPaths("tsconfig.real.json");

module.exports = {
  webpack: function overrideWP(config) {
    return alias(paths)(config);
  },
};
