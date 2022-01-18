/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit'

export interface UiState {
  sidebarCollapsed: boolean
}

const initialState: UiState = {
  sidebarCollapsed: true,
}

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebarCollapsed(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
  },
})

export const { toggleSidebarCollapsed } = ui.actions
export default ui.reducer
