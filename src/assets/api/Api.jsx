import axios from "axios";

const defaultOptions = {
  baseURL: `${import.meta.env.VITE_HOST_API}`,
  headers: {
    "Content-type": "application/json",
  },
};

const TokenizedAxios = (() => {
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("admin_token");
    config.headers.token = token ? `${token}` : "";

    return config;
  });

  return instance;
})();

export const Axios = (() => {
  const instance = axios.create(defaultOptions);

  return instance;
})();

export default TokenizedAxios;
