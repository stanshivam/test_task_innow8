import { fork, take, put, call } from "redux-saga/effects";
import {
  getAlbumsSuccess,
  getAlbumsFailure,
  submitNoteSuccess,
  submitNoteFailure,
} from "../actions/albumsActions";
import { albumsService } from "../services/albumsService";
import { GET_ALBUMS, SUBMIT_NOTE } from "../constants/albumsConstants";

function* watchGetAlbums() {
  while (true) {
    const { ids } = yield take(GET_ALBUMS);
    try {
      const res = yield call(albumsService.getAlbums, ids);
      if (res.status === 401) {
        throw new Error("Something went wrong!");
      }
      yield put(getAlbumsSuccess(res));
    } catch (err) {
      yield put(getAlbumsFailure(err));
    }
  }
}

function* watchSubmitNote() {
  while (true) {
    const { data } = yield take(SUBMIT_NOTE);
    try {
      const res = yield call(albumsService.submitNote, data);
      yield put(submitNoteSuccess(res));
    } catch (err) {
      yield put(submitNoteFailure(err));
    }
  }
}

export default function* root() {
  yield fork(watchGetAlbums);
  yield fork(watchSubmitNote);
}
