module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts,scss}'
    ]
  },
  darkMode: false,
  theme: {
    extend: {
      screens: {
        print: {
          raw: 'print'
        },
      }
    },
    fontFamily: {
      sans: [
        'Raleway',
        'sans'
      ],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
