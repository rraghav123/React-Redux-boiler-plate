import api from "../../services/api";
import API_URLS from "../../services/apiUrls";
import BoilerPlateMockData from "../static/BoilerPlateMockData";

const USE_MOCK_DATA = true;

const BoilerPlateService = {
  getData: params => api.get(API_URLS.BOILER_PLATE_URL, {
    params,
  }),

  getDataMock: () => new Promise((resolve) => {
    setTimeout(() => resolve(BoilerPlateMockData), 2000);
  }),
};

export default {
  getData: USE_MOCK_DATA ? BoilerPlateService.getDataMock : BoilerPlateService.getData,
};
