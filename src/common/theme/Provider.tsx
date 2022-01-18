import React from 'react'

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core'

import Global from './Global'
import theme from './index'

export interface Props {
  children: React.ReactNode
}

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Global />

      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
