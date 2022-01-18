import { Overrides } from '@material-ui/core/styles/overrides'

import CircularFontBold from 'common/assets/fonts/CircularXXTT-Bold.ttf'
import CircularFontMedium from 'common/assets/fonts/CircularXXTT-Medium.ttf'
import CircularFontRegular from 'common/assets/fonts/CircularXXTT-Regular.ttf'

const circularBold: any = {
  fontFamily: 'Circular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Circular'),
    local('Circular-Bold'),
    url(${CircularFontBold}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const circularMedium: any = {
  fontFamily: 'Circular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: `
    local('Circular'),
    local('Circular-Medium'),
    url(${CircularFontMedium}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const circularRegular: any = {
  fontFamily: 'Circular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Circular'),
    local('Circular-Regular'),
    url(${CircularFontRegular}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const overrides: Overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [circularRegular, circularMedium, circularBold],
    },
  },
}

export default overrides
