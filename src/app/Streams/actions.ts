/* eslint-disable import/prefer-default-export */

import { AppThunk } from 'app/store'
import { streamDetailsApi, streamsListApi } from './api'

import { setLoading, setLists, setLiveCount, setDetails } from '.'

export const getStreamsList = (): AppThunk => async (dispatch, getState) => {
  const { page } = getState().streams
  try {
    dispatch(setLoading('list'))
    const result = await streamsListApi({ page }).finally(() =>
      dispatch(setLoading(null)),
    )
    dispatch(setLists(result.lives))
    dispatch(setLiveCount(result.count.lives_count))
  } catch (error) {
    dispatch(setLoading(null))
    console.log(error)
  }
}

export const getStreamDetails =
  (channelId: string, uid: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setLoading('details'))
    try {
      const result = await streamDetailsApi({ channelId, uid }).finally(() =>
        dispatch(setLoading(null)),
      )
      dispatch(setDetails(result))
    } catch (error) {
      dispatch(setLoading(null))
      console.log(error)
    }
  }
