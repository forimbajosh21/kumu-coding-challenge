import streamsReducer, {
  StreamsState,
  setLoading,
  setLists,
  setLiveCount,
  setPage,
  setDetails,
} from '..'
import { streamsList, streamerDetails } from './testData'

describe('streams reducer', () => {
  const initialState: StreamsState = {
    loading: null,
    page: 1,
    list: [],
    liveCount: 0,
    details: null,
  }

  it('should handle initial state', () => {
    expect(streamsReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle setting of loading state', () => {
    const actual = streamsReducer(initialState, setLoading('list'))
    expect(actual.loading).toBe('list')
  })

  it('should handle setting of list state', () => {
    const actual = streamsReducer(initialState, setLists(streamsList))
    expect(actual.list).toStrictEqual(streamsList)
  })

  it('should handle setting of liveCount state', () => {
    const actual = streamsReducer(initialState, setLiveCount(1))
    expect(actual.liveCount).toBe(1)
  })

  it('should handle setting of page state', () => {
    const actual = streamsReducer(initialState, setPage(1))
    expect(actual.page).toBe(1)
  })

  it('should handle setting of page state', () => {
    const actual = streamsReducer(initialState, setDetails(streamerDetails))
    expect(actual.details).toBe(streamerDetails)
  })
})
