import config from "../config";
import { isAuthenticated } from "./utility";

const customHeader = {
  "Content-Type": "application/json; charset=UTF-8",
};

const base = (method, url, data = {}, baseUrl) => {
  let body = undefined;
  if (method !== "get") {
    body = JSON.stringify(data);
  }
  if (isAuthenticated()) {
    const user = localStorage.getItem(config.testUser);
    const token = JSON.parse(user).access_token;
    customHeader.Authorization = `Bearer ${token}}`;
  }
  return fetch(`${baseUrl ? baseUrl : config.spotifyAPI}${url}`, {
    method,
    headers: customHeader,
    body,
  })
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        default:
          return response;
      }
    })
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
};
const SuperFetch = {};
["get", "post", "put", "delete"].forEach((method) => {
  SuperFetch[method] = base.bind(null, method);
});
export default SuperFetch;
