
import { clientConstants } from 'Constants'

export const clientActions = {
  setScreen
}

function setScreen(screen) {

  return dispatch => {
    dispatch(set(screen))
  }

  function set(screen) { return { type: clientConstants.SET_SCREEN, screen } }
}
