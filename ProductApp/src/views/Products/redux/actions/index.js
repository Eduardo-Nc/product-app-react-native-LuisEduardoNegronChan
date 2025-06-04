import { types } from '@Redux/types'

export const setProductsData = data => ({
    type: types.SAVE_PRODUCTS,
    data,
})

export const setInitialData = () => ({
    type: types.DELETE_ALL_PRODUCTS,
})