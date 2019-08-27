module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  sourceMaps: true,
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx"
        ],
        root: ["./src"],
        alias: {
          "components": ["./src/components/"]
        }
      }
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["i18next-extract", {locales: ['de'], useI18nextDefaultValue: true}],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining"
  ]
};
