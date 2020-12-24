import axios from "axios";
import store from "./store/index";
axios.defaults.baseURL = "http://localhost:3000/";

export default function setAxios() {
  //请求链接
  axios.interceptors.request.use(config => {
    if (store.state.token) {
      config.headers["Authorization"] = `Bearer ${store.state.token}`;
    }
    return config;
  });
}
 