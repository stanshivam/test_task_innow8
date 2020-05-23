import { all } from "redux-saga/effects";
import albumsSagas from "./albumsSagas";

export default function* rootSaga() {
  yield all([albumsSagas()]);
}
