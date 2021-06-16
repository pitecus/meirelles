module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts,scss}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}
