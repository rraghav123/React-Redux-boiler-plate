import BoilerPlateActionTypes from "./BoilerPlateActionTypes";

const initialState = {
  isCooking: false,
  data: {},
};

const BoilerPlateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BoilerPlateActionTypes.SET_DATA:
      return {
        ...state,
        items: action.payload.items,
        plate: action.payload.plate,
      };

    case BoilerPlateActionTypes.SET_COOKING_STATE:
      return {
        ...state,
        isCooking: action.payload,
      };

    default:
      return state;
  }
};

export default BoilerPlateReducer;
