const path = require('path')
const withTM = require('next-transpile-modules')([
  '@fullcalendar'
])

module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, 'theming'), path.join(__dirname, 'styles')],

  },
})
