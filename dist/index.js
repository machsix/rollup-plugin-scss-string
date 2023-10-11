'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rollupPluginutils = require('rollup-pluginutils');
var sass = _interopDefault(require('sass'));

function string(opts) {
  if ( opts === void 0 ) opts = {};

  if (!opts.include) {
    throw Error('include option should be specified');
  }

  var filter = rollupPluginutils.createFilter(opts.include, opts.exclude);

  return {
    name: 'string',

    transform: function transform(code, id) {
      if (filter(id)) {
        var rendered = sass.compile({
          file: id,
        });

        return {
          code: ("export default " + (JSON.stringify(rendered.css.toString())) + ";"),
          map: { mappings: '' }
        }
      }
    }
  }
}

module.exports = string;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUZpbHRlciB9IGZyb20gJ3JvbGx1cC1wbHVnaW51dGlscydcclxuaW1wb3J0IHNhc3MgZnJvbSAnc2FzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmluZyhvcHRzID0ge30pIHtcclxuICBpZiAoIW9wdHMuaW5jbHVkZSkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ2luY2x1ZGUgb3B0aW9uIHNob3VsZCBiZSBzcGVjaWZpZWQnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlciA9IGNyZWF0ZUZpbHRlcihvcHRzLmluY2x1ZGUsIG9wdHMuZXhjbHVkZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnc3RyaW5nJyxcclxuXHJcbiAgICB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcclxuICAgICAgaWYgKGZpbHRlcihpZCkpIHtcclxuICAgICAgICBjb25zdCByZW5kZXJlZCA9IHNhc3MuY29tcGlsZSh7XHJcbiAgICAgICAgICBmaWxlOiBpZCxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY29kZTogYGV4cG9ydCBkZWZhdWx0ICR7SlNPTi5zdHJpbmdpZnkocmVuZGVyZWQuY3NzLnRvU3RyaW5nKCkpfTtgLFxyXG4gICAgICAgICAgbWFwOiB7IG1hcHBpbmdzOiAnJyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25zdCIsImNyZWF0ZUZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdlLFNBQVMsTUFBTSxDQUFDLElBQVMsRUFBRTs2QkFBUCxHQUFHOztFQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtJQUNqQixNQUFNLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0dBQ25EOztFQUVEQSxJQUFNLE1BQU0sR0FBR0MsOEJBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7RUFFeEQsT0FBTztJQUNMLElBQUksRUFBRSxRQUFROztJQUVkLDZCQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtNQUNsQixJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNkRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1VBQzVCLElBQUksRUFBRSxFQUFFO1NBQ1QsRUFBQzs7UUFFRixPQUFPO1VBQ0wsSUFBSSx3QkFBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFDLE9BQUc7VUFDbEUsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtTQUN0QjtPQUNGO0tBQ0Y7R0FDRjtDQUNGOzs7OyJ9
