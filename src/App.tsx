import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'app/store'

import ThemeProvider from 'common/theme/Provider'

import Router from 'routes/Router'

import 'common/utils/axios'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  )
}

export default App
