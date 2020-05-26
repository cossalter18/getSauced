import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getThreads() {
  try {
    const response = yield axios.get("/api/threads");
    console.log("++++++++++++++", response.data)
    yield put({ type: "SET_THREADS", payload: response.data });

  } catch (error) {
    console.log("Error in GET", error);
  }
}

function* threadSaga() {
  yield takeEvery("GET_THREADS", getThreads);
}

export default threadSaga;
