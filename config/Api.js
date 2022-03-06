import axios from "axios";
import Environment from "./Environment";

const callApi = async (method, path, data, jwt, params = {}) => {
  let headers = {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  };
  if (jwt == "") {
    headers = { "Content-Type": "application/json" };
  }
  const baseUrl = Environment.SERVER_URL + "";
  const fullUrl = `${baseUrl}${path}`;
  console.log(fullUrl);

  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers, params });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form, token) => callApi("post", "/users/", form, token),
  login: (form, token) => callApi("post", "/user/signin/", form , token),
  getUserAll : (token) => callApi("get", `/user/all`, null, token), 
};
