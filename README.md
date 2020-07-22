## Reproduction repo for Storybook issue [#11644](https://github.com/storybookjs/storybook/issues/11644)

```bash
  yarn install
```

### How is repo structured

There is a `modules` folder for concern separation to have a separate set of dependencies for each module, but there is no intention in publishing those packages anywhere. As such, there is no direct dependency between those packages.

The setup is utilizing TypeScript path aliases to pick up files from other _modules_ and to compile those.

Path aliases are defined in `modules/web/tsconfig.real.json` (to workaround CRA issue that removes these paths).

CRA is then configured with `react-app-rewired` and utilizing `react-app-rewire-alias` to convert paths to Webpack aliases.

The same aliases are then used within `modules/web/.storybook/main.js` for the Webpack configuration.

### About the issue

In the `modules/web/src/App.tsx` there is a call to function imported from `~common/tool`.

Running `yarn web start` to run CRA, everything works correctly.

Running `yarn web story` to run Storybook and the error is presented.

Removing the type declaration `: Date` on the first line of `modules/common/src/tool.ts` _fixes_ the build.
