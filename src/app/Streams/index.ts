/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StreamerDetails } from 'common/models/typings/StreamerDetails'
import { StreamerInfo } from 'common/models/typings/StreamerInfo'

type loading = null | 'list' | 'details'

export interface StreamsState {
  loading: loading
  page: number
  list: StreamerInfo[]
  liveCount: number
  details: StreamerDetails | null
}

const initialState: StreamsState = {
  loading: null,
  page: 1,
  list: [],
  liveCount: 0,
  details: null,
}

const streams = createSlice({
  name: 'streams',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<loading>) {
      state.loading = action.payload
    },
    setLists(state, action: PayloadAction<StreamerInfo[]>) {
      state.list = [...state.list, ...action.payload]
    },
    setLiveCount(state, action: PayloadAction<number>) {
      state.liveCount = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setDetails(state, action: PayloadAction<StreamerDetails>) {
      state.details = action.payload
    },
  },
})

export const { setLoading, setLists, setLiveCount, setPage, setDetails } =
  streams.actions
export default streams.reducer
