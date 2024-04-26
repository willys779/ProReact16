import { ActionTypes } from "./Types"
import { data as initialData } from "./placeholderData"

export const ShopReducer = (storeData = initialData, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_PRODUCTS:
      return {
        ...storeData,
        filterProducts: action.payload.data,
      }
    default:
      return storeData || {}
  }
}
