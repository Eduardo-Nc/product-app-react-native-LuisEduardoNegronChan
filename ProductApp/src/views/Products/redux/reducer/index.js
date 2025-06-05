import { types } from '@Redux/types'

const initialState = {
  products: {},
  selectedProduct: {},
}

export const products = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_PRODUCTS:
      return {
        ...state,
        products: action.data,
      }
    case types.SAVE_PRODUCT:
      return {
        ...state,
        selectedProduct: action.data,
      }
    case types.DELETE_ALL_PRODUCTS: {
      return initialState
    }
    default:
      return state
  }
}
