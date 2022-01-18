/* eslint-disable import/no-cycle */

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import SreamsReducer from './Streams'

import UiReducer from './Ui'

export const store = configureStore({
  reducer: {
    streams: SreamsReducer,
    ui: UiReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
