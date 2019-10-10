import BoilerPlateActionTypes from "./BoilerPlateActionTypes";
import BoilerPlateService from "../service/BoilerPlateService";

const BoilerPlateActions = {
  getData: () => (dispatch) => {
    BoilerPlateService.getData()
      .then(res => {
        dispatch(BoilerPlateActions.setData(res));
      })
      .catch(() => {
        // error
      });
  },

  setData: payload => ({ type: BoilerPlateActionTypes.SET_DATA, payload }),

  setCookingState: payload => ({ type: BoilerPlateActionTypes.SET_COOKING_STATE, payload }),
};

export default BoilerPlateActions;
