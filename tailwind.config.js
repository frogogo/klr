/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

*/

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },

    colors: {
      transparent: 'transparent',
      primary: {
        default: '#2f2874',
        900: '#211e3f'
      },
      secondary: {
        default: '#f9b000',
        900: '#df9e00'
      },
      gray: {
        100: '#fafafa',
        200: '#edecef',
        default: '#c3c2ca',
        400: '#8d8b9b'
      },
      black: '#2B2B2B',
      white: '#ffffff'
    },

    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
      wider: '0.1em',
      widest: '0.15em'
    },

    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      8: '8px'
    },

    borderColor: theme => ({
      default: theme('colors.gray.300', 'currentColor'),
      ...theme('colors')
    })
  },

  variants: {
    borderCollapse: [],
    outline: ['focus'],
    fill: [],
    stroke: [],
    fontStyle: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive', 'hover', 'focus']
  },

  corePlugins: {
    container: true
  }
}
