import { PaletteOptions } from '@material-ui/core/styles/createPalette'

interface KumuColors {
  primary: {
    cetaceanBlue: string
    radicalRed: string
  }
  secondary: {
    turquoise: string
    deepViolet: string
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    kumu: KumuColors
  }

  interface PaletteOptions {
    kumu?: KumuColors
  }
}

const kumu: KumuColors = {
  primary: {
    cetaceanBlue: '#0F0B46',
    radicalRed: '#FB2961',
  },
  secondary: {
    turquoise: '#4AEFE9',
    deepViolet: '#261067',
  },
}

const colors: PaletteOptions = {
  type: 'light',

  kumu,
}

export default colors
