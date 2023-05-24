module.exports = {
  plugins: [
    ["postcss-import", {}],
    ["postcss-import-ext-glob", {}],
    [
      "postcss-prepend-imports",
      {
        path: ["src/styles"],
      },
    ],
    ["postcss-mixins", {}],
    ["postcss-nested", {}],
    ["postcss-nested-ancestors", {}],
    ["postcss-extend-rule", {}],
    ["postcss-each", {}],
    [
      "postcss-preset-env",
      {
        stage: 0,
        autoprefixer: { grid: true },
      },
    ],
    [
      "postcss-pxtorem",
      {
        propList: ["*"],
      },
    ],
    ["postcss-aspect-ratio-polyfill", {}],
    ["postcss-combine-duplicated-selectors", {}],
    ["postcss-dark-theme-class", {}],
    ["postcss-discard-duplicates", {}],
    ["postcss-flexbugs-fixes", {}],
    ["postcss-hexrgba", {}],
    ["postcss-sort-media-queries", {}],
    ["postcss-normalize", {}],
    ["postcss-easings", {}],
  ],
};
