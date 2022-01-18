import uiReducer, { UiState, toggleSidebarCollapsed } from '..'

describe('streams reducer', () => {
  const initialState: UiState = {
    sidebarCollapsed: true,
  }

  it('should handle initial state', () => {
    expect(uiReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle setting of loading state', () => {
    const actual = uiReducer(initialState, toggleSidebarCollapsed())
    expect(actual.sidebarCollapsed).toBe(false)
  })
})
