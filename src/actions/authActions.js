import { SPOTIFY_LOGIN, SPOTIFY_LOGOUT } from "../constants/authConstants";

export const spotifyLogin = (user) => ({
  type: SPOTIFY_LOGIN,
  user,
});

export const spotifyLogout = () => ({
  type: SPOTIFY_LOGOUT,
});
