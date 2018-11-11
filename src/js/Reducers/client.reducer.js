
import { clientConstants } from 'Constants'

const initialState = {
  screen: {
    width: 0,
    height: 0,
    orientation: null
  }
}

export function client(state = initialState, action) {
  switch (action.type) {
  case clientConstants.SET_SCREEN:
    return {
      ...state,
      screen: action.screen
    }
  default:
    return state
  }
}
