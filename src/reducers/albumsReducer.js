import {
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILURE,
  SUBMIT_NOTE,
  SUBMIT_NOTE_SUCCESS,
  SUBMIT_NOTE_FAILURE,
} from "../constants/albumsConstants";

const initialState = {
  isLoading: false,
  albums: null,
  submittingNote: false,
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        albums: action.albums,
      };
    case GET_ALBUMS_FAILURE:
      return {
        isLoading: false,
        error: action.err,
        albums: null,
      };
    case SUBMIT_NOTE:
      return {
        ...state,
        submittingNote: true,
      };
    case SUBMIT_NOTE_SUCCESS:
      return {
        ...state,
        submittingNote: false,
      };
    case SUBMIT_NOTE_FAILURE:
      return {
        ...state,
        submittingNote: false,
      };
    default:
      return state;
  }
};

export default albumsReducer;
