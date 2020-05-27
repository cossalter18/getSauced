import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getFavorites() {
  try {
    const response = yield axios.get("/api/threads");
    console.log("++++++++++++++", response.data);
    yield put({ type: "SET_THREADS", payload: response.data });
  } catch (error) {
    console.log("Error in GET", error);
  }
}

function* getFavoritesSaga() {
  yield takeEvery("GET_FAVORITES", getFavorites);
}

export default getFavoritesSaga;
