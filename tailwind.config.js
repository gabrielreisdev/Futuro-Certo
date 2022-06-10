module.exports = {
  content: ['./*html'],
  theme: {
    fontFamily: {
      custom: 'Inter, sans-serif',
      poppins: 'Poppins, sans-serif',
      opensans: 'Open Sans, sans-serif',
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      desktop: '1280px',
      hero: '1000px',
      xl: '1440px'
    },
    extend: {
      colors: {
        laranjaOriginal: 'hsl(27, 87%, 52%)',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}