import config from "../config";

export const isAuthenticated = () => {
  return !!localStorage.getItem(config.testUser);
};
