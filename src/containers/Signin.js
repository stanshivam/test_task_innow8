import React from "react";
import { connect } from "react-redux";
import config from "../config";
import SpotifyLogin from "react-spotify-login";
// import { bindActionCreators } from "redux";
import { spotifyLogin } from "../actions/authActions";

const Signin = ({ spotifyLogin, exp: { history } }) => {
  const onSuccess = (res) => {
    spotifyLogin(res);
    history.push("/albums");
  };

  const onFailure = (err) => {
    console.log(err);
  };
  return (
    <div>
      <SpotifyLogin
        clientId={config.spotifyClientID}
        redirectUri={config.redirectURI}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  spotifyLogin: (user) => {
    dispatch(spotifyLogin(user));
  },
});
export default connect(null, mapDispatchToProps)(Signin);
