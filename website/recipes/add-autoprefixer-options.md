# Add Autoprefixer options

```js title="craco.config.js"
module.exports = {
  style: {
    postcss: {
      env: {
        autoprefixer: {
          cascade: true,
        },
      },
    },
  },
};
```
