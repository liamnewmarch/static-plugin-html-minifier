# HTMLMinifier plugin for Static

This plugin adds HTMLMinifier support to [Static](https://www.npmjs.com/package/@liamnewmarch/static).

## Usage

First, install Static and this plugin

```sh
npm install @liamnewmarch/static @liamnewmarch/static-plugin-html-minifier
```

Next add the plugin in your `static.config.js`

```js
import minifier from '@liamnewmarch/static-plugin-html-minifier';

export default {
  // Other Static options here (optional)
  plugins: [
    minifier({
      // Plugin options here (optional)
    }),
  ],
}
```

## Options

The HTMLMinifier plugin is a function which can take an optional options object. See the [HTMLMinifier options quick reference](https://www.npmjs.com/package/html-minifier#options-quick-reference).
