import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbums, submitNote } from "../actions/albumsActions";
import AlbumsComponent from "../components/AlbumsComponent";
import { spotifyLogout } from "../actions/authActions";

const albumIds = [
  "41MnTivkwTO3UUJ8DrqEJJ",
  "4TqgXMSSTwP3RCo3MMSR6t",
  "0Jh3A8NAbc9eFpdUfhDedt",
  "0o5xjCboti8vXhdoUG9LYi",
  "3C5JkDI9fDqS9BZd0lNsma",
  "0gA0nZrZ55PLUp7ARfrICu",
];

const Albums = ({
  getAlbums,
  isLoading,
  albums,
  logout,
  history,
  submitNote,
}) => {
  useEffect(() => {
    getAlbums(albumIds.join(","));
  }, [getAlbums]);

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return isLoading ? (
    <h1>LOADING...</h1>
  ) : (
    <div>
      <h4 onClick={handleLogout}>LOGOUT</h4>
      <AlbumsComponent albums={albums} submitNote={submitNote} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.albums.isLoading,
  albums: state.albums.albums,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: (ids) => {
    dispatch(getAlbums(ids));
  },
  logout: () => {
    dispatch(spotifyLogout());
  },
  submitNote: (data) => {
    dispatch(submitNote(data));
  },
});
// just another ways to map actions with the component
// const mapDispatchToprops = (dispatch) => {
//     return {
//       actions: bindActionCreators({ getAlbums }, dispatch),
//     };
//   };

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
