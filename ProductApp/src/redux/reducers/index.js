import { combineReducers } from 'redux'
import { products } from '@Views/Products/redux/reducer'

import { types } from '../types'

const appReducer = combineReducers({
  products
})

const rootReducer = (state, action) => {
  if (action.type === types.LOG_OUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
