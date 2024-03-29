import axios from "axios";

const api = axios.create();

api.defaults.headers.post["Content-Type"] = "application/json";

// api.interceptors.request.use(
//   config => {
//     config.withCredentials = false;
//     return config;
//   },
//   error => Promise.reject(error)
// );

api.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    //
    // if (response.status === 403) {
    //   EA.addEvent("log", "WARN", "User already logged out");
    // }
    const error = new Error(response.status);
    error.response = response;
    throw error;
  },
  error =>
    // Do something with response error
    Promise.reject(error)
);

export default api;
