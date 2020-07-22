module.exports = {
  stories: ["../src/*.stories.tsx"],
  addons: ["@storybook/preset-create-react-app"],
  webpackFinal: require("../config-overrides").webpack,
};
