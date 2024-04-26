import { ActionTypes, DataTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const filterData = (category) => {
    return {
        type: ActionTypes.FILTER_PRODUCTS,
        payload: {
            data: !category || category === "All"
            ? phData[DataTypes.PRODUCTS]
            : phData[DataTypes.PRODUCTS].filter(
                (p) => p.category.name.toLowerCase() === category.toLowerCase()
              )
        }
    }
};