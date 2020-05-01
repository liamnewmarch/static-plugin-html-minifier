import minifier from 'html-minifier';

export default function(options = {}) {
  return {
    transform(html) {
      return minifier.minify(html, options);
    },
  };
}
