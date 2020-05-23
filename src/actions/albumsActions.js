import {
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE,
  SUBMIT_NOTE,
  SUBMIT_NOTE_SUCCESS,
  SUBMIT_NOTE_FAILURE,
} from "../constants/albumsConstants";

export const getAlbums = (ids) => ({
  type: GET_ALBUMS,
  ids,
});

export const getAlbumsSuccess = (albums) => ({
  type: GET_ALBUMS_SUCCESS,
  albums,
});

export const getAlbumsFailure = (err) => ({
  type: GET_ALBUMS_FAILURE,
  err,
});

export const submitNote = (data) => ({
  type: SUBMIT_NOTE,
  data,
});

export const submitNoteSuccess = (res) => ({
  type: SUBMIT_NOTE_SUCCESS,
  res,
});

export const submitNoteFailure = (err) => ({
  type: SUBMIT_NOTE_FAILURE,
  err,
});
