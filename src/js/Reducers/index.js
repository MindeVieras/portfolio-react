
import { combineReducers } from 'redux'
import { i18nState } from 'redux-i18n'
import { reducer as formReducer } from 'redux-form'

import { client } from './client.reducer'

const rootReducer = combineReducers({
  client,
  form: formReducer,
  i18nState
})

export default rootReducer
