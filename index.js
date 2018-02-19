const { dirname } = require('path')
import { createFilter } from 'rollup-pluginutils'
import sass from 'node-sass'

export default function string(opts = {}) {
  if (!opts.include) {
    throw Error('include option should be specified');
  }
  
  const filter = createFilter(opts.include, opts.exclude);

  return {
    name: 'string',

    transform(code, id) {
      if (filter(id)) {
        const rendered = sass.renderSync({
          file: id,
        })

        return {
          code: `export default ${JSON.stringify(rendered.css.toString())};`,
          map: { mappings: '' }
        }
      }
    }
  }
}
