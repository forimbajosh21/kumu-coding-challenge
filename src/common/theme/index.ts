import { createTheme, ThemeOptions } from '@material-ui/core/styles'

import palette from './colors'
import typography from './typography'
import overrides from './overrides'

const theme: ThemeOptions = {
  palette,
  typography,
  overrides,
}

export default createTheme(theme)
