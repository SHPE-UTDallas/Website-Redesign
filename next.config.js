const path = require('path')
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid'
])

module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, 'theming'), path.join(__dirname, 'styles')],

  },
})
