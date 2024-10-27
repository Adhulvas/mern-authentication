import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

AxiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer" + " " + token;
  return config;
});

AxiosInstance.interceptors.request.use(
  function (response) {
    if (response.data) {
      console.log(response.data);
    }
    return response;
  },
  function (err) {
    console.log(err.response);
    if (err.data.message='unauthorized user' && err.response.status === '401') {
      localStorage.removeItem('token')
      window.location.href='/'
    }
    return Promise.reject(err)
  }
);
