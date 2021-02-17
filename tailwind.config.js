/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      fontFamily: {
        sans: ['Sailec'],
      },
      colors: {
        topgray: '#4F4F4F',
        sblue: '#0488E0',
        sgraydark: '#262626',
        sgray:'#949494',
        sgraydarker:'#C4C4C4',
        sbackground:'#E5E5E5',
        sgraylight:'#ECECEC',
        sblack: '#303030',
        sgraylighter:'#EEEEEE',
        bgback: '#E5E5E5',
        dark:'#707070',
        darkgray:'#F5F5F5',
        darkgrayer:'#F4F4F4',
        darkcolor:'#949494'
      },
      width: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/22': '48%',
        '1/222': '49.5%',
      }),
      spacing: {
        '17' : '4.5rem',
        '64.2': '18rem',
        '64.3': '20rem',
        '64.4': '23rem',
        '64.5': '25rem',
        '64.8': '27rem',
        '65': '38rem',
        '65.5': '42rem',
        '65.8': '50rem',
        '66': '55rem',
      },
    },
  },
  variants: {},
  plugins: [],
}